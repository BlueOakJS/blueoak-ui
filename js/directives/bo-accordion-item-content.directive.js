/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordionItemContent', boAccordionItemContent);

  boAccordionItemContent.$inject = [];
  function boAccordionItemContent() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'templates/bo-accordion-item-content.html'
    };
  }
}());
