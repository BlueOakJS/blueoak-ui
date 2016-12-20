/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

describe('slider.directive', function () {
  'use strict';

  var $compile,
      $rootScope;

  var element;

  beforeEach(module('blueOakUi'));
  beforeEach(module('templates/bo-slider.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    element = $compile('<bo-slider content="$root.sliderData"></bo-slider>')($rootScope);
  }));

  it('Should insert a template and add expected DOM content');

  it('Should create input field when fed the appropriate model');
});

