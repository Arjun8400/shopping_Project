const apiRoutes =require("express").Router()
const userController =require("../controller/user")

apiRoutes.post("/regdata", userController.regDataController)
apiRoutes.post('/loginuser', userController.loginDataController)

module.exports = apiRoutes