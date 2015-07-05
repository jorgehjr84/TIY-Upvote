/* global angular */
(function() {
  'use strict';
  angular.module('tiy-upvote')
    .factory('Post', function ($resource) {
      return $resource('https://gatorpazz-tiy-upvote.firebaseio.com/questions/:id.json');
    })
})();
