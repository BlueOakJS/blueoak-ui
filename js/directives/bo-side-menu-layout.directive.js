/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .directive('boSideMenuLayout', BoSideMenuLayoutDirective);

    BoSideMenuLayoutDirective.$inject = [];

    /**
     * @ngdoc directive
     * @name BoSideMenuLayoutDirective
     * @description
     * #
     */
    function BoSideMenuLayoutDirective() {
        return {
            templateUrl: 'templates/bo-side-menu-layout.html',
            restrict: 'E',
            transclude: true
        };
    }
})();
