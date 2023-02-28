const { Router } = require('express')
const router = Router()

function routesApi(app) {

  app.use("/api/v1", router)

}

module.exports = routesApi;
