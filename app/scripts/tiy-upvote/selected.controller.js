(function(){

  angular.module('tiy-upvote')
    .controller('SelectedController', function($http){
      var self = this;
      var inquiry = [];

      $http.get('/api/gatorpazz-tiy-upvote/questions/dummyData.json')
        .then(function(response) {
          console.log(response.data);
          self.inquiry = response.data;
        });
      });


})();
