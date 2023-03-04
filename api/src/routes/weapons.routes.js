const { Router, response } = require('express');

const router = Router();

router.get('/', async (req, res) => {

  try {
    const response = 'andaaaa'

    res.json(response)
  }catch (error) {
    res.json(error)
  }
})

module.exports = router;