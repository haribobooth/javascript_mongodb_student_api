var express = require('express');
var app = express();
var studentRouter = express.Router();
var students = require('../client/src/models/students')();
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
  // res.json(students[req.params.id]);
});

studentRouter.post('/', function(req, res){
  var newStudent = new Student(req.body);
  students.push(newStudent);
  res.json(students);
});

module.exports = studentRouter;
