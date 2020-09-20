const express = require("express")
const helmet = require("helmet")
const app = express()

const { config } = require("./config/index")
const authApi = require("../src/routes/auth")
const adminApi = require("../src/routes/admin")
const userApi = require("../src/routes/user")
const notFoundHandler = require("./utils/middleware/notFoundHandler")

//Error Handlers
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require("./utils/middleware/errorHandlers")

// body parser
app.use(express.json())
app.use(helmet())

// routes
authApi(app)
adminApi(app)
userApi(app)

// Catch 404
app.use(notFoundHandler)

// Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`)
})
