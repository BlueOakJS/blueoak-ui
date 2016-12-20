/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boRadioGroup', boRadioGroup);

  boRadioGroup.$inject = [];

  function boRadioGroup() {
    return {
      transclude: true,
      restrict: 'E',
      require: 'ngModel',
      templateUrl: 'templates/bo-radio-group.html'
    };
  }
}());
