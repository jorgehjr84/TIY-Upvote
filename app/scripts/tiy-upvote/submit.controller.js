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

      $scope.submitQuestion = function() {
        $scope.questions.push($scope.question);
        $scope.question = {
          url: 'http://',
          title: ''
        };
      };
      $scope.deleteQuestion = function(index) {
        $scope.questions.splice(index, 1);
      };
    });
})();
