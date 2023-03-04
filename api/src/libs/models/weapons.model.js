const { DataTypes } = require('sequelize')
const sequelize = require('../database/database');


const weapons = sequelize.define('weapons', {
  id: {
    allowNull: false,
    autoIncrement: true
  },
  type: {
    type: DataTypes.STRING,
    
  }
})


module.exports = weapons;