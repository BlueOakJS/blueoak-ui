/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCardContent', boCardContent);

  boCardContent.$inject = [];
  function boCardContent() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="bo-card-content" ng-transclude></div>'
    };
  }
}());
