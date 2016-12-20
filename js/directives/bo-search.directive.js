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
