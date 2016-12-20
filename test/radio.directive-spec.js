/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

describe('radio.directive', function () {
  'use strict';

  var $compile,
      $rootScope,
      element,
      DEFAULT_SELECTED_ICON = 'bo-icon-radio-selected',
      DEFAULT_UNSELECTED_ICON = 'bo-icon-radio';

  beforeEach(module('blueOakUi'));
  beforeEach(module('templates/bo-radio-group.html'));
  beforeEach(module('templates/bo-radio.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  function checkIcons(expectedIcons) {
    angular.forEach(expectedIcons, function (icon, i) {
      expect(element.find('bo-radio:eq(' + i + ') i').attr('class')).toBe(icon);
    });
  }

  it('Should move supported radio group attributes to the internal inputs', function () {
    var scope = $rootScope.$new();
    element = $compile([
      '<bo-radio-group ng-model="myNgModel" name="myName" ng-change="myNgChange">',
      '  <bo-radio>Option A</bo-radio>',
      '  <bo-radio>Option B</bo-radio>',
      '  <bo-radio>Option C</bo-radio>',
      '</bo-radio-group>'
    ].join(' '))(scope);
    $rootScope.$digest();

    element.find('bo-radio').each(function () {
      var input = angular.element(this).find('input');
      expect(input.attr('ng-model')).toBe('myNgModel');
      expect(input.attr('name')).toBe('myName');
      expect(input.attr('ng-change')).toBe('myNgChange');
    });

    // ensures that the test doesn't pass if no bo-radio elements are found
    expect(element.find('bo-radio').length).toBe(3);
  });

  it('Should use the default icons if none are provided', function () {
    var scope = $rootScope.$new();
    scope.selectedValue = 'b';
    element = $compile([
      '<bo-radio-group ng-model="selectedValue" name="example">',
      '  <bo-radio value="a">Option A</bo-radio>',
      '  <bo-radio value="b">Option B</bo-radio>',
      '  <bo-radio value="c">Option C</bo-radio>',
      '</bo-radio-group>'
    ].join(' '))(scope);
    $rootScope.$digest();

    checkIcons([DEFAULT_UNSELECTED_ICON, DEFAULT_SELECTED_ICON, DEFAULT_UNSELECTED_ICON]);
  });

  it('Should use the custom icons if provided', function () {
    var scope = $rootScope.$new(),
        customSelected = 'custom-selected-icon',
        customUnselected = 'custom-unselected-icon';

    scope.selectedValue = 'b';
    element = $compile([
      '<bo-radio-group ng-model="selectedValue" name="example"',
      '     icon-selected="' + customSelected + '"',
      '     icon-unselected="' + customUnselected + '">',
      '  <bo-radio value="a">Option A</bo-radio>',
      '  <bo-radio value="b">Option B</bo-radio>',
      '  <bo-radio value="c">Option C</bo-radio>',
      '</bo-radio-group>'
    ].join(' '))(scope);
    $rootScope.$digest();

    checkIcons([customUnselected, customSelected, customUnselected]);
  });

  describe('Using the value attribute', function () {

    it('Should move supported input attributes to the internal inputs', function () {
      var scope = $rootScope.$new(),
          radioValues = ['a', 'b', 'c'];

      element = $compile([
        '<bo-radio-group ng-model="selectedValue">',
        '  <bo-radio value="a">Option A</bo-radio>',
        '  <bo-radio value="b">Option B</bo-radio>',
        '  <bo-radio value="c">Option C</bo-radio>',
        '</bo-radio-group>'
      ].join(' '))(scope);
      $rootScope.$digest();

      element.find('bo-radio').each(function (i) {
        var input = angular.element(this).find('input');
        expect(input.attr('value')).toBe(radioValues[i]);
      });

      // ensures that the test doesn't pass if no bo-radio elements are found
      expect(element.find('bo-radio').length).toBe(3);
    });

    it('Should update the icon when the model changes', function () {
      var scope = $rootScope.$new();
      scope.selectedValue = 'b';

      element = $compile([
        '<bo-radio-group ng-model="selectedValue" name="example">',
        '  <bo-radio value="a">Option A</bo-radio>',
        '  <bo-radio value="b">Option B</bo-radio>',
        '  <bo-radio value="c">Option C</bo-radio>',
        '</bo-radio-group>'
      ].join(' '))(scope);
      $rootScope.$digest();
      checkIcons([DEFAULT_UNSELECTED_ICON, DEFAULT_SELECTED_ICON, DEFAULT_UNSELECTED_ICON]);

      scope.selectedValue = 'a';
      $rootScope.$digest();
      checkIcons([DEFAULT_SELECTED_ICON, DEFAULT_UNSELECTED_ICON, DEFAULT_UNSELECTED_ICON]);

      scope.selectedValue = 'c';
      $rootScope.$digest();
      checkIcons([DEFAULT_UNSELECTED_ICON, DEFAULT_UNSELECTED_ICON, DEFAULT_SELECTED_ICON]);
    });
  });

  describe('Using the ngValue attribute', function () {

    it('Should move supported input attributes to the internal inputs', function () {
      var scope = $rootScope.$new();
      scope.radioValues = [
        {value: 'a'},
        {value: 'b'},
        {value: 'c'}
      ];

      element = $compile([
        '<bo-radio-group ng-model="selectedValue">',
        '  <bo-radio ng-value="radioValues[0]">Option A</bo-radio>',
        '  <bo-radio ng-value="radioValues[1]">Option B</bo-radio>',
        '  <bo-radio ng-value="radioValues[2]">Option C</bo-radio>',
        '</bo-radio-group>'
      ].join(' '))(scope);
      $rootScope.$digest();

      element.find('bo-radio').each(function (i) {
        var input = angular.element(this).find('input');
        expect(input.attr('ng-value')).toBe('radioValues[' + [i] + ']');
      });

      // ensures that the test doesn't pass if no bo-radio elements are found
      expect(element.find('bo-radio').length).toBe(3);
    });

    it('Should update the icon when the model changes', function () {
      var scope = $rootScope.$new();
      scope.radioValues = [
        {value: 'a'},
        {value: 'b'},
        {value: 'c'}
      ];
      scope.selectedValue = scope.radioValues[1];

      element = $compile([
        '<bo-radio-group ng-model="selectedValue">',
        '  <bo-radio ng-value="radioValues[0]">Option A</bo-radio>',
        '  <bo-radio ng-value="radioValues[1]">Option B</bo-radio>',
        '  <bo-radio ng-value="radioValues[2]">Option C</bo-radio>',
        '</bo-radio-group>'
      ].join(' '))(scope);
      $rootScope.$digest();
      checkIcons([DEFAULT_UNSELECTED_ICON, DEFAULT_SELECTED_ICON, DEFAULT_UNSELECTED_ICON]);

      scope.selectedValue = scope.radioValues[0];
      $rootScope.$digest();
      checkIcons([DEFAULT_SELECTED_ICON, DEFAULT_UNSELECTED_ICON, DEFAULT_UNSELECTED_ICON]);

      scope.selectedValue = scope.radioValues[2];
      $rootScope.$digest();
      checkIcons([DEFAULT_UNSELECTED_ICON, DEFAULT_UNSELECTED_ICON, DEFAULT_SELECTED_ICON]);
    });
  });
});
