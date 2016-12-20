/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

describe('tabs.directive', function () {
  'use strict';

  var $compile,
      $rootScope,
      $timeout;

  beforeEach(module('blueOakUi'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
  }));

  /* global afterEach */
  afterEach(function () {
    // Foundation tabs implementation currently requires that the element is in the DOM
    // remove any tabs that a test may have added
    $('body').find('bo-tabs').remove();
  });

  function createTabs(scope) {
    scope.vm = scope.vm || {};
    var tabs = $compile([
      '<bo-tabs ng-model="vm.activeTabId">',
        '<bo-tab content="tab-0">Tab 0</bo-tab>',
        '<bo-tab content="tab-1">Tab 1</bo-tab>',
        '<bo-tab content="tab-2">Tab 2</bo-tab>',
        '<bo-tab-content id="tab-0">Tab 0 Content</bo-tab-content>',
        '<bo-tab-content id="tab-1">Tab 1 Content</bo-tab-content>',
        '<bo-tab-content id="tab-2">Tab 2 Content</bo-tab-content>',
      '</bo-tabs>'
    ].join(''))(scope);

    // have to append to body for Foundation to work properly
    $('body').append(tabs);

    $timeout.flush(); // can't Foundationify the tabs until linked

    return tabs;
  }

  function ensureActiveIndex(tabs, index) {
    var tabTitles = tabs.find('.tabs-title'),
    tabContents = tabs.find('.tabs-panel');

    angular.forEach(tabTitles, function (tabTitle, i) {
      if (i === index) {
        expect(tabTitles[i].classList).toContain('is-active');
        expect(tabContents[i].classList).toContain('is-active');
      } else {
        expect(tabTitles[i].classList).not.toContain('is-active');
        expect(tabContents[i].classList).not.toContain('is-active');
      }
    });
  }

  it('should set the first tab to be active by default', function () {
    var scope = $rootScope.$new();
    var tabs = createTabs(scope);

    expect(scope.vm.activeTabId).toBe('tab-0');

    ensureActiveIndex(tabs, 0);
  });

  it('should set the tab to the initial ngModel value', function () {
    var scope = $rootScope.$new();
    scope.vm = {
      activeTabId: 'tab-2'
    };
    var tabs = createTabs(scope);

    ensureActiveIndex(tabs, 2);
  });

  it('should set the active tab to the tab clicked', function () {
    var scope = $rootScope.$new();
    var tabs = createTabs(scope);

    tabs.find('.tabs-title:eq(2) [role="tab"]').click();
    $rootScope.$digest();

    expect(scope.vm.activeTabId).toBe('tab-2');

    ensureActiveIndex(tabs, 2);
  });

  it('should set the active tab when the ngModel changes', function () {
    var scope = $rootScope.$new();
    var tabs = createTabs(scope);

    scope.vm.activeTabId = 'tab-1';
    $rootScope.$digest();

    ensureActiveIndex(tabs, 1);
  });
});
