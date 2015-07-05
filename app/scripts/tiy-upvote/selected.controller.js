/* global angular */
(function() {
  'use strict';

  angular.module('tiy-upvote')
    .controller('SelectedController', function($scope, $routeParams, Question) {
      console.log($routeParams);
      $scope.question = Question.get($routeParams.questionId);
      $scope.answer = {
        'created_by': '',
        'body': ''
      };

      $scope.submitAnswer = function() {
        Question.createAnswer($routeParams.questionId, $scope.answer);
      };
    });

})();
