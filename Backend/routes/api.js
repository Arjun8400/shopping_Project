const apiRoutes =require("express").Router()
const userController =require("../controller/user")
const adminController = require('../controller/admin')

apiRoutes.post("/regdata", userController.regDataController)
apiRoutes.post('/loginuser', userController.loginDataController)
apiRoutes.post('/addadminproduct', adminController.addAdminProductController)

apiRoutes.get('/getproduct', adminController.getAllProductController)
apiRoutes.delete("/productdelete/:abc", adminController.deleteProductController)
apiRoutes.get('/editproductdata/:abc', adminController.editProductDataController)
apiRoutes.post('/productupdate/:abc', adminController.productUpdateController)

module.exports = apiRoutes