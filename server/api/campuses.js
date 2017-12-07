const express = require('express');
const router = express.Router();
const { Campus } = require('../db/models');
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


router.post('/', (req, res, next) => {
  Campus.create({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  })
    .then(createdCampus => {
      res.json(createdCampus);
    })
    .catch(next);
})

router.put('/:campusId', (req, res, next) => {
  const info = req.body
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(info))
    .then(updatedStudent => res.json(updatedStudent))
    .catch(next);
})

router.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {
     id: req.params.campusId
    }
  })
    .then(numAffectedRows => console.log(numAffectedRows))
    .catch(next);
})
