/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

describe('progressMeter.directive', function () {
  'use strict';

  var $compile,
      $rootScope,
      element;

  beforeEach(module('blueOakUi'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Should apply the provided aria attributes', function () {
    var scope = $rootScope.$new();
    scope.aria = {
      value: 50,
      min: 0,
      max: 100,
      text: '50%'
    };
    element = $compile('<bo-progress-meter aria="aria"></bo-progress-meter>')(scope);
    $rootScope.$digest();

    var progressBar = element.find('[role="progressbar"]');
    expect(progressBar.attr('aria-valuenow')).toBe(String(scope.aria.value));
    expect(progressBar.attr('aria-valuemin')).toBe(String(scope.aria.min));
    expect(progressBar.attr('aria-valuemax')).toBe(String(scope.aria.max));
    expect(progressBar.attr('aria-valuetext')).toBe(String(scope.aria.text));
  });

  it('Should bind the width of the bar to the specified variable', function () {
    var scope = $rootScope.$new();
    scope.level = 0.5;
    element = $compile('<bo-progress-meter value="level"></bo-progress-meter>')(scope);
    $rootScope.$digest();

    var progressMeter = element.find('.progress-meter');
    expect(progressMeter.css('width')).toBe('50%');

    scope.level = 0.9;
    $rootScope.$digest();
    expect(progressMeter.css('width')).toBe('90%');

    scope.level = 2;
    $rootScope.$digest();
    expect(progressMeter.css('width')).toBe('200%');
  });
});
