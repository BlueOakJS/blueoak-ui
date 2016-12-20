/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular.module('blueOakUi')
        .factory('EnvironmentService', EnvironmentService);

    EnvironmentService.$inject = ['$window'];

    function EnvironmentService($window) {

        return {
            /* User is executing this on a mobile device (currently iOS or Android) */
            isMobile: isMobile
        };

        function isAndroid() {
            return /Android/i.test($window.navigator.userAgent);
        }

        function isIos() {
            return /iPhone|iPad|iPod/i.test($window.navigator.userAgent);
        }

        function isMobile() {
            return ( isAndroid() || isIos() );
        }
    }
})();
