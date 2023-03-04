const { Op } = require('sequelize');
const weapons = require('../libs/models/weapons.model');


class WeaponsService {
  constructor() {}

  async find (query) {

    const options = {
      order: [['id', 'ASC']],
      limit: 6,
      offset: 0
    }

    options.where = {}

    if (query.country) {
      options.where.country = { [Op.like]: query.country }
    }
    
    if (query.type) {
      options.where.type = { [Op.like]: query.type }
    }

    if (query.page) {
      const page = parseInt(query.page)
      if (isNaN(page) || page < 1) {
        throw new CustomError('Invalid page number', 440)
      }
      options.offset = (page - 1) * (options.limit || query.limit)
    }


    const weaponsLimit = options.limit

    const weaponsInFilter = await weapons.count(options);

    const weaponsResponse = await weapons.findAll(options)


    return { weaponsResponse, weaponsInFilter, weaponsLimit }
    
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
