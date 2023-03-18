const express = require("express")
const promptControler = require("../controler/prompt_controler")

const routes = express.Router()

routes.post('/api/prompt', promptControler.sendText)
module.exports = routes
//http://localhost:5001/api/prompt