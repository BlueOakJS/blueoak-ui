/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boSelect', boSelect);

  boSelect.$inject = ['EnvironmentService', '$timeout', '$rootScope'];

  function boSelect(EnvironmentService, $timeout, $rootScope) {

    function link(scope, elem, attr, ngModel) {
      // Pull this value from the environment service.
      scope.showNativeSelect = EnvironmentService.isMobile();
      var dropdown;

      scope.onOptionSelect = function(option) {
        ngModel.$setViewValue(option);
        ngModel.$render();
        dropdown.close();
      };

      scope.toggleDropdown = function() {
          $rootScope.$broadcast('bo.select.close', scope.name);
          dropdown.toggle();
      };

      // when angular detects a change to the model,
      // we update our widget
      ngModel.$render = function() {
        scope.selected = ngModel.$viewValue;
      };

      function initCustomSelect() {
        // Wait one digest cycle so that angular and foundation get along
        $timeout(function() {
          var ddElem = $('#selectDropdown-' + scope.name);
          ddElem.foundation();
          dropdown = new Foundation.Dropdown(ddElem);
          // Destroy dropdown when our directive is destroyed
          ddElem.on('$destroy', function(e, handle){
            dropdown.destroy();
          });
        }, 0);

        // Close this select whenever another one is opened.
        var deregisterClose = $rootScope.$on('bo.select.close', function(evt, emitter) {
          // Only respond to this event if the emitter is foreign
          if (emitter !== scope.name) {
            dropdown.close();
          }
        });

        scope.$on('$destroy', function() {
          deregisterClose();
        });

      }

      if (!scope.showNativeSelect) {
        initCustomSelect();
      }
    }

    return {
      link: link,
      require: 'ngModel',
      scope: {
        name: '=',
        options: '='
      },
      restrict: 'E',
      templateUrl: 'templates/bo-select.html'
    };
  }
}());
