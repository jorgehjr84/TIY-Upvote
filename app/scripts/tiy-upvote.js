/* global angular */
(function(){
'use strict';

  angular.module('tiy-upvote', [ 'ngRoute', 'restangular' ])
    .config(function($routeProvider){
      $routeProvider.when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionsController',
        controllerAs: 'question'
      });

      $routeProvider.when('/users/:user', {
        templateUrl: 'views/user.html'
        // controller: 'UsersController',
        // controllerAs: 'user'
      });

      $routeProvider.when('/questions/ask', {
        templateUrl: 'views/submit.html'
        // controller: 'SubmitController',
        // controllerAs: 'submission'
      });

      $routeProvider.when('/questions/:question', {
        templateUrl: 'views/selected.html'
        // controller: 'SelectedController',
        // controllerAs: 'selected'
      });

      $routeProvider.when('/404', {
        templateUrl: 'views/404.html'
      });

      $routeProvider.when('/', {
        redirectTo: '/questions'
      });

      $routeProvider.otherwise('/404');
    })

    .config(function(RestangularProvider){
      RestangularProvider.setBaseUrl('https://gatorpazz-tiy-upvote.firebaseio.com');
    })

    .controller('MainController', function(){

    });

})();
