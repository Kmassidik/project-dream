const express = require('express')
const route = express.Router()
const UserController = require("../controllers/userController")

route.get("/getlogin", UserController.getLogin)

module.exports = route