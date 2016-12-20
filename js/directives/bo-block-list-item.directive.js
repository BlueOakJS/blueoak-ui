/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

/*
 * Note: This directive is only designed to be a child of boBlocklist.
 *       Use of this directive outside of the context of a boBlocklist
 *       element is not recommended.
 */
(function () {
  'use strict';

  angular.module('blueOakUi').directive('boBlocklistItem', boBlocklistItem);

  boBlocklistItem.$inject = [];
  function boBlocklistItem() {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'templates/bo-blocklist-item.html',
      scope: {
        linked: '=?'
      },
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
