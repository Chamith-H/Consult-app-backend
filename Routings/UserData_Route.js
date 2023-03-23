const express = require("express");
const router = express.Router();
const dataModel = require("../Models/UserData_Model")

//API-01
//save user data to database to register a new user
router.route("/saveUser").post((req, res) => {

    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const phone = req.body.phone
    const country = req.body.country
    const region = req.body.region
    const password = req.body.password

    const mongoDocument = new dataModel({
        name,
        email,
        username,
        phone,
        country,
        region,
        password
    })

    const response = mongoDocument.save()
    response != null ?
        res.send('1') :res.send('0')
})


//API-02
//search user's email and password to login process
router.route("/loginUser").post((req, res)=> {
   const uname = req.body.username
   const pword = req.body.password

   

    dataModel.find({"username":uname},(err1, checked_Object)=> {
        if(checked_Object == "") {
            res.send("0")
        }

        else {
            dataModel.findOne({"username":uname, "password":pword},(err2, checked_User)=> {
                if(checked_User == "") {
                    res.send("1")
                }
        
                else {
                    res.send("2")
                }
            })
        }
    })
})

//API-03
router.route("/findUser").post((req, res)=> {
    const uname = req.body.user
    dataModel.findOne({"username":uname})
        .then(userData => res.json(userData))
    
 })


module.exports = router;