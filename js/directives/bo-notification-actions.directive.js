/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi')
    .directive('boNotificationActions', boNotificationActions);

  boNotificationActions.$inject = [];
  function boNotificationActions() {
    return {
      restrict: 'E',
      templateUrl: 'templates/bo-notification-actions.html',
      scope: {
        onOk: '&',
        onCancel: '&'
      },
      link: function (scope) {

        scope.okClicked = function () {
          if (angular.isFunction(scope.onOk)) {
            scope.onOk();
          }
        };

        scope.cancelClicked = function () {
          if (angular.isFunction(scope.onCancel)) {
            scope.onCancel();
          }
        };
      }
    };
  }
}());
