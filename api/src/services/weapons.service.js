const { Op } = require('sequelize');
const weapons = require('../libs/models/weapons.model');


class WeaponsService {
  constructor() {}

  async find (query) {

    const options = {
      order: [['id', 'ASC']],
    }

    options.where = {}

    if (query.country) {
      options.where.country = { [Op.like]: query.country }
    }
    
    if (query.type) {
      options.where.type = { [Op.like]: query.type }
    }

    const response = await weapons.findAll(options)

    return response
  }

  async create (body) {

    const newWeapon = await weapons.create({
      type: body.type,
      country: body.country,
      weaponName: body.weaponName,
      ammo: body.ammo,
      rate: body.rate,
      recharge: body.recharge,
      damage: body.damage,
      img: body.img,
    }) 

    return newWeapon
  }

}

module.exports = WeaponsService;
