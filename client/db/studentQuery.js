var MongoClient = require('mongodb').MongoClient;

var StudentQuery = function(){
  this.url = "mongodb://localhost:27017/cohort"
};

StudentQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('students');
        collection.find().toArray(function(err, docs){
          callback(docs);
        });
      }
    })
  },

  addStudent: function(newStudent, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('students');
        collection.insert(newStudent);
        collection.find().toArray(function(err, docs){
          callback(docs);
        });
      }
    });
  },

  updateStudent: function(updatedDetails, index, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('students');
        collection.find().toArray(function(err, docs){
          var studentToBeUpdated = docs[index];
          var updatedStudent = studentToBeUpdated;

          for(var detail in updatedDetails){
            updatedStudent[detail] = updatedDetails[detail];
          }

          collection.update(studentToBeUpdated, updatedStudent);
          callback(docs);
        });
      }
    });
  },
}

module.exports = StudentQuery;
