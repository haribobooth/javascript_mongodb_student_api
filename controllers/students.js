var express = require('express');
var studentRouter = express.Router();
var Student = require('../client/src/models/student');
var StudentQuery = require('../client/db/studentQuery');
var query = new StudentQuery();

studentRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

studentRouter.get('/:id', function(req, res){
  query.all(function(results){
    res.json(results[req.params.id]);
  });
});

studentRouter.post('/', function(req, res){
  var newStudent = new Student(req.body);
  query.addStudent(newStudent, function(results){
    res.json(results);
  });
});

studentRouter.put('/:id', function(req, res){
  var updatedDetails = req.body;
  query.updateStudent(updatedDetails, req.params.id, function(results){
    res.json(results);
  });
});

studentRouter.delete('/:id', function(req, res){
  query.deleteStudent(req.params.id, function(results){
    res.json(results);
  })
});

module.exports = studentRouter;
