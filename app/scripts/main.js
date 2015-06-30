(function(window){

  var app = angular.module('tiy-upvote', [ 'ngRoute', 'restangular' ]);

  app.config(function($routeProvider){
    $routeProvider.when('/questions', {
      templateUrl: 'views/questions.html',
      controller: 'QuestionsController',
      controllerAs: 'question'
    });

    $routeProvider.when('/404', {
      templateUrl: 'views/404.html'
    });

    $routeProvider.otherwise('/questions');
  });

  app.controller('QuestionsController', function($routeParams, Restangular){
    var self = this;

    Restangular.setBaseUrl('https://gatorpazz-tiy-upvote.firebaseio.com')
      .one('user', 'username').put('gatorpazz');
  });







})(window);
