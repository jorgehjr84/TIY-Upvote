(function(){

  angular.module('tiy-upvote')
    .controller('QuestionsController', function($http){
      var self = this;
      var inquiries = [];

      $http.get('/api/gatorpazz-tiy-upvote/questions/dummyData.json')
        .then(function(response) {
          console.log(response.data);
          self.inquiries = response.data;
        });
})();
