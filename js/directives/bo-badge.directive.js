/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boBadge', boBadge);

  boBadge.$inject = [];

  function boBadge() {

    return {
      transclude: true,
      replace: true,
      restrict: 'E',
      scope: {},
      templateUrl: 'templates/bo-badge.html',
    };
  }
}());
