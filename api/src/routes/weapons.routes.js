const { Router, response } = require('express');
const WeaponsService = require('../services/weapons.service')
const router = Router();

router.get('/', async (req, res) => {

  try {
    const response = 'funciona'

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

router.post('/', async (req, res) => {

  try {
    const response = 'andaaaa'

    res.json(response)
  }catch (error) {
    res.json(error)
  }

})

module.exports = router;