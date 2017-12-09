const express = require('express');
const router = express.Router();
const { Campus, Student } = require('../db/models');
//const Student = models.Student;
module.exports =router;

console.log('THIs is Campuses ROUTE')

router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/:campusId', (req, res, next) => {
  //console.log(req.params.studentId)
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next)
})

router.get('/:campusId/students', (req, res, next) => {
  Campus.findById(req.params.campusId)
  //.then(res => console.log(res.id))
  .then(res => Student.findAll({
    where: {
      campusId: res.id
    }
  }))
  .then(campusStudents => res.send(campusStudents))
  .catch(next)
})


// router.post('/', (req, res, next) => {

//   Campus.create({
//     name: req.body.name,
//     imageUrl: req.body.imageUrl,
//     description: req.body.description,
//   })
//     .then(createdCampus => {
//       res.json(createdCampus);
//     })
//     .catch(next);
// })

router.post('/', (req, res, next) => {
  console.log("REQ BODY", req.body)
    Campus.create(
      req.body
    )
      .then(createdCampus => {
        console.log(createdCampus)
        res.json(createdCampus);
      })
      .catch(next);
  })



router.put('/:campusId', (req, res, next) => {
  const info = req.body
  console.log(info)
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(info))
    .then(updatedCampus => {
      console.log('THROUGH ROUTER UPDATED res', updatedCampus)
      res.json(updatedCampus)})
    .catch(next);
})


// router.put('/:campusId', (req, res, next) => {
//   const info = req.body
//   console.log(info)
//   Campus.findById(req.params.campusId)
//     .then(campus => {
//       campus.name = info.name;
//       campus.imageUrl = info.imageUrl;
//       campus.description = info.description;
//       campus.save();
//     })
//     .then(updatedCampus => {
//       console.log('THROUGH ROUTER UPDATED res', updatedCampus)
//       res.json(updatedCampus)})
//     .catch(next);
// })




router.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {
     id: req.params.campusId
    }
  })
    .then(numAffectedRows => console.log(numAffectedRows))
    .catch(next);
})
