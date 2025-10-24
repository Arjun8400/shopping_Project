const apiRoutes =require("express").Router()
const userController =require("../controller/user")

apiRoutes.post("/regdata", userController.regDataController)

module.exports = apiRoutes