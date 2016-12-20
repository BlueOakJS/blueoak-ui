/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function() {
  'use strict';

  angular.module('blueOakUi').directive('boListItem', BoListItem);

  function BoListItem() {
    return {
      restrict: 'E',
      templateUrl: 'templates/bo-list-item.html',
      replace: true,
      transclude: true,
      scope: {
        item: '=',
        actionItem: '=',
        actionIcon: '='
      },
      controller: boListItemController,
      controllerAs: 'boListItemCtrl',
      bindToController: true
    };
  }

  boListItemController.$inject = ['$scope', '$rootScope', '$element', '$timeout', '$log',
  '$window'];

  function boListItemController($scope, $rootScope, $element, $timeout, $log, $window) {
    var vm = this;
    vm.disableNav = false;
    vm.lastDelta = 0;
    vm.panComplete = true;

    // Handle missing HammerJS dependency gracefully
    if (typeof $window.Hammer === 'function') {

      var Hammer = $window.Hammer;

      if (vm.actionItem) {
        var ACTION_WIDTH;
        $timeout(function () {
          ACTION_WIDTH = $element.children('.swipe-action').width();
        }, 50);
      }

      $scope.$on('listItemActionComplete', function (event, id) {
        if (vm.item.id === id) {
          vm.hideAction();
          $timeout(function () {
            vm.takingAction = false;
            vm.animating = false;
          }, 50);
        }
      });

      $timeout(function () {
        if (vm.actionItem) {
          initAction();
        }
      }, 0);

      angular.extend(vm, {
        adjustAction: adjustAction,
        showAction: showAction,
        listItemAction: listItemAction
      });
    }

    vm.viewDetails = function() {
      if (!vm.disableNav && vm.panComplete) {
        $timeout(function () {
          $scope.$emit('viewDetails', vm.item);
        }, 0);
      }
      else if (!vm.animating) {
        vm.hideAction();
      }
    };


    vm.hideAction = function() {
      var currentRightPosition = parseInt($element.css('right')) || 0;

      if (currentRightPosition > 0) {
        $element.animate({right: '-=' + currentRightPosition.toString()}, 50);
      }

      vm.animating = true;
      vm.disableNav = false;

      $timeout(function () {
        vm.animating = false;
      }, 50);
    };

    function initAction () {
      var myElement = $element[0];
      vm.noNav = false;
      var options = {
        threshold: 10
      };

      var mcPan = new Hammer(myElement, options);
      mcPan.on('panleft', onPanLeft);
      mcPan.on('panright', onPanRight);
      mcPan.on('panend', onPanEnd);
    }

    function adjustAction (deltaX) {
      var currentRightPosition = parseInt($element.css('right')) || 0;

      var resultPosition = currentRightPosition - deltaX;
      vm.disableNav = (resultPosition > 0);

      if (currentRightPosition >= 0 && currentRightPosition <= ACTION_WIDTH) {
        if (resultPosition > ACTION_WIDTH) {
          resultPosition = ACTION_WIDTH;
        }
        else if (resultPosition < 0) {
          resultPosition = 0;
        }
        $element.css('right', (resultPosition).toString() + 'px');

      }

      vm.animating = true;
      $timeout(function () {
        vm.animating = false;
      }, 50);
    }

    function showAction () {
      var currentRightPosition = parseInt($element.css('right')) || 0;

      if (currentRightPosition > 0) {
        $element.animate({right: ACTION_WIDTH + 'px'}, 25);
      }

      vm.animating = true;
      vm.disableNav = true;

      $timeout(function () {
        vm.animating = false;
      }, 25);
    }

    function listItemAction () {
      if (!vm.takingAction) {
        vm.takingAction = true;
        $scope.$emit('listItemAction', vm.item);
        vm.animating = true;
      }
    }

    function processPanPosition () {
      vm.handlingPanEnd = true;
      var rightPosition = parseInt($element.css('right'));
      vm.noNav = (rightPosition !== 0);

      if (rightPosition > 0 && rightPosition < (ACTION_WIDTH/2)) {
        vm.hideAction();
      }
      else if (rightPosition < ACTION_WIDTH && rightPosition >= (ACTION_WIDTH/2)){
        vm.showAction();
      }

      $timeout(function () {
        vm.handlingPanEnd = false;
      }, 50);
    }

    function handlePanEndPosition() {
      if (!vm.handlingPanEnd) {
        try {
          $scope.$apply(function () {
            processPanPosition();
          });
        }
        catch(e) {
          processPanPosition();
        }
      }
    }

    function onPanLeft(event) {
      $timeout(function () {
        vm.panComplete = false;
      }, 0);

      // if the delta is greater than the last delta (less negative) send
      // that difference as a positive number
      if (event.deltaX < vm.lastDelta) {
        vm.lastDelta = -1 * Math.abs(vm.lastDelta - event.deltaX);
        vm.adjustAction(vm.lastDelta);
      }
      else {
        vm.adjustAction(event.deltaX);
      }

      vm.lastDelta = event.deltaX;
    }

    function onPanRight(event) {
      $timeout(function () {
        vm.panComplete = false;
      }, 0);

      if (event.deltaX > vm.lastDelta) {
        vm.lastDelta = Math.abs(vm.lastDelta - event.deltaX);
        vm.adjustAction(vm.lastDelta);
      }
      else {
        vm.adjustAction(event.deltaX);
      }

      vm.lastDelta = event.deltaX;
    }

    function onPanEnd() {
      handlePanEndPosition();

      vm.lastDelta = 0;

      $timeout(function () {
        vm.panComplete = true;
      }, 50);
    }
  }
})();
