const apiRoutes =require("express").Router()
const userController =require("../controller/user")
const adminController = require('../controller/admin')
const uploads = require('../middleware/multer')

apiRoutes.post("/regdata", userController.regDataController)
apiRoutes.post('/loginuser', userController.loginDataController)
apiRoutes.post('/addadminproduct', uploads.single("image"), adminController.addAdminProductController)
apiRoutes.get("/userproduct", userController.userProductController)

apiRoutes.get('/getproduct', adminController.getAllProductController)
apiRoutes.delete("/productdelete/:abc", adminController.deleteProductController)
apiRoutes.get('/editproductdata/:abc', adminController.editProductDataController)
apiRoutes.post('/productupdate/:abc', adminController.productUpdateController)

module.exports = apiRoutes