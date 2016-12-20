/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';
  angular.module('blueOakUi')
    .service('NotificationService', NotificationService);

  NotificationService.$inject = ['$compile', '$timeout', '$q', '$document'];
  function NotificationService($compile, $timeout, $q, $document) {
    var overlay,
      notifications = {},
      animationDelay = 50, // necessary to show overlay, then notification
      animationDuration = 300; // TODO pull from computed css

    $document.on('closeme.zf.reveal', function (event) {
      var id = event.target.id;
      var notification = notifications[id];
      if (notification) {
        notification.willShow();
      }
    });

    $document.on('open.zf.reveal', function (event) {
      var id = event.target.id;
      var notification = notifications[id];
      if (notification) {
        notification.didShow();
      }
    });

    $document.on('closed.zf.reveal', function (event) {
      var id = event.target.id;
      var notification = notifications[id];
      if (notification) {
        notification.willHide();
        notification.didHide();
      }
    });

    function getScopeFn(scope, fnName) {
      return angular.isObject(scope) && angular.isFunction(scope[fnName]) ?
        angular.bind(scope, scope[fnName]) : angular.noop;
    }

    function createNotificationApi(scope, element, attrs) {
      return {
        id: attrs.id,
        element: element,
        willShow: getScopeFn(scope, 'willShow'),
        didShow: getScopeFn(scope, 'didShow'),
        willHide: getScopeFn(scope, 'willHide'),
        didHide: getScopeFn(scope, 'didHide'),
        isFoundation: angular.isDefined(attrs.reveal) || attrs.position === 'center'
      };
    }

    function create(scope, element, attrs) {
      var wrapper;

      if (attrs.position === 'center') {
        wrapper = angular.element('<div class="reveal" data-reveal></div>');
        angular.element('body').append(wrapper);
      } else {
        wrapper = angular.element('<div class="bo-notification"></div>')
                  .attr('position', attrs.position);
        overlay.append(wrapper);
      }

      wrapper.attr('id', attrs.id);
      wrapper.append(element);

      if (attrs.showCloseButton !== 'false') {
        wrapper.append($compile('<bo-close-notification></bo-close-notification>')(scope));
      }
      notifications[attrs.id] = createNotificationApi(scope, wrapper, attrs);
    }

    function show(id) {
      var notification = notifications[id];

      return $q.when(notification.willShow()).then(function (shouldShow) {
        if (shouldShow !== false) {
          return showNotification(notification);
        }
      });
    }

    function showNotification(notification) {
      if (notification.isFoundation) {
        notification.element.foundation('open');
      } else {
        overlay.show();
        $timeout(function () {
          notification.element.addClass('show-notification');
        }, animationDelay);

        return $timeout(function () {
          notification.didShow();
        }, animationDelay + animationDuration);
      }
    }

    function hide(id) {
      var notification = notifications[id],
        element = notification.element;

      notification.willHide();

      if (notification.isFoundation) {
        element.foundation('close');
      } else {
        element.removeClass('show-notification');
        $timeout(function () {
          overlay.hide();
          notification.didHide();
        }, animationDuration);
      }
    }

    function hideAll() {
      var openIds = angular.element('.show-notification').map(function () {
        return angular.element(this).attr('id');
      });

      angular.forEach(openIds, hide);
    }

    function register(element, attrs) {
      notifications[attrs.id] = createNotificationApi(null, element, attrs);
    }

    function activate() {
      overlay = angular.element('body')
            .append('<div class="bo-overlay"></div>')
            .find('.bo-overlay:last')
            .on('click', function (event) {
              if (angular.element(event.target).is('.bo-overlay')) {
                hideAll();
              }
            });
    }

    activate();

    this.show = show;
    this.hide = hide;
    this.create = create;
    this.register = register;
  }
}());
