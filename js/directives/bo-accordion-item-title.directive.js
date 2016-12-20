/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordionItemTitle', boAccordionItemTitle);

  boAccordionItemTitle.$inject = [];
  function boAccordionItemTitle() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'templates/bo-accordion-item-title.html'
    };
  }
}());
