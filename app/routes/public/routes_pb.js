const express = require("express")

const routes = express.Router()


const PageControler = require("../../controllers/pagecontroller.js")
const NewsController = require("../../controllers/newscontroller.js")
routes.get("/", PageControler.HomePage)
routes.get("/news/:id", NewsController.NewsShow)
module.exports = routes