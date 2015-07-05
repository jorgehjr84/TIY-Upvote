/* global angular */
(function() {
  'use strict';
  angular.module('tiy-upvote')
    .controller('SubmitController', function($scope, $location, Question, $http) {
      $scope.questions = Question.all;
      var self = this;
      this.numberOf = 0;
      $scope.question = {
        'title': '',
        'body': '',
        'answers': ''
      };

      $scope.submitQuestion = function() {
        Question.create($scope.question).then(function(ref) {
          $location.path('/questions/' + ref.name());
        });
      };

      $scope.deleteQuestion = function(question) {
        Question.delete(question);
      };

      $http.get('https://gatorpazz-tiy-upvote.firebaseio.com/questions/.json')
        .then(function(response) {
          self.numberOf = _.size(response.data);
        });

    })
})();
