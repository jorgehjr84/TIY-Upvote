/* global angular */
(function(){
  'use strict';
  angular.module('tiy-upvote')
    .controller('QuestionsController', function($http){
      var self = this;
      this.inquiries = [];
      this.numberOf = 0;

      // $http.get('/api/gatorpazz-tiy-upvote/questions/dummyData.json')
      //   .then(function(response) {
      //     console.log(response.data);
      //     self.inquiries = response.data;
      //});
      // End of Dummy Data

      $http.get('https://gatorpazz-tiy-upvote.firebaseio.com/questions/.json')
        .then(function(response) {
          self.inquiries = response.data;
          _.forEach(self.inquiries, function(inquiry){
            inquiry.answerNumber = _.size(inquiry.answers);
          });
          console.log(self.inquiries);
        });

      $http.get('https://gatorpazz-tiy-upvote.firebaseio.com/questions/.json')
        .then(function(response) {
          self.numberOf = _.size(response.data);
          console.log(self.numberOf);
        });
    }); // End of QuestionsController
})();
