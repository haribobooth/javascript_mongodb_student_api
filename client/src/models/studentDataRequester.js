 var Student = require('./student');

var StudentDataRequester = function(){

};

StudentDataRequester.prototype = {
  makeGetRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  all: function(callback){
    var url = 'http://localhost:3000/api/students';
    this.makeGetRequest(url, function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var result = JSON.parse(jsonString);

      callback(result);
    })
  }
}

module.exports = StudentDataRequester;
