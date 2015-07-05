/* global angular */
(function() {
  'use strict';

  angular.module('tiy-upvote')
    .controller('SelectedController', function($scope, $routeParams, Question) {
      $scope.question = Question.get($routeParams.questionId);
    });


})();
