/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCardImage', boCardImage);

  boCardImage.$inject = [];
  function boCardImage() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="bo-card-image" ng-transclude></div>'
    };
  }
}());
