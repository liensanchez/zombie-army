const { DataTypes } = require('sequelize')
const sequelize = require('../database/database');


const weapons = sequelize.define('weapons', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.STRING,
    isIn:
      ['Rifles', 'Secondary', 'Pistols', 'Equipment']
  },
  country: {
    type: DataTypes.STRING,
    isIn: 
      ['Axis', 'USSR', 'USA', 'UK']
  },
  weaponName: {
    type: DataTypes.STRING
  },
  ammo: {
    type: DataTypes.INTEGER
  },
  rate: {
    type: DataTypes.STRING
  },
  recharge: {
    type: DataTypes.STRING
  },
  damage: {
    type: DataTypes.STRING
  },
  img: {
    type: DataTypes.STRING
  }

})


module.exports = weapons;