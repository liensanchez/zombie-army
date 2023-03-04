const { Router } = require('express')
const router = Router()
const weaponsRoute = require('./weapons.routes')

function routesApi(app) {

  app.use('/api/', router)

  router.use('/weapons', weaponsRoute)

}

module.exports = routesApi;
