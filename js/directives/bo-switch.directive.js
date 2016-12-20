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
