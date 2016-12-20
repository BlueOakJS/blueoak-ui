/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

(function () {
  'use strict';

  angular.module('blueOakUi', [
    'blueOakUiTemplates',
    'snap',
    'ngSanitize'
 ]);

  angular.module('blueOakUi').run(function () {
    $(document).foundation();
  });

}());
