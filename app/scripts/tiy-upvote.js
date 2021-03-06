/* global angular Firebase */
(function(){
  'use strict';

  angular.module('tiy-upvote', [
    'ngRoute',
    'restangular',
    'firebase'
  ])
    .config(function($routeProvider){
      $routeProvider.when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'SubmitController',
        controllerAs: 'submission'
      });

      $routeProvider.when('/users/:user', {
        templateUrl: 'views/user.html'
        // controller: 'UsersController',
        // controllerAs: 'user'
      });

      $routeProvider.when('/questions/ask', {
        templateUrl: 'views/submit.html',
        controller: 'SubmitController',
        controllerAs: 'submission'
      });

      $routeProvider.when('/questions/:questionId', {
        templateUrl: 'views/selected.html',
        controller: 'SelectedController',
        controllerAs: 'selected'
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

    .controller('MainController', function($scope){
      var firebase = new Firebase('https://gatorpazz-tiy-upvote.firebaseio.com');
      this.username = 0;
      var self = this;
      this.login = function(){
        firebase.authWithOAuthPopup('github', function(error, authData){
          console.log(arguments);
          $scope.$apply(function(){
            self.username = authData.github.username;
          }); // END $scope
        }); // END authWithOAuthPopup
      }; // END this.login
      this.setUser = function(){
        return self.username !== 0;
      }; // this.setUser
    }); // END MainController
angular.module('tiy-upvote').constant('FIREBASE_URL', 'https://gatorpazz-tiy-upvote.firebaseio.com/');
})();
