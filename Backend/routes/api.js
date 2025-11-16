const apiRoutes =require("express").Router()
const userController =require("../controller/user")
const adminController = require('../controller/admin')
const uploads = require('../middleware/multer')
const auth = require("../middleware/auth")
const adminAuth = require('../middleware/admin')


// ! User Controller ka use
apiRoutes.post("/regdata", userController.regDataController)
apiRoutes.post('/loginuser', userController.loginDataController)
apiRoutes.get("/userproduct", userController.userProductController)
apiRoutes.post('/userquary', userController.userQuaryController)
apiRoutes.post('/cart/save',auth, userController.saveCartDataController)
apiRoutes.get('/search', userController.searchController)
apiRoutes.get("/cart/:id",auth,userController.getCartController)
apiRoutes.post("/create-order", userController.orderController)
apiRoutes.post("/varify", userController.varifyController)


// ! Admin Controller ka use
apiRoutes.post('/addadminproduct', uploads.single("image"), adminController.addAdminProductController)
apiRoutes.get('/getproduct', adminController.getAllProductController)
apiRoutes.delete("/productdelete/:abc", adminController.deleteProductController)
apiRoutes.get('/editproductdata/:abc', adminController.editProductDataController)
apiRoutes.post('/productupdate/:abc', adminController.productUpdateController)
apiRoutes.get('/queryalldata', adminController.queryAllDataController)
apiRoutes.delete('/querydelete/:abc', adminController.queryDeleteContoller)
apiRoutes.get('/querysingledata/:id', adminController.querySingleDataContoller)
apiRoutes.post('/mailreply/:abc',adminController.mailReplyController)
apiRoutes.get('/allproduct',adminAuth,adminController.allProductController)
apiRoutes.post('/adminlogin',adminController.adminLoginController)

module.exports = apiRoutes