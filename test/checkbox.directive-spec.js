/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

describe('checkbox.directive', function () {
  'use strict';

  var $compile,
      $rootScope,
      element,
      DEFAULT_SELECTED_ICON = 'bo-icon-checkbox-selected',
      DEFAULT_UNSELECTED_ICON = 'bo-icon-checkbox';

  beforeEach(module('blueOakUi'));
  beforeEach(module('templates/bo-checkbox.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  function checkIcon(isSelected, expectedIcon) {
    var scope = $rootScope.$new();
    scope.isSelected = isSelected;
    element = $compile('<bo-checkbox ng-model="isSelected"></bo-checkbox>')(scope);
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe(expectedIcon);
  }

  it('Should use the default selected icon if none is provided and model is true', function () {
    checkIcon(true, DEFAULT_SELECTED_ICON);
  });

  it('Should use the default unselected icon if none is provided and model is false', function () {
    checkIcon(false, DEFAULT_UNSELECTED_ICON);
  });

  it('Should use a custom selected icon if provided and model is true', function () {
    var scope = $rootScope.$new();
    scope.selected = true;
    element = $compile('<bo-checkbox ng-model="selected" icon-selected="custom-selected-icon" ' +
                       'icon-unselected="custom-unselected-icon"></bo-checkbox>')(scope);
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe('custom-selected-icon');
  });

  it('Should use a custom unselected icon if provided and model is false', function () {
    var scope = $rootScope.$new();
    scope.selected = false;
    element = $compile('<bo-checkbox ng-model="selected" icon-selected="custom-selected-icon" ' +
                       'icon-unselected="custom-unselected-icon"></bo-checkbox>')(scope);
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe('custom-unselected-icon');
  });

  it('Should move supported input attributes to the internal checkbox input', function () {
    var attributes = {
      'ng-model': 'myNgModel',
      'name': 'myName',
      'ng-true-value': '\'myTrueValue\'',
      'ng-false-value': '\'myFalseValue\'',
      'ng-change': 'myNgChange'
    };

    var attributesStr = Object.keys(attributes).map(function (key) {
      return key + '="' + attributes[key] + '"';
    }).join(' ');

    element = $compile('<bo-checkbox ' + attributesStr + '></bo-checkbox>')($rootScope.$new());
    $rootScope.$digest();

    var input = element.find('input[type="checkbox"]:first');
    Object.keys(attributes).forEach(function (key) {
      expect(input.attr(key)).toBe(attributes[key]);
    });
  });

  it('Should update the icon when the model changes', function () {
    var scope = $rootScope.$new();
    scope.isSelected = true;
    element = $compile('<bo-checkbox ng-model="isSelected"></bo-checkbox>')(scope);
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe(DEFAULT_SELECTED_ICON);

    scope.isSelected = false;
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe(DEFAULT_UNSELECTED_ICON);

    scope.isSelected = true;
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe(DEFAULT_SELECTED_ICON);
  });

  it('Should update the icon when the checkbox is clicked', function () {
    var scope = $rootScope.$new();
    scope.isSelected = true;
    element = $compile('<bo-checkbox ng-model="isSelected"></bo-checkbox>')(scope);
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe(DEFAULT_SELECTED_ICON);

    element.find(':first-child').click();
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe(DEFAULT_UNSELECTED_ICON);

    element.find(':first-child').click();
    $rootScope.$digest();
    expect(element.find('i').attr('class')).toBe(DEFAULT_SELECTED_ICON);
  });

});
