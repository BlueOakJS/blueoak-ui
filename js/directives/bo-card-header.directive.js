/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCardHeader', boCardHeader);

  boCardHeader.$inject = [];
  function boCardHeader() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="bo-card-header" ng-transclude></div>'
    };
  }
}());
