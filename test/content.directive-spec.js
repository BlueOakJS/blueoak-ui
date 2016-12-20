/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

describe('content.directive', function () {
  'use strict';

  var $compile,
      $rootScope;

  beforeEach(module('blueOakUi'));
  beforeEach(module('templates/bo-content.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should transclude bo-content content to external template', function () {
    var element = $compile('<bo-content><p id="transcluded">test</p></bo-content>')($rootScope);
    $rootScope.$digest();

    var transcludedContent = element.find('#transcluded').html();
    expect(transcludedContent).toBe('test');
  });
});

