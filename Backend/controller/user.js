const homecontroller= (req, res)=>{
    res.send("Hello data")
}

const postController = (req, res)=>{
    res.send("submit successfull")
    console.log(req.body)
}

module.exports = {
    homecontroller,
    postController
}