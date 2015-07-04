/* global angular */
(function(){
  'use strict';
  angular.module('tiy-upvote')
    .controller('QuestionsController', function($http){
      var self = this;
      this.inquiries = [];

      // $http.get('/api/gatorpazz-tiy-upvote/questions/dummyData.json')
      //   .then(function(response) {
      //     console.log(response.data);
      //     self.inquiries = response.data;
      //});
      // End of Dummy Data

      $http.get('https://gatorpazz-tiy-upvote.firebaseio.com/questions/.json')
        .then(function(response) {
          console.log(response.data);
          self.inquiries = response.data;
        });
    }); // End of QuestionsController

  $('.stuff')
    .on('click', '.click-here', function(){
      console.log("hello");
      $('html, body').animate({ scrollTop: 0 }, 500);
    });

})();
