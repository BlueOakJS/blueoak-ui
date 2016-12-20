/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

/*
 * Note: This directive is only designed to be a child of boMenu.
 *       Use of this directive outside of the context of a boMenu
 *       element is not recommended.
 */
(function () {
  'use strict';

  angular.module('blueOakUi').directive('boMenuItem', boMenuItem);

  boMenuItem.$inject = [];
  function boMenuItem() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<li class="bo-menu-item" ng-transclude></li>',
      compile: function(element, attr) {
        var li = element.find('li');
        angular.forEach({
          'ng-click': attr.ngClick
        }, function(value, name) {
          if (angular.isDefined(value)) {
            li.attr(name, value);
          }
        });
      }
    };
  }
}());
