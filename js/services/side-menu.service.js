/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
    'use strict';

    angular
        .module('blueOakUi')
        .service('SideMenuService', SideMenuService);

    SideMenuService.$inject = [];

    /**
     * @ngdoc service
     * @name SideMenuService
     * @description
     * #
     */
    function SideMenuService() {

        function open(id) {
            angular.element('#' + id).foundation('open');
        }

        function close(id) {
            angular.element('#' + id).foundation('close');
        }

        function isOpen(id) {
            return angular.element('#' + id).hasClass('is-open');
        }

        this.open = open;
        this.close = close;
        this.isOpen = isOpen;
    }
})();
