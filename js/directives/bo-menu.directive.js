/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi').directive('boMenu', boMenu);

  boMenu.$inject = [];
  function boMenu() {

    function link(scope, element, attr, ctrl, transcludeFn) {
      // Unwrap our menu (replace with ul.bo-menu)
      // We have to replace here in order to meet
      // FFS6 Menu DOM structure requirements
      var ddMenu = angular.element(element[0].firstChild);
      element.replaceWith(ddMenu);

      // We test here to see if this node is contained within
      // another FFS6 Dropdown Menu. If it is, we do not need
      // to initialize it as a 'dropdown menu', (a regular FFS6
      // 'menu' is sufficient).
      if (!isFFS6Submenu(ddMenu)) {
        // Initialize FFS6 Dropdown Menu
        ddMenu.foundation();
        var menu = new Foundation.DropdownMenu(ddMenu, scope.config);

        // Wrap with FFS6 Top-Bar
        ddMenu.wrap('<div class="top-bar"></div>');
        // Maintenance
        ddMenu.on('$destroy', function(e, handle){
          menu.destroy();
        });
      }

      // transclude into ul.bo-menu
      element.append(transcludeFn());
    }

    function isFFS6Submenu(element) {
      var dropdowns = document.getElementsByClassName('bo-menu');
      if (dropdowns.length <= 1) { return false; }

      for (var i = 0; i < dropdowns.length; i++) {
        if ($.contains(dropdowns[i], element.context)) {
          return true;
        }
      }

      return false;
    }

    return {
      // controller: function(scope, elem, attr) {
      //   this.setActive
      // },
      compile: function(element, attrs) {
        var ddMenu = angular.element(element[0].firstChild);
        ddMenu.attr('class', 'dropdown menu bo-menu ' + attrs.class);
        return link;
      },
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/bo-menu.html',
      scope: {
        // options to pass to Foundation.DropdownMenu()
        config: '=?'
      }
    };
  }
}());
