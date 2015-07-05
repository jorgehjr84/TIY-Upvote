/* global angular */
(function() {
  'use strict';
  angular.module('tiy-upvote')
    .controller('SubmitController', function($scope, Question) {
      $scope.questions = [];
      $scope.question = {
        url: 'http://',
        title: ''
      };

      $scope.submitQuestion = function() {
        $scope.questions.push($scope.question);
        Question.save($scope.question, function(ref) {
          $scope.questions[ref.name] = $scope.question;
          $scope.question = {
            url: 'http://',
            title: ''
          };
        });
      };
      $scope.deleteQuestion = function(questionId) {
        Question.delete({id: questionId}, function() {
          delete $scope.questions[questionId];
        });
      };
    });
})();
