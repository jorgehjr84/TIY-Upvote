(function(){

  angular.module('tiy-upvote')
    .controller('QuestionsController', function(){
      // var self = this;
      var questions = [
          { "synopsis": "Questions about using the command line",
            "body": "I'm struggling to learn how to use the command line. Can someone explain how I make a new directory?",
            "created_by": "pcreglow",
            "timestamp": "Jul 02 15",
            "question_id": "12398732",
            "answers": [
              {"answer_id": "12389774",
               "body": "mkdir motherfucker",
               "created_by": "sjoyal",
               "timestamp": "Jul 02 15"},
              {"answer_id": "58675869",
               "body": "what sjoyal said +1",
               "created_by": "jorgehjr84",
               "timestamp": "Jul 02 15"}
             ]
           },
          {"synopsis": "Benefits of using git flow for development",
            "body": "My team is trying to adopt git best practices, what are the pros and cons?",
            "created_by": "gatorpazz",
            "timestamp": "Jul 01 15",
            "question_id": "12988732",
            "answers": [
              {"answer_id": "10989774",
               "body": "git flow sucks, it's not vim and I hate it",
               "created_by": "al-the-x",
               "timestamp": "Jul 01 15"},
              {"answer_id": "58684369",
               "body": "al-the-x is trolling like usual",
               "created_by": "jessyriordan",
               "timestamp": "Jul 01 15"}
             ]}
         ];

      this.inquiry = questions;
      // Restangular
      //   .one('user').put('{ "username": "gatorpazz" }');
    });
})();
