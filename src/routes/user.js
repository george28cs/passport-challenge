const express = require('express')
const passport = require('passport')

// jwt stategy
require('../utils/auth/strategies/jwt')

const userApi = (app) => {
  const router = express.Router()

  app.use('/api/user', router)
  
  router.get('/', passport.authenticate( 'jwt', {session: false}), (req, res, next) => {
    res.send('Hello User');
  })
}

module.exports = userApi