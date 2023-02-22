const express = require("express")
const route = express.Router()
const ControllerCollectionApi = require("../controllers/collectionApi")

route.get("/getlogin", ControllerCollectionApi.getLogin)

module.exports = route