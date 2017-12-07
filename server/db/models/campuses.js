'use strict';

const db = require('../db');
const Sequelize = require('sequelize');
const DataTypes = db.Sequelize;



const Campus = db.define('campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})


module.exports = Campus;


