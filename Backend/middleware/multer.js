const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, path.join(__dirname, "../public/uploads"))
    },
    filename: function (req, file, cd) {
        cd(null, Date.now() + "-" + file.originalname)
    }
})

const uploads = multer({
    storage: storage,
    limits : {fieldSize: 1024*1024*5} // ! 5 mb se jada n ho
})


module.exports = uploads