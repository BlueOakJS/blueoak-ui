/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .directive('boMainContent', BoMainContent);

    BoMainContent.$inject = [];

    /**
     * @ngdoc directive
     * @name BoMainContent
     * @description
     * #
     */
    function BoMainContent() {
        return {
            templateUrl: 'templates/bo-main-content.html',
            restrict: 'E',
            transclude: true
        };
    }
})();
