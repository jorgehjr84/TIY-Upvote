/* global angular */
(function(){
  'use strict';

  angular.module('tiy-upvote')
    .controller('SelectedController', function($http){
      var self = this;
      this.inquiry = [];

      // $http.get('/api/gatorpazz-tiy-upvote/questions/dummyData.json')
      //   .then(function(response) {
      //     console.log(response.data);
      //     self.inquiry = response.data;
      //   });
      // });
      // END dummyData

      $http.get('https://gatorpazz-tiy-upvote.firebaseio.com/.json')
        .then(function(response) {
          console.log(response.data);
          self.inquiry = response.data;
        });
    }); // END SelectedController
})();
