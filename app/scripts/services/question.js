/* global angular Firebase */
(function() {
    'use strict';
    angular.module('tiy-upvote')
      .factory('Question', function($firebase, FIREBASE_URL) {
          var ref = new Firebase(FIREBASE_URL);
          var questions = $firebase(ref.child('questions')).$asArray();

          var Question = {
            all: questions,
            create: function(question) {
              return questions.$add(question);
            },
            get: function(questionId) {
              return $firebase(ref.child('questions').child(questionId)).$asObject();
            },
            delete: function(question) {
              return questions.$remove(question);
            },
            createAnswer: function (question, answer) {
              return $firebase(ref.child('questions/' + question + '/answers')).$asArray().$add(answer);
            }
          };

          return Question;
        });
      })();
