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
    defaultValue: "https://d24oe5tmwdgz7x.cloudfront.net/event/56919/banner/event_1509963609.jpg"
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})


module.exports = Campus;


