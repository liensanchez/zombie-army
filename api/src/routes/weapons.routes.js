const { Router, response } = require('express');
const weapons = require('../libs/models/weapons.model');
const WeaponsService = require('../services/weapons.service')
const router = Router();


const service = new WeaponsService()


router.get('/', async (req, res) => {

  try {
    const page = req.query.page || 1

    const weapons = await service.find(req.query, page)

    let pages = ''

    if(weapons.weaponsInFilter <= weapons.weaponsLimit){
      pages = 1
    } else {
      pages = Math.ceil(weapons.weaponsInFilter / weapons.weaponsLimit)
    }

    const pageNumber = parseInt(page)

    const response = {weapons, pageNumber, pages}
    res.json(response)
  } catch (error) {
    res.json(error)
  }

})

router.get('/:id', async (req, res) => {

  try {
    const weaponID = req.params

     const weapon = await service.findID(weaponID) 

    const response = {weapon}
    res.json(response)
  } catch (error) {
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