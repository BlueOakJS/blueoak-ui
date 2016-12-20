angular.module("blueOakUiTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/bo-accordion-item-content.html","<div class=\"accordion-content\" data-tab-content ng-transclude></div>");
$templateCache.put("templates/bo-accordion-item-title.html","<a href=\"#\" class=\"accordion-title\" ng-transclude></a>");
$templateCache.put("templates/bo-accordion-item.html","<li class=\"accordion-item\" data-accordion-item ng-transclude></li>");
$templateCache.put("templates/bo-accordion.html","<ul class=\"accordion\" ng-transclude></ul>");
$templateCache.put("templates/bo-badge.html","<span class=\"bo-badge\" ng-transclude></span>");
$templateCache.put("templates/bo-blocklist-item.html","<li ng-class=\"{\'linked\': linked}\">\r\n	<ng-transclude></ng-transclude>\r\n</li>");
$templateCache.put("templates/bo-blocklist.html","<div ng-if=\"title\" class=\"bo-blocklist-title\">{{title}}</div>\r\n\r\n<ul class=\"bo-blocklist-ul\" ng-transclude></ul>");
$templateCache.put("templates/bo-checkbox.html","<label>\r\n  <input class=\"bo-aria-hidden\" type=\"checkbox\">\r\n  <i aria-hidden=\"true\"></i>\r\n  <span class=\"bo-checkbox-label\" ng-transclude></span>\r\n</label>\r\n");
$templateCache.put("templates/bo-close-notification.html","<button aria-label=\"close\">\r\n    <i class=\"bo-icon-close\" aria-hidden=\"true\"></i>\r\n</button>\r\n");
$templateCache.put("templates/bo-content.html","<div class=\"bo-view-content\" snap-content snap-options=\"state.snap\">\r\n  <div class=\"bo-content-wrapper\">\r\n    <div class=\"bo-dragger\" snap-dragger></div>\r\n\r\n    <div ng-if=\"state.open\" class=\"bo-view-cover\"></div>\r\n\r\n    <div class=\"bo-view-wrapper\">\r\n      <ng-transclude></ng-transclude>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("templates/bo-list-item.html","<div class=\"row-list-item with-chevron\"\r\n  ng-class=\"{\'activeNav\': !boListItemCtrl.noNav}\"\r\n  ng-click=\"boListItemCtrl.viewDetails()\">\r\n\r\n  <div ng-transclude></div>\r\n\r\n  <div class=\"swipe-action swipe-action-add\" ng-click=\"boListItemCtrl.listItemAction()\" ng-if=\"boListItemCtrl.actionItem\">\r\n    <i class=\"fa\" ng-class=\"boListItemCtrl.actionIcon\" ng-if=\"!boListItemCtrl.takingAction\"></i>\r\n    <i class=\"fa fa-spinner fa-spin\" ng-if=\"boListItemCtrl.takingAction\"></i>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("templates/bo-main-content.html","<div class=\"off-canvas-content\" data-off-canvas-content ng-transclude></div>");
$templateCache.put("templates/bo-menu.html","<ul class=\"bo-menu\"\r\n		data-dropdown-menu\r\n		ng-transclude>\r\n</ul>\r\n");
$templateCache.put("templates/bo-notification-actions.html","<div class=\"row\">\r\n    <div class=\"small-6 columns\">\r\n        <button class=\"button float-right\" ng-click=\"okClicked()\">OK</button>\r\n    </div>\r\n    <div class=\"small-6 columns\">\r\n        <button class=\"button float-left\" ng-click=\"cancelClicked()\">Cancel</button>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("templates/bo-progress-meter.html","<div class=\"progress\"\r\n     role=\"progressbar\"\r\n     tabindex=\"0\"\r\n     ng-attr-aria-valuenow=\"{{ aria.value }}\"\r\n     ng-attr-aria-valuemin=\"{{ aria.min }}\"\r\n     ng-attr-aria-valuetext=\"{{ aria.text }}\"\r\n     ng-attr-aria-valuemax=\"{{ aria.max }}\">\r\n  <div class=\"progress-meter\" ng-style=\"{width: value * 100 + \'%\'}\"}>\r\n    <p class=\"progress-meter-text\" ng-transclude></p>\r\n  </div>\r\n</div>");
$templateCache.put("templates/bo-radio-group.html","<div class=\"bo-radio-group\" role=\"radiogroup\" ng-transclude>\r\n</div>");
$templateCache.put("templates/bo-radio.html","<label class=\"bo-radio-item\" role=\"radio\" tabindex=\"0\">\r\n  <i aria-hidden=\"true\"></i>\r\n  <span class=\"bo-radio-label\" ng-transclude></span>\r\n  <input type=\"radio\" aria-hidden=\"true\" class=\"hide\">\r\n</label>");
$templateCache.put("templates/bo-search.html","<i aria-hidden=\"true\"></i>\r\n<input type=\"search\">");
$templateCache.put("templates/bo-select.html","<!-- Use custom select implementation when on desktop -->\r\n<div ng-if=\"!showNativeSelect\" class=\"row collapse\">\r\n	<div class=\"customSelect small-12 columns\">\r\n		<button ng-click=\"toggleDropdown()\" data-toggle=\"selectDropdown-{{name}}\" aria-controls=\"selectDropdown-{{name}}\">{{selected.label}}</button>\r\n		<div id=\"selectDropdown-{{name}}\" class=\"dropdown-pane\" data-dropdown data-auto-focus=\"true\" data-close-on-click=\"true\" data-hover-pane=\"true\">\r\n			<ul>\r\n			  <li ng-repeat=\"option in options\" ng-click=\"onOptionSelect(option)\">\r\n			  	<i ng-if=\"selected.value === option.value\" class=\"bo-icon-check\"/>\r\n			  	<a>{{option.label}}</a>\r\n			  </li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- Use native select implementation when available -->\r\n<select ng-if=\"showNativeSelect\" class=\"nativeSelect\" name=\"{{ name }}\" ng-model=\"selected\">\r\n	<option ng-repeat=\"option in options\" value=\"{{ option.value }}\">{{option.label}}</option>\r\n</select>\r\n\r\n");
$templateCache.put("templates/bo-side-menu-layout.html","<div class=\"off-canvas-wrapper\">\r\n    <div class=\"off-canvas-wrapper-inner\" data-off-canvas-wrapper ng-transclude></div>\r\n</div>\r\n");
$templateCache.put("templates/bo-slider.html","<label ng-attr-id=\"sliderLabel-{{name}}\" ng-bind=\"name\"></label>\r\n<div class=\"slider\" data-slider>\r\n  <span class=\"slider-handle\"\r\n        data-slider-handle\r\n        role=\"slider\"\r\n        ng-attr-aria-labelledby=\"sliderLabel-{{name}}\"\r\n        tabindex=\"1\"></span>\r\n  <span class=\"slider-fill\" data-slider-fill></span>\r\n  <input type=\"hidden\">\r\n</div>");
$templateCache.put("templates/bo-switch.html","<label class=\"switch\">\r\n	<input class=\"switch-input\" type=\"checkbox\">\r\n	<label class=\"switch-paddle\">\r\n		<span class=\"show-for-sr\"></span>\r\n	</label>\r\n</label>");
$templateCache.put("templates/bo-tab-content.html","<div class=\"tabs-panel\" role=\"tabpanel\" ng-transclude></div>");
$templateCache.put("templates/bo-tab.html","<li class=\"tabs-title\" role=\"tab\">\r\n  <a ng-transclude href=\"#\"></a>\r\n</li>");}]);
/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi', [
    'blueOakUiTemplates',
    'snap',
    'ngSanitize'
 ]);

  angular.module('blueOakUi').run(function () {
    $(document).foundation();
  });

}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').constant('boColorClasses', [
    'primary',
    'secondary',
    'success',
    'warning',
    'alert'
  ]);
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular.module('blueOakUi')
        .factory('EnvironmentService', EnvironmentService);

    EnvironmentService.$inject = ['$window'];

    function EnvironmentService($window) {

        return {
            /* User is executing this on a mobile device (currently iOS or Android) */
            isMobile: isMobile
        };

        function isAndroid() {
            return /Android/i.test($window.navigator.userAgent);
        }

        function isIos() {
            return /iPhone|iPad|iPod/i.test($window.navigator.userAgent);
        }

        function isMobile() {
            return ( isAndroid() || isIos() );
        }
    }
})();

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

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .service('SideMenuService', SideMenuService);

    SideMenuService.$inject = [];

    /**
     * @ngdoc service
     * @name SideMenuService
     * @description
     * #
     */
    function SideMenuService() {

        function open(id) {
            angular.element('#' + id).foundation('open');
        }

        function close(id) {
            angular.element('#' + id).foundation('close');
        }

        function isOpen(id) {
            return angular.element('#' + id).hasClass('is-open');
        }

        this.open = open;
        this.close = close;
        this.isOpen = isOpen;
    }
})();

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordionItemContent', boAccordionItemContent);

  boAccordionItemContent.$inject = [];
  function boAccordionItemContent() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'templates/bo-accordion-item-content.html'
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordionItemTitle', boAccordionItemTitle);

  boAccordionItemTitle.$inject = [];
  function boAccordionItemTitle() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'templates/bo-accordion-item-title.html'
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordionItem', boAccordionItem);

  boAccordionItem.$inject = [];
  function boAccordionItem() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      require: ['^boAccordion', '?ngModel'],
      templateUrl: 'templates/bo-accordion-item.html',
      link: function (scope, element, attrs, ctrls) {
        var boAccordion = ctrls[0],
            ngModel = ctrls[1];

        boAccordion.addAccordionItem(element, ngModel);
      }
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boAccordion', boAccordion);

  boAccordionController.$inject = ['$scope', '$timeout'];
  function boAccordionController($scope, $timeout) {
    /*jshint validthis: true */
    var boAccordion = this,
        element,
        accordion,
        accordionItems = [];

    boAccordion.addAccordionItem = function (accordionItemElement, ngModel) {
      resetAccordion();

      $timeout(function () {
        var accordionItem = {
          element: accordionItemElement,
          ngModel: ngModel
        };

        // initialize state to match model
        if (ngModel) {
          $scope.$watch(function () {
            return ngModel.$modelValue;
          }, function (newVal) {
            updateItem(accordionItem);

            var state = newVal ? 'down' : 'up';
            element.foundation(state, accordionItemElement.find('.accordion-content'), true);
          });
        }

        // track this separately in order to detect changes
        accordionItem.isActive = accordionItemElement.hasClass('is-active');

        accordionItems.push(accordionItem);
      });
    };

    boAccordion.setAccordionElement = function (accordionElement) {
      element = accordionElement;
      resetAccordion(true);
    };

    function resetAccordion(isNew) {
      if (!element) {
        return;
      }

      if (!isNew) {
        element.foundation('destroy');
      }

      accordion = new Foundation.Accordion(element, $scope.config);

      element
        .off('down.zf.accordion')
        .off('up.zf.accordion')
        .on('down.zf.accordion', updateAll)
        .on('up.zf.accordion', updateAll);
    }

    boAccordion.accordionItemIsActive = function (accordionItemElement) {
      return accordionItemElement.hasClass('is-active');
    };

    function updateAll() {
      accordionItems.forEach(updateItem);
    }

    function updateItem(accordionItem) {
      var wasActive = accordionItem.isActive;
      var isActive = boAccordion.accordionItemIsActive(accordionItem.element);

      if (wasActive !== isActive) {
        accordionItem.isActive = isActive;
        if (accordionItem.ngModel) {
          accordionItem.ngModel.$setViewValue(isActive);
          accordionItem.ngModel.$commitViewValue();
        }
      }
    }
  }


  boAccordion.$inject = [];
  function boAccordion() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        config: '='
      },
      templateUrl: 'templates/bo-accordion.html',
      controller: boAccordionController,
      controllerAs: 'boAccordionCtrl',
      require: 'boAccordion',
      link: function (scope, element, attrs, boAccordion) {
        var accordionElement = element.find('.accordion');
        boAccordion.setAccordionElement(accordionElement);
      }
    };
  }
}());

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

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

/*
 * Note: This directive is only designed to be a child of boBlocklist.
 *       Use of this directive outside of the context of a boBlocklist
 *       element is not recommended.
 */
(function () {
  'use strict';

  angular.module('blueOakUi').directive('boBlocklistItem', boBlocklistItem);

  boBlocklistItem.$inject = [];
  function boBlocklistItem() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'templates/bo-blocklist-item.html',
      scope: {
        linked: '=?'
      },
      compile: function(element, attr) {
        var li = element.find('li');
        angular.forEach({
          'ng-click': attr.ngClick
        }, function(value, name) {
          if (angular.isDefined(value)) {
            li.attr(name, value);
          }
        });
      }
    };
  }
}());

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

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCardContent', boCardContent);

  boCardContent.$inject = [];
  function boCardContent() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="bo-card-content" ng-transclude></div>'
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCardHeader', boCardHeader);

  boCardHeader.$inject = [];
  function boCardHeader() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="bo-card-header" ng-transclude></div>'
    };
  }
}());

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

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCard', boCard);

  boCard.$inject = [];
  function boCard() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="bo-card" ng-transclude></div>'
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCheckbox', boCheckbox);

  boCheckbox.$inject = ['$timeout'];
  function boCheckbox($timeout) {
    var DEFAULT_SELECTED_ICON_CLASS = 'bo-icon-checkbox-selected';
    var DEFAULT_UNSELECTED_ICON_CLASS = 'bo-icon-checkbox';

    function link(scope, element, attrs, ngModel) {
      var icon = element.find('i');
      var selectedClass = angular.isDefined(attrs.iconSelected) ? attrs.iconSelected :
        DEFAULT_SELECTED_ICON_CLASS;
      var unselectedClass = angular.isDefined(attrs.iconUnselected) ? attrs.iconUnselected :
        DEFAULT_UNSELECTED_ICON_CLASS;

      var input = element.find('input')[0];

      scope.$watch(function () {
        return ngModel.$modelValue;
      }, setCheckedIcon);

      // init
      $timeout(setCheckedIcon);

      function setCheckedIcon() {
        // use the input's value, not ngModel, in case ngTrueValue or ngFalseValue is being used
        if (input.checked) {
          icon.removeClass(unselectedClass);
          icon.addClass(selectedClass);
        } else {
          icon.removeClass(selectedClass);
          icon.addClass(unselectedClass);
        }
      }
    }

    return {
      restrict: 'E',
      require: 'ngModel',
      transclude: true,
      templateUrl: 'templates/bo-checkbox.html',
      compile: function(element, attr) {
        var input = element.find('input[type="checkbox"]');
        angular.forEach({
          'ng-model': attr.ngModel,
          'name': attr.name,
          'ng-true-value': attr.ngTrueValue,
          'ng-false-value': attr.ngFalseValue,
          'ng-change': attr.ngChange
        }, function(value, name) {
          if (angular.isDefined(value)) {
            input.attr(name, value);
            element.removeAttr(name);
          }
        });

        return link;
      }
    };
  }
}());

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

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boContent', boContent);

  boContent.$inject = ['snapRemote'];

  function boContent (snapRemote) {
    function link (scope) {
      scope.state = {};

      scope.state.snap = {
        disable: 'right'
      };

      scope.state.type = {
        angularRoute: true
      };

      snapRemote.getSnapper().then(function (snapper) {
        snapper.on('animated', function () {
          if(snapper.state().state === 'closed') {
            scope.$apply(function () {
              scope.state.open = false;
            });
          }

          if(snapper.state().state === 'left') {
            scope.$apply(function () {
              scope.state.open = true;
            });
          }
        });
      });
    }

    return {
      link: link,
      restrict: 'E',
      transclude: true,
        templateUrl: 'templates/bo-content.html'
    };
  }

}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function() {
  'use strict';

  angular.module('blueOakUi').directive('boListItem', BoListItem);

  function BoListItem() {
    return {
      restrict: 'E',
      templateUrl: 'templates/bo-list-item.html',
      replace: true,
      transclude: true,
      scope: {
        item: '=',
        actionItem: '=',
        actionIcon: '='
      },
      controller: boListItemController,
      controllerAs: 'boListItemCtrl',
      bindToController: true
    };
  }

  boListItemController.$inject = ['$scope', '$rootScope', '$element', '$timeout', '$log',
  '$window'];

  function boListItemController($scope, $rootScope, $element, $timeout, $log, $window) {
    var vm = this;
    vm.disableNav = false;
    vm.lastDelta = 0;
    vm.panComplete = true;

    // Handle missing HammerJS dependency gracefully
    if (typeof $window.Hammer === 'function') {

      var Hammer = $window.Hammer;

      if (vm.actionItem) {
        var ACTION_WIDTH;
        $timeout(function () {
          ACTION_WIDTH = $element.children('.swipe-action').width();
        }, 50);
      }

      $scope.$on('listItemActionComplete', function (event, id) {
        if (vm.item.id === id) {
          vm.hideAction();
          $timeout(function () {
            vm.takingAction = false;
            vm.animating = false;
          }, 50);
        }
      });

      $timeout(function () {
        if (vm.actionItem) {
          initAction();
        }
      }, 0);

      angular.extend(vm, {
        adjustAction: adjustAction,
        showAction: showAction,
        listItemAction: listItemAction
      });
    }

    vm.viewDetails = function() {
      if (!vm.disableNav && vm.panComplete) {
        $timeout(function () {
          $scope.$emit('viewDetails', vm.item);
        }, 0);
      }
      else if (!vm.animating) {
        vm.hideAction();
      }
    };


    vm.hideAction = function() {
      var currentRightPosition = parseInt($element.css('right')) || 0;

      if (currentRightPosition > 0) {
        $element.animate({right: '-=' + currentRightPosition.toString()}, 50);
      }

      vm.animating = true;
      vm.disableNav = false;

      $timeout(function () {
        vm.animating = false;
      }, 50);
    };

    function initAction () {
      var myElement = $element[0];
      vm.noNav = false;
      var options = {
        threshold: 10
      };

      var mcPan = new Hammer(myElement, options);
      mcPan.on('panleft', onPanLeft);
      mcPan.on('panright', onPanRight);
      mcPan.on('panend', onPanEnd);
    }

    function adjustAction (deltaX) {
      var currentRightPosition = parseInt($element.css('right')) || 0;

      var resultPosition = currentRightPosition - deltaX;
      vm.disableNav = (resultPosition > 0);

      if (currentRightPosition >= 0 && currentRightPosition <= ACTION_WIDTH) {
        if (resultPosition > ACTION_WIDTH) {
          resultPosition = ACTION_WIDTH;
        }
        else if (resultPosition < 0) {
          resultPosition = 0;
        }
        $element.css('right', (resultPosition).toString() + 'px');

      }

      vm.animating = true;
      $timeout(function () {
        vm.animating = false;
      }, 50);
    }

    function showAction () {
      var currentRightPosition = parseInt($element.css('right')) || 0;

      if (currentRightPosition > 0) {
        $element.animate({right: ACTION_WIDTH + 'px'}, 25);
      }

      vm.animating = true;
      vm.disableNav = true;

      $timeout(function () {
        vm.animating = false;
      }, 25);
    }

    function listItemAction () {
      if (!vm.takingAction) {
        vm.takingAction = true;
        $scope.$emit('listItemAction', vm.item);
        vm.animating = true;
      }
    }

    function processPanPosition () {
      vm.handlingPanEnd = true;
      var rightPosition = parseInt($element.css('right'));
      vm.noNav = (rightPosition !== 0);

      if (rightPosition > 0 && rightPosition < (ACTION_WIDTH/2)) {
        vm.hideAction();
      }
      else if (rightPosition < ACTION_WIDTH && rightPosition >= (ACTION_WIDTH/2)){
        vm.showAction();
      }

      $timeout(function () {
        vm.handlingPanEnd = false;
      }, 50);
    }

    function handlePanEndPosition() {
      if (!vm.handlingPanEnd) {
        try {
          $scope.$apply(function () {
            processPanPosition();
          });
        }
        catch(e) {
          processPanPosition();
        }
      }
    }

    function onPanLeft(event) {
      $timeout(function () {
        vm.panComplete = false;
      }, 0);

      // if the delta is greater than the last delta (less negative) send
      // that difference as a positive number
      if (event.deltaX < vm.lastDelta) {
        vm.lastDelta = -1 * Math.abs(vm.lastDelta - event.deltaX);
        vm.adjustAction(vm.lastDelta);
      }
      else {
        vm.adjustAction(event.deltaX);
      }

      vm.lastDelta = event.deltaX;
    }

    function onPanRight(event) {
      $timeout(function () {
        vm.panComplete = false;
      }, 0);

      if (event.deltaX > vm.lastDelta) {
        vm.lastDelta = Math.abs(vm.lastDelta - event.deltaX);
        vm.adjustAction(vm.lastDelta);
      }
      else {
        vm.adjustAction(event.deltaX);
      }

      vm.lastDelta = event.deltaX;
    }

    function onPanEnd() {
      handlePanEndPosition();

      vm.lastDelta = 0;

      $timeout(function () {
        vm.panComplete = true;
      }, 50);
    }
  }
})();

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .directive('boMainContent', BoMainContent);

    BoMainContent.$inject = [];

    /**
     * @ngdoc directive
     * @name BoMainContent
     * @description
     * #
     */
    function BoMainContent() {
        return {
            templateUrl: 'templates/bo-main-content.html',
            restrict: 'E',
            transclude: true
        };
    }
})();

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

/*
 * Note: This directive is only designed to be a child of boMenu.
 *       Use of this directive outside of the context of a boMenu
 *       element is not recommended.
 */
(function () {
  'use strict';

  angular.module('blueOakUi').directive('boMenuItem', boMenuItem);

  boMenuItem.$inject = [];
  function boMenuItem() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<li class="bo-menu-item" ng-transclude></li>',
      compile: function(element, attr) {
        var li = element.find('li');
        angular.forEach({
          'ng-click': attr.ngClick
        }, function(value, name) {
          if (angular.isDefined(value)) {
            li.attr(name, value);
          }
        });
      }
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boMenu', boMenu);

  boMenu.$inject = [];
  function boMenu() {

    function link(scope, element, attr, ctrl, transcludeFn) {
      // Unwrap our menu (replace with ul.bo-menu)
      // We have to replace here in order to meet
      // FFS6 Menu DOM structure requirements
      var ddMenu = angular.element(element[0].firstChild);
      element.replaceWith(ddMenu);

      // We test here to see if this node is contained within
      // another FFS6 Dropdown Menu. If it is, we do not need
      // to initialize it as a 'dropdown menu', (a regular FFS6
      // 'menu' is sufficient).
      if (!isFFS6Submenu(ddMenu)) {
        // Initialize FFS6 Dropdown Menu
        ddMenu.foundation();
        var menu = new Foundation.DropdownMenu(ddMenu, scope.config);

        // Wrap with FFS6 Top-Bar
        ddMenu.wrap('<div class="top-bar"></div>');
        // Maintenance
        ddMenu.on('$destroy', function(e, handle){
          menu.destroy();
        });
      }

      // transclude into ul.bo-menu
      element.append(transcludeFn());
    }

    function isFFS6Submenu(element) {
      var dropdowns = document.getElementsByClassName('bo-menu');
      if (dropdowns.length <= 1) { return false; }

      for (var i = 0; i < dropdowns.length; i++) {
        if ($.contains(dropdowns[i], element.context)) {
          return true;
        }
      }

      return false;
    }

    return {
      // controller: function(scope, elem, attr) {
      //   this.setActive
      // },
      compile: function(element, attrs) {
        var ddMenu = angular.element(element[0].firstChild);
        ddMenu.attr('class', 'dropdown menu bo-menu ' + attrs.class);
        return link;
      },
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/bo-menu.html',
      scope: {
        // options to pass to Foundation.DropdownMenu()
        config: '=?'
      }
    };
  }
}());

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

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boRadio', boRadio);

  boRadio.$inject = ['$timeout', '$compile'];

  function boRadio($timeout, $compile) {
    var DEFAULT_SELECTED_ICON_CLASS = 'bo-icon-radio-selected';
    var DEFAULT_UNSELECTED_ICON_CLASS = 'bo-icon-radio';

    function compile(tElement, tAttrs) {
      // these attributes are available at compile-time, move to internal input
      var input = tElement.find('input[type="radio"]');
      angular.forEach({
        'value': tAttrs.value,
        'ng-value': tAttrs.ngValue
      }, function(value, name) {
        if (angular.isDefined(value)) {
          input.attr(name, value);
          tElement.removeAttr(name);
        }
      });

      return link;
    }

    function link(scope, element, attrs, ngModel) {
      var icon = element.find('i');
      var input = element.find('input'),
          fakeRadio = element.find('[role="radio"]'),
          group = element.closest('bo-radio-group'),
          selectedClass,
          unselectedClass,
          setSelectedElement;

      // these parent attributes will not be available until now in the case of
      // an ng-repeat, so need to manually re-compile
      // in the future, may want to move these to a parent's controller
      angular.forEach({
        'ng-model': group.attr('ng-model'),
        'name': group.attr('name'),
        'ng-change': group.attr('ng-change'),
      }, function(value, name) {
        if (angular.isDefined(value)) {
          input.attr(name, value);
        }
      });

      $compile(input)(scope);

      selectedClass = group.attr('icon-selected') ? group.attr('icon-selected') :
                                                    DEFAULT_SELECTED_ICON_CLASS;

      unselectedClass = group.attr('icon-unselected') ? group.attr('icon-unselected') :
                                                    DEFAULT_UNSELECTED_ICON_CLASS;

      setSelectedElement = angular.isDefined(attrs.ngValue) ? updateUsingNgValue :
                                                                  updateUsingValue;

      scope.$watch(function () {
        return ngModel.$modelValue;
      }, setSelectedElement);

      // init
      $timeout(setSelectedElement);

      function updateUsingNgValue() {
        if (scope.$eval(attrs.ngValue) === ngModel.$modelValue) {
          updateSelection(selectedClass, unselectedClass, 'true');
        } else {
          updateSelection(unselectedClass, selectedClass, 'false');
        }
      }

      function updateUsingValue() {
        if (attrs.value === ngModel.$modelValue) {
          updateSelection(selectedClass, unselectedClass, 'true');
        } else {
          updateSelection(unselectedClass, selectedClass, 'false');
        }
      }

      function updateSelection(addClass, removeClass, ariaChecked) {
        icon.addClass(addClass);
        icon.removeClass(removeClass);
        fakeRadio.attr('aria-checked', ariaChecked);
      }
    }

    return {
      require: '^ngModel',
      transclude: true,
      restrict: 'E',
      templateUrl: 'templates/bo-radio.html',
      compile: compile
    };
  }
}());


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

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boSearch', boSearch);

  boSearch.$inject = [];

  function boSearch() {
    var DEFAULT_ICON_CLASS = 'bo-icon-magnifying-glass';

    return {
      restrict: 'E',
      require: 'ngModel',
      templateUrl: 'templates/bo-search.html',
      compile: function(element, attr) {
        var input = element.find('input[type="search"]');
        angular.forEach({
          'ng-model': attr.ngModel,
          'name': attr.name,
          'required': attr.required,
          'ng-required': attr.ngRequired,
          'ng-minlength': attr.ngMinlength,
          'ng-maxlength': attr.ngMaxlength,
          'pattern': attr.pattern,
          'ng-pattern': attr.ngPattern,
          'ng-change': attr.ngChange,
          'ng-trim': attr.ngTrim,
          'placeholder': attr.placeholder
        }, function(value, name) {
          if (angular.isDefined(value)) {
            input.attr(name, value);
            element.removeAttr(name);
          }
        });

        var iconClass = angular.isDefined(attr.icon) ? attr.icon : DEFAULT_ICON_CLASS;
        if (String(iconClass).trim() === '') {
          element.find('i').remove();
        } else {
          element.find('i').addClass(iconClass);
        }
      }
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boSelect', boSelect);

  boSelect.$inject = ['EnvironmentService', '$timeout', '$rootScope'];

  function boSelect(EnvironmentService, $timeout, $rootScope) {

    function link(scope, elem, attr, ngModel) {
      // Pull this value from the environment service.
      scope.showNativeSelect = EnvironmentService.isMobile();
      var dropdown;

      scope.onOptionSelect = function(option) {
        ngModel.$setViewValue(option);
        ngModel.$render();
        dropdown.close();
      };

      scope.toggleDropdown = function() {
          $rootScope.$broadcast('bo.select.close', scope.name);
          dropdown.toggle();
      };

      // when angular detects a change to the model,
      // we update our widget
      ngModel.$render = function() {
        scope.selected = ngModel.$viewValue;
      };

      function initCustomSelect() {
        // Wait one digest cycle so that angular and foundation get along
        $timeout(function() {
          var ddElem = $('#selectDropdown-' + scope.name);
          ddElem.foundation();
          dropdown = new Foundation.Dropdown(ddElem);
          // Destroy dropdown when our directive is destroyed
          ddElem.on('$destroy', function(e, handle){
            dropdown.destroy();
          });
        }, 0);

        // Close this select whenever another one is opened.
        var deregisterClose = $rootScope.$on('bo.select.close', function(evt, emitter) {
          // Only respond to this event if the emitter is foreign
          if (emitter !== scope.name) {
            dropdown.close();
          }
        });

        scope.$on('$destroy', function() {
          deregisterClose();
        });

      }

      if (!scope.showNativeSelect) {
        initCustomSelect();
      }
    }

    return {
      link: link,
      require: 'ngModel',
      scope: {
        name: '=',
        options: '='
      },
      restrict: 'E',
      templateUrl: 'templates/bo-select.html'
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .directive('boSideMenuLayout', BoSideMenuLayoutDirective);

    BoSideMenuLayoutDirective.$inject = [];

    /**
     * @ngdoc directive
     * @name BoSideMenuLayoutDirective
     * @description
     * #
     */
    function BoSideMenuLayoutDirective() {
        return {
            templateUrl: 'templates/bo-side-menu-layout.html',
            restrict: 'E',
            transclude: true
        };
    }
})();

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .directive('boSideMenu', BoSideMenuDirective);

    BoSideMenuDirective.$inject = [];

    /**
     * @ngdoc directive
     * @name BoSideMenuDirective
     * @description
     * #
     */
    function BoSideMenuDirective() {
        return {
            template: '<div class="off-canvas" data-off-canvas ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            link: function postLink(scope, element, attrs) {
                var offCanvas = element.find('.off-canvas');
                var id = attrs.id || 'off-canvas-' + parseInt(Math.random() * 6, 10);

                element.attr('id', null);
                offCanvas.attr('id', id);

                if (attrs.position === 'right') {
                    offCanvas.addClass('position-right');
                    offCanvas.attr('data-position', 'right');
                } else {
                    offCanvas.addClass('position-left');
                }
            }
        };
    }
})();

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

/*
 * NOTE: There are currently some known issues with the WAI-ARIA
 * slider implementation on touchscreen devices.
 * See: https://github.com/w3c/aria/issues/60#issuecomment-105238341
*/
(function () {
  'use strict';

  angular.module('blueOakUi').directive('boSlider', boSlider);

  boSlider.$inject = [];

  function boSlider() {

    function link(scope, element, attr, ngModel) {
      var slider;
      var sliderElem;

      function init () {
        sliderElem = element.find('.slider');
        sliderElem.foundation();

        // set ngModel to start value
        ngModel.$render(scope.config.initialStart);

        // initialize slider
        slider = new Foundation.Slider(sliderElem, scope.config);

        // listen for movement and update ngModel value
        sliderElem.on('moved.zf.slider', function(e, handle){
          ngModel.$render(handle.attr('aria-valuenow'));
        });

        sliderElem.on('$destroy', function(e, handle){
          sliderElem.off('moved.zf.slider');
          slider.destroy();
        });

      }

      ngModel.$render = function(value) {
        ngModel.$setViewValue(value);
      };

      init();
    }
    return {
      link: link,
      require: 'ngModel',
      scope: {
        config: '=',
        name: '='
      },
      restrict: 'E',
      templateUrl: 'templates/bo-slider.html'
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boSwitch', boSwitch);

  boSwitch.$inject = [];

  function boSwitch() {
    return {
      restrict: 'E',
      require: 'ngModel',
      templateUrl: 'templates/bo-switch.html',
      compile: function(element, attr) {
        var input = element.find('input[type="checkbox"]');
        var label = element.find('label');
        var span = element.find('span');
        input.attr('ng-attr-id', 'bo-switch-{{' + attr.name + '}}');
        label.attr('ng-attr-for', 'bo-switch-{{' + attr.name + '}}');
        span.attr('ng-bind', attr.label);
        element.removeAttr('label');
        if (angular.isDefined(attr.class)) {
          var wrapper = element.find('.switch');
          wrapper.attr('class', 'switch ' + attr.class);
        }
        angular.forEach({
          'ng-model': attr.ngModel,
          'name': attr.name,
          'ng-true-value': attr.ngTrueValue,
          'ng-false-value': attr.ngFalseValue,
          'ng-change': attr.ngChange
        }, function(value, name) {
          if (angular.isDefined(value)) {
            input.attr(name, value);
            element.removeAttr(name);
          }
        });
      }
    };
  }
}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boTabContent', boTabContent);

  boTabContent.$inject = [];

  function boTabContent () {

    function link(scope, element, attrs) {
      element.find('.tabs-panel').attr('id', attrs.id);
      element.attr('id', null);
    }

    return {
      restrict: 'E',
      require: '^boTabs',
      transclude: true,
      scope: true,
      templateUrl: 'templates/bo-tab-content.html',
      link: link
    };
  }

}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boTab', boTab);

  boTab.$inject = [];

  function boTab () {

    function link(scope, element, attrs) {
      element.find('a').attr('href', '#' + attrs.content);
    }

    return {
      replace: true, // necessary for accessibility
      restrict: 'E',
      require: '^boTabs',
      transclude: true,
      templateUrl: 'templates/bo-tab.html',
      scope: true,
      link: link
    };
  }

}());

/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boTabs', boTabs);

  boTabs.$inject = ['$timeout'];

  function boTabs($timeout) {

    boTabsController.$inject = ['$scope'];
    function boTabsController($scope) {
      /*jshint validthis: true */
      var boTabs = this,
          element,
          tabs,
          ngModel;

      boTabs.setTabsElement = function (tabsElement) {
        element = tabsElement;
        element.on('change.zf.tabs', handleTabChanged);

        $scope.$on('$destroy', function () {
          element.off('change.zf.tabs');
        });

        // can't foundationify it until angular compiles and links
        $timeout(function () {
          tabs = new Foundation.Tabs(element);

          // set default active tab
          if (!getActiveTab()) {
            if (ngModel.$modelValue) {
              tabs.selectTab(ngModel.$modelValue);
            } else {
              tabs.selectTab(element.find('bo-tab-content:first .tabs-panel'));
            }
          }
        });
      };

      boTabs.setNgModel = function (model) {
        ngModel = model;

        // can't handle changes until tabs are foundationified
        $timeout(function () {
          $scope.$watch(function () {
            return ngModel.$modelValue;
          }, handleNgModelChange);
        });
      };

      function handleTabChanged() {
        var activeTab = getActiveTab();
        if (ngModel && ngModel.$modelValue !== activeTab) {
          ngModel.$setViewValue(activeTab);
          ngModel.$commitViewValue();
        }
      }

      function handleNgModelChange(modelValue) {
        if (angular.isDefined(modelValue) && modelValue !== getActiveTab()) {
          tabs.selectTab(modelValue);
        }
      }

      function getActiveTab() {
        return element.find('bo-tab-content .is-active').attr('id');
      }
    }

    function compile(tElement) {
      var isVertical = tElement.hasClass('vertical');

      // can't use normal transclusion,
      // child bo-tab and bo-tab-content elements won't be able to find ancestor boTabs controller
      var tabsElement = angular.element('<ul class="tabs" role="tablist"></ul>');
      tabsElement.append(tElement.find('bo-tab'));
      tElement.append(tabsElement);

      var tabsContentElement = angular.element(
        '<div class="tabs-content" data-tabs-content></div>'
      );
      tabsContentElement.append(tElement.find('bo-tab-content'));
      tElement.append(tabsContentElement);

      if (isVertical) {
        tElement.addClass('row collapse');

        tabsElement.addClass('vertical');
        tabsContentElement.addClass('vertical');

        tabsElement.wrap('<div class="' + tElement.attr('tab-class') + ' columns"></div>');
        tabsContentElement.wrap('<div class="' + tElement.attr('content-class') +
                                ' columns"></div>');
      }


      return postLink;
    }

    function postLink(scope, element, attrs, controllers) {
      var boTabs = controllers[0];
      boTabs.setTabsElement(element);
      if (controllers[1]) {
        boTabs.setNgModel(controllers[1]);
      }
    }

    return {
      restrict: 'E',
      scope: true,
      require: ['boTabs', '?ngModel'],
      controller: boTabsController,
      // don't use a controllerAs name that is likely to conflict with fake-transcluded content
      // (like vm)
      controllerAs: 'boTabsCtrl',
      compile: compile
    };
  }
}());
