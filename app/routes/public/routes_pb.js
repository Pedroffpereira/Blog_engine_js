const express = require("express")

const routes = express.Router()


const PageControler = require("../../controllers/pagecontroller.js")

routes.get("/", PageControler.HomePage)

module.exports = routes