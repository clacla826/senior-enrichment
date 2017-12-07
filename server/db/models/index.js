'use strict';

//const db = require('../db');

const Student = require('./students');
const Campus = require('./campuses');

	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db

	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!
	// This is also probably a good place for you to set up your associations

Student.belongsTo(Campus);
//Campus.belongsTo(Student);

Campus.hasMany(Student);
//Campus.belongsToMany(Student, { through: 'campusStudent' });


module.exports = {
	Student,
	Campus
}
