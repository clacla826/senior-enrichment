const express = require('express');
const router = express.Router();
const { Student } = require('../db/models');
//const Student = models.Student;
module.exports =router;

console.log('THIs is Students ROUTE')

router.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.get('/:studentId', (req, res, next) => {
  //console.log(req.params.studentId)
  Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gpa: req.body.gpa,
    campusId: req.body.campusId 
  })
    .then(createdStudent => {
      res.json(createdStudent);
    })
    .catch(next);
})

router.put('/:studentId', (req, res, next) => {
  const info = req.body
  Student.findById(req.params.studentId)
    .then(student => student.update(info))
    .then(updatedStudent => res.json(updatedStudent))
    .catch(next);
})

router.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {
     id: req.params.studentId
    }
  })
    .then(numAffectedRows => console.log(numAffectedRows))
    .catch(next);
})




// curl -H "Content-Type: application/json" -X POST -d '{"firstName":"jim","lastName":"Maon", "email":"jim@gmail.com","gpa":3.9 ,"campusId":2}' http://localhost:1337/api/students


//curl -X PUT -d arg=val -d arg2=val2 localhost:8080

// curl -X PUT -H "Content-Type: application/json" -d '{"firstName":"JUUUUU","lastName":"NNNNNNN", "email":"jftim@gmail.com","gpa":3.9 ,"campusId":2}' http://localhost:1337/api/students/2
