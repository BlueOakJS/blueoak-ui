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
