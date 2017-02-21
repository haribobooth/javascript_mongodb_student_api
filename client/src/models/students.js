var Student = require('./student');

var students = function(){
  var student1 = new Student({
    name: "Harrison",
    favouriteLanguage: "Java"
  });

  var student2 = new Student({
    name: "Dave",
    favouriteLanguage: "JavaScript"
  });

  var student3 = new Student({
    name: "Rory",
    favouriteLanguage: "JavaScript"
  });

  var student4 = new Student({
    name: "Lorna",
    favouriteLanguage: "Ruby"
  })

  return [student1, student2, student3, student4];
}

module.exports = students;
