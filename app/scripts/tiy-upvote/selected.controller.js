(function(){

  angular.module('tiy-upvote')
    .controller('SelectedController', function(){
      this.question = {
        "synopsis": "How do I do this?",
        "body": "I really don't know how to do this, how do I do this?",
        "created_by": "sjoyal",
        "timestamp": "",
        "answers": [
          {
            "body": "LOL NEWB",
            "created_by": "trollbot1",
            "timestamp": ""
          },
          {
            "body": "YOU SUCK BRAH!!!!",
            "created_by": "trollbot2",
            "timestamp": ""
          },
          {
            "body": "What have you tried??? HAVE YOU TRIED ANYTHING?!!??! WE'RE NOT YOUR PRIVATE ARMY!!!!!!!",
            "created_by": "anon",
            "timestamp": ""
          }
        ]
      };

    });
})();
