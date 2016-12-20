/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boTab', boTab);

  boTab.$inject = [];

  function boTab () {

    function link(scope, element, attrs) {
      element.find('a').attr('href', '#' + attrs.content);
    }

    return {
      replace: true, // necessary for accessibility
      restrict: 'E',
      require: '^boTabs',
      transclude: true,
      templateUrl: 'templates/bo-tab.html',
      scope: true,
      link: link
    };
  }

}());
