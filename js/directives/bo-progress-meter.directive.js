/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boProgressMeter', boProgressMeter);

  boProgressMeter.$inject = ['boColorClasses'];

  function boProgressMeter(boColorClasses) {
    return {
      transclude: true,
      restrict: 'E',
      scope: {
        value: '=',
        aria: '='
      },
      templateUrl: 'templates/bo-progress-meter.html'
    };
  }
}());
