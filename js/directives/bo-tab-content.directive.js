/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boTabContent', boTabContent);

  boTabContent.$inject = [];

  function boTabContent () {

    function link(scope, element, attrs) {
      element.find('.tabs-panel').attr('id', attrs.id);
      element.attr('id', null);
    }

    return {
      restrict: 'E',
      require: '^boTabs',
      transclude: true,
      scope: true,
      templateUrl: 'templates/bo-tab-content.html',
      link: link
    };
  }

}());
