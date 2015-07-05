/* global angular */
(function() {
  'use strict';
  angular.module('tiy-upvote')
    .controller('SubmitController', function($scope, Question) {
      $scope.questions = Question.all;

      $scope.question = {
        url: 'http://',
        'title': '',
        'body': ''
      };

      $scope.submitQuestion = function() {
        Question.create($scope.question).then(function() {
          $scope.question = {
            url: 'http://',
            'title': '',
            'body': ''
          };
        });
      };

      $scope.deleteQuestion = function(question) {
        Question.delete(question);
      };

    })
})();
