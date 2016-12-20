/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

describe('search.directive', function () {
  'use strict';

  var $compile,
      $rootScope;

  var element;

  beforeEach(module('blueOakUi'));
  beforeEach(module('templates/bo-search.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Should use the default search icon if none is provided', function () {
    element = $compile('<bo-search></bo-search>')($rootScope.$new());
    $rootScope.$digest();
    expect(element.find('i:first').attr('class')).toContain('bo-icon-magnifying-glass');
  });

  it('Should use the provided search icon class if provided', function () {
    var iconClass = 'my-custom-icon';

    element = $compile('<bo-search icon="' + iconClass + '"></bo-search>')($rootScope.$new());
    $rootScope.$digest();
    expect(element.find('i:first').attr('class')).toContain(iconClass);
  });

  it('Should remove the icon if an empty icon class is provided', function () {
    element = $compile('<bo-search icon=""></bo-search>')($rootScope.$new());
    $rootScope.$digest();
    expect(element.find('i').length).toBe(0);
  });


  it('Should move supported input attributes to the internal search input', function () {
    var attributes = {
      'ng-model': 'myNgModel',
      'name': 'myName',
      'ng-required': 'myNgRequired',
      'ng-minlength': '0',
      'ng-maxlength': '10',
      'pattern': '/myPattern/',
      'ng-pattern': '/myNgPattern/',
      'ng-change': 'myNgChange',
      'ng-trim': 'myNgTrim',
      'placeholder': 'myPlaceholder'
    };

    var attributesStr = Object.keys(attributes).map(function (key) {
      return key + '="' + attributes[key] + '"';
    }).join(' ');

    element = $compile('<bo-search ' + attributesStr + '></bo-search>')($rootScope.$new());
    $rootScope.$digest();

    var input = element.find('input[type="search"]:first');
    Object.keys(attributes).forEach(function (key) {
      expect(input.attr(key)).toBe(attributes[key]);
    });
  });

  // Note: although 'required' is implemented in the same way as the attributes above,
  // it needs to be tested differently
  it('Should mark the search input as required if the bo-search is required', function () {
    element = $compile('<bo-search required></bo-search>')($rootScope.$new());
    $rootScope.$digest();
    expect(element.find('input[type="search"]:first').prop('required')).toBe(true);
  });
});
