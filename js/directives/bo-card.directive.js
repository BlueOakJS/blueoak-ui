/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCard', boCard);

  boCard.$inject = [];
  function boCard() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="bo-card" ng-transclude></div>'
    };
  }
}());
