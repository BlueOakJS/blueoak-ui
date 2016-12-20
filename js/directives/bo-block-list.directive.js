/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boBlocklist', boBlocklist);

  boBlocklist.$inject = [];
  function boBlocklist() {

    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/bo-blocklist.html',
      scope: {
      	title: '=?'
      }
    };
  }
}());
