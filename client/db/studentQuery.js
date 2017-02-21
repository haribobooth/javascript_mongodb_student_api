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
  
}

module.exports = StudentQuery;
