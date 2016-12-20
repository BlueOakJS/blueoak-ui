/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi')
    .directive('boNotification', boNotification);

  boNotification.$inject = ['NotificationService'];
  function boNotification(NotificationService) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        willShow: '&',
        didShow: '&',
        willHide: '&',
        didHide: '&'
      },
      link: function (scope, element, attrs, ctrl, transclude) {
        NotificationService.create(scope, transclude(), attrs);
      }
    };
  }
}());
