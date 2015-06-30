var app = angular.module('tiy-upvote', ['ngRoute', 'restangular']);

var test = {
  name: 'Jessy',
  name2: 'Jorge'
};

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://gatorpazz-tiy-upvote.firebaseio.com/');
});


app.controller('MainController', function($route, Restangular) {
  Restangular.one('name.json').put('test');
});