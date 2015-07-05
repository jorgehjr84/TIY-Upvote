/* global angular */
(function() {
  'use strict';
  angular.module('tiy-upvote')
    .controller('SubmitController', function($scope) {
      $scope.questions = [];
      $scope.question = {
        url: 'http://',
        title: ''
      };

      $scope.submitPost = function() {
        $scope.questions.push($scope.question);
        $scope.question = {
          url: 'http://',
          title: ''
        };
      };
    });
})();
