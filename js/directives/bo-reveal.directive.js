/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi')
    .directive('reveal', reveal);

  reveal.$inject = ['NotificationService'];
  function reveal(NotificationService) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        NotificationService.register(element, attrs);
      }
    };
  }
}());
