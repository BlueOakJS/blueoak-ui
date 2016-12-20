/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boCheckbox', boCheckbox);

  boCheckbox.$inject = ['$timeout'];
  function boCheckbox($timeout) {
    var DEFAULT_SELECTED_ICON_CLASS = 'bo-icon-checkbox-selected';
    var DEFAULT_UNSELECTED_ICON_CLASS = 'bo-icon-checkbox';

    function link(scope, element, attrs, ngModel) {
      var icon = element.find('i');
      var selectedClass = angular.isDefined(attrs.iconSelected) ? attrs.iconSelected :
        DEFAULT_SELECTED_ICON_CLASS;
      var unselectedClass = angular.isDefined(attrs.iconUnselected) ? attrs.iconUnselected :
        DEFAULT_UNSELECTED_ICON_CLASS;

      var input = element.find('input')[0];

      scope.$watch(function () {
        return ngModel.$modelValue;
      }, setCheckedIcon);

      // init
      $timeout(setCheckedIcon);

      function setCheckedIcon() {
        // use the input's value, not ngModel, in case ngTrueValue or ngFalseValue is being used
        if (input.checked) {
          icon.removeClass(unselectedClass);
          icon.addClass(selectedClass);
        } else {
          icon.removeClass(selectedClass);
          icon.addClass(unselectedClass);
        }
      }
    }

    return {
      restrict: 'E',
      require: 'ngModel',
      transclude: true,
      templateUrl: 'templates/bo-checkbox.html',
      compile: function(element, attr) {
        var input = element.find('input[type="checkbox"]');
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

        return link;
      }
    };
  }
}());
