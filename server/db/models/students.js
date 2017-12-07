'use strict';

const db = require('../db');
const Sequelize = require('sequelize');
const DataTypes = db.Sequelize;


const Student = db.define('student', {

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: DataTypes.DECIMAL(2,1),
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
  name: {
    type: DataTypes.VIRTUAL,
    get: function() {
      return this.getDataValue('firstName')+' '+ this.getDataValue('lastName');
    }
  }

})


module.exports = Student;
