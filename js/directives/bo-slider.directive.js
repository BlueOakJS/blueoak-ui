/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

/*
 * NOTE: There are currently some known issues with the WAI-ARIA
 * slider implementation on touchscreen devices.
 * See: https://github.com/w3c/aria/issues/60#issuecomment-105238341
*/
(function () {
  'use strict';

  angular.module('blueOakUi').directive('boSlider', boSlider);

  boSlider.$inject = [];

  function boSlider() {

    function link(scope, element, attr, ngModel) {
      var slider;
      var sliderElem;

      function init () {
        sliderElem = element.find('.slider');
        sliderElem.foundation();

        // set ngModel to start value
        ngModel.$render(scope.config.initialStart);

        // initialize slider
        slider = new Foundation.Slider(sliderElem, scope.config);

        // listen for movement and update ngModel value
        sliderElem.on('moved.zf.slider', function(e, handle){
          ngModel.$render(handle.attr('aria-valuenow'));
        });

        sliderElem.on('$destroy', function(e, handle){
          sliderElem.off('moved.zf.slider');
          slider.destroy();
        });

      }

      ngModel.$render = function(value) {
        ngModel.$setViewValue(value);
      };

      init();
    }
    return {
      link: link,
      require: 'ngModel',
      scope: {
        config: '=',
        name: '='
      },
      restrict: 'E',
      templateUrl: 'templates/bo-slider.html'
    };
  }
}());
