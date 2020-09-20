const express = require("express")
const passport = require("passport")

// jwt stategy
require("../utils/auth/strategies/jwt")

const adminApi = (app) => {
  const router = express.Router()

  app.use("/api/admin", router)

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
      if (!req.user.isAdmin) {
        res.sendStatus(401, '/')
      } else {
        res.send("hello Admin")
      }
    }
  )
}

module.exports = adminApi
