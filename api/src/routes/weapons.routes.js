const { Router, response } = require('express');
const weapons = require('../libs/models/weapons.model');
const WeaponsService = require('../services/weapons.service')
const router = Router();


const service = new WeaponsService()


router.get('/', async (req, res) => {

  try {
    const weapons = await service.find(req.query)

    const response = {weapons}
    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

router.post('/', async (req, res) => {

  try {
    const response = await service.create(req.body)

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

module.exports = router;