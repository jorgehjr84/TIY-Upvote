(function(window){

  var app = angular.module('tiy-upvote', [ 'ngRoute', 'restangular' ]);

  app.config(function($routeProvider){
    $routeProvider.when('/questions', {
      templateUrl: 'views/questions.html',
      controller: 'QuestionsController',
      controllerAs: 'question'
    });

    $routeProvider.when('/user', {
      templateUrl: 'views/user.html',
      // controller: 'UsersController',
      // controllerAs: 'user'
    });

    $routeProvider.when('/questions/ask', {
      templateUrl: 'views/submit.html',
      // controller: 'SubmitController',
      // controllerAs: 'submission'
    });

    $routeProvider.when('/questions/:question', {
      templateUrl: 'views/selected.html',
      // controller: 'ViewQuestionController',
      // controllerAs: 'selectedQuestion'
    });

    $routeProvider.when('/404', {
      templateUrl: 'views/404.html'
    });

    $routeProvider.when('/', {
      redirectTo: '/questions'
    });

    $routeProvider.otherwise('/404');
  });

  app.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('https://gatorpazz-tiy-upvote.firebaseio.com');
  });

  app.controller('QuestionsController', function(Restangular){
    var self = this;
    // Restangular
    //   .one('user').put('{ "username": "gatorpazz" }');
  });







})(window);
