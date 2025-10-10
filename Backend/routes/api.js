const apiRoutes =require("express").Router()
const controller =require("../controller/user")

apiRoutes.get("/", controller.homecontroller)
apiRoutes.post("/log", controller.postController)

module.exports = apiRoutes