/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordionItem', boAccordionItem);

  boAccordionItem.$inject = [];
  function boAccordionItem() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      require: ['^boAccordion', '?ngModel'],
      templateUrl: 'templates/bo-accordion-item.html',
      link: function (scope, element, attrs, ctrls) {
        var boAccordion = ctrls[0],
            ngModel = ctrls[1];

        boAccordion.addAccordionItem(element, ngModel);
      }
    };
  }
}());
