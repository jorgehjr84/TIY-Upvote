/* global angular */
(function() {
  'use strict';
  angular.module('tiy-upvote')
    .controller('SubmitController', function($scope, $location, Question) {
      $scope.questions = Question.all;
      console.log(Question);
      $scope.count = 0;
      $scope.lengthOf = _.forEach(Question.all, function(question) {
        $scope.count++;
      });

      $scope.question = {
        url: 'http://',
        'title': '',
        'body': ''
      };

      $scope.submitQuestion = function() {
        Question.create($scope.question).then(function(ref) {
          $location.path('/questions/' + ref.name());
        });
      };

      $scope.deleteQuestion = function(question) {
        Question.delete(question);
      };

    })
})();
