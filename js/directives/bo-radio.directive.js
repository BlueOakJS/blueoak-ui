/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boRadio', boRadio);

  boRadio.$inject = ['$timeout', '$compile'];

  function boRadio($timeout, $compile) {
    var DEFAULT_SELECTED_ICON_CLASS = 'bo-icon-radio-selected';
    var DEFAULT_UNSELECTED_ICON_CLASS = 'bo-icon-radio';

    function compile(tElement, tAttrs) {
      // these attributes are available at compile-time, move to internal input
      var input = tElement.find('input[type="radio"]');
      angular.forEach({
        'value': tAttrs.value,
        'ng-value': tAttrs.ngValue
      }, function(value, name) {
        if (angular.isDefined(value)) {
          input.attr(name, value);
          tElement.removeAttr(name);
        }
      });

      return link;
    }

    function link(scope, element, attrs, ngModel) {
      var icon = element.find('i');
      var input = element.find('input'),
          fakeRadio = element.find('[role="radio"]'),
          group = element.closest('bo-radio-group'),
          selectedClass,
          unselectedClass,
          setSelectedElement;

      // these parent attributes will not be available until now in the case of
      // an ng-repeat, so need to manually re-compile
      // in the future, may want to move these to a parent's controller
      angular.forEach({
        'ng-model': group.attr('ng-model'),
        'name': group.attr('name'),
        'ng-change': group.attr('ng-change'),
      }, function(value, name) {
        if (angular.isDefined(value)) {
          input.attr(name, value);
        }
      });

      $compile(input)(scope);

      selectedClass = group.attr('icon-selected') ? group.attr('icon-selected') :
                                                    DEFAULT_SELECTED_ICON_CLASS;

      unselectedClass = group.attr('icon-unselected') ? group.attr('icon-unselected') :
                                                    DEFAULT_UNSELECTED_ICON_CLASS;

      setSelectedElement = angular.isDefined(attrs.ngValue) ? updateUsingNgValue :
                                                                  updateUsingValue;

      scope.$watch(function () {
        return ngModel.$modelValue;
      }, setSelectedElement);

      // init
      $timeout(setSelectedElement);

      function updateUsingNgValue() {
        if (scope.$eval(attrs.ngValue) === ngModel.$modelValue) {
          updateSelection(selectedClass, unselectedClass, 'true');
        } else {
          updateSelection(unselectedClass, selectedClass, 'false');
        }
      }

      function updateUsingValue() {
        if (attrs.value === ngModel.$modelValue) {
          updateSelection(selectedClass, unselectedClass, 'true');
        } else {
          updateSelection(unselectedClass, selectedClass, 'false');
        }
      }

      function updateSelection(addClass, removeClass, ariaChecked) {
        icon.addClass(addClass);
        icon.removeClass(removeClass);
        fakeRadio.attr('aria-checked', ariaChecked);
      }
    }

    return {
      require: '^ngModel',
      transclude: true,
      restrict: 'E',
      templateUrl: 'templates/bo-radio.html',
      compile: compile
    };
  }
}());

