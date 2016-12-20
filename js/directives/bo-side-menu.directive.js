/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .directive('boSideMenu', BoSideMenuDirective);

    BoSideMenuDirective.$inject = [];

    /**
     * @ngdoc directive
     * @name BoSideMenuDirective
     * @description
     * #
     */
    function BoSideMenuDirective() {
        return {
            template: '<div class="off-canvas" data-off-canvas ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            link: function postLink(scope, element, attrs) {
                var offCanvas = element.find('.off-canvas');
                var id = attrs.id || 'off-canvas-' + parseInt(Math.random() * 6, 10);

                element.attr('id', null);
                offCanvas.attr('id', id);

                if (attrs.position === 'right') {
                    offCanvas.addClass('position-right');
                    offCanvas.attr('data-position', 'right');
                } else {
                    offCanvas.addClass('position-left');
                }
            }
        };
    }
})();
