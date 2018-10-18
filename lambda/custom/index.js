"use strict";

const Alexa = require('ask-sdk');

var handlers = {
    "TaskIntent": function () {
      this.response.speak("Salut, maitre !"); 
      this.emit(':responseReady');
    }
  };
  
  exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
      alexa.registerHandlers(handlers);
      alexa.execute();
  };