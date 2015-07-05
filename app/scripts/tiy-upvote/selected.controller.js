/* global angular */
(function() {
  'use strict';

  angular.module('tiy-upvote')
    .controller('SelectedController', function($scope, $routeParams, Question) {
      console.log($routeParams);
      $scope.question = Question.get($routeParams.questionId);
    });


})();
