/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boContent', boContent);

  boContent.$inject = ['snapRemote'];

  function boContent (snapRemote) {
    function link (scope) {
      scope.state = {};

      scope.state.snap = {
        disable: 'right'
      };

      scope.state.type = {
        angularRoute: true
      };

      snapRemote.getSnapper().then(function (snapper) {
        snapper.on('animated', function () {
          if(snapper.state().state === 'closed') {
            scope.$apply(function () {
              scope.state.open = false;
            });
          }

          if(snapper.state().state === 'left') {
            scope.$apply(function () {
              scope.state.open = true;
            });
          }
        });
      });
    }

    return {
      link: link,
      restrict: 'E',
      transclude: true,
        templateUrl: 'templates/bo-content.html'
    };
  }

}());
