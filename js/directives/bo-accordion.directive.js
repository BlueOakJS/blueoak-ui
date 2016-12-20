/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordion', boAccordion);

  boAccordionController.$inject = ['$scope', '$timeout'];
  function boAccordionController($scope, $timeout) {
    /*jshint validthis: true */
    var boAccordion = this,
        element,
        accordion,
        accordionItems = [];

    boAccordion.addAccordionItem = function (accordionItemElement, ngModel) {
      resetAccordion();

      $timeout(function () {
        var accordionItem = {
          element: accordionItemElement,
          ngModel: ngModel
        };

        // initialize state to match model
        if (ngModel) {
          $scope.$watch(function () {
            return ngModel.$modelValue;
          }, function (newVal) {
            updateItem(accordionItem);

            var state = newVal ? 'down' : 'up';
            element.foundation(state, accordionItemElement.find('.accordion-content'), true);
          });
        }

        // track this separately in order to detect changes
        accordionItem.isActive = accordionItemElement.hasClass('is-active');

        accordionItems.push(accordionItem);
      });
    };

    boAccordion.setAccordionElement = function (accordionElement) {
      element = accordionElement;
      resetAccordion(true);
    };

    function resetAccordion(isNew) {
      if (!element) {
        return;
      }

      if (!isNew) {
        element.foundation('destroy');
      }

      accordion = new Foundation.Accordion(element, $scope.config);

      element
        .off('down.zf.accordion')
        .off('up.zf.accordion')
        .on('down.zf.accordion', updateAll)
        .on('up.zf.accordion', updateAll);
    }

    boAccordion.accordionItemIsActive = function (accordionItemElement) {
      return accordionItemElement.hasClass('is-active');
    };

    function updateAll() {
      accordionItems.forEach(updateItem);
    }

    function updateItem(accordionItem) {
      var wasActive = accordionItem.isActive;
      var isActive = boAccordion.accordionItemIsActive(accordionItem.element);

      if (wasActive !== isActive) {
        accordionItem.isActive = isActive;
        if (accordionItem.ngModel) {
          accordionItem.ngModel.$setViewValue(isActive);
          accordionItem.ngModel.$commitViewValue();
        }
      }
    }
  }


  boAccordion.$inject = [];
  function boAccordion() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        config: '='
      },
      templateUrl: 'templates/bo-accordion.html',
      controller: boAccordionController,
      controllerAs: 'boAccordionCtrl',
      require: 'boAccordion',
      link: function (scope, element, attrs, boAccordion) {
        var accordionElement = element.find('.accordion');
        boAccordion.setAccordionElement(accordionElement);
      }
    };
  }
}());
