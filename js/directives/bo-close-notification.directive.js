/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi')
    .directive('boCloseNotification', boCloseNotification);

  boCloseNotification.$inject = ['NotificationService'];
  function boCloseNotification(NotificationService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/bo-close-notification.html',
      link: function (scope, element) {

        var id = element.closest('.bo-notification').attr('id');
        if (!id) {
          id = element.closest('[data-reveal]').attr('id');
        }

        element.find('button').on('click', function () {
          NotificationService.hide(id);
        });
      }
    };
  }
}());
