var StudentDataRequester = require('../models/studentDataRequester')

var UI = function(){
  var studentDataRequester = new StudentDataRequester();
  studentDataRequester.all(function(results){
    this.render(results);
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement('p');
    p.innerText = label + ": " + text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(students){
    var container = document.querySelector('#students');
    students.forEach(function(student){
      var li = document.createElement('li');
      this.appendText(li, student.name, "Name");
      this.appendText(li, student.favouriteLanguage, "Favourite Language");
      container.appendChild(li);
    }.bind(this));
  },
}

module.exports = UI;
