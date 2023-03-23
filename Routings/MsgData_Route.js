const express = require("express");
const router = express.Router();
const dataModel = require("../Models/MsgData_Model")

//API-01
//save message data to database when type a new message
router.route("/saveChat").post((req, res) => {

    const u_name = req.body.user
    const message = req.body.msg

    const mongoDocument = new dataModel({
        u_name,
        message
    })

    const response = mongoDocument.save()
    
    if(response != null) {  
        dataModel.find({"user":u_name})
            .then(cartItems => res.json(cartItems))
    }

    else {
        res.send('0')
    }
})

//API 2 Get cart Data
router.route("/getChat").post((req, res) => {
    const user = req.body.user

    dataModel.find({"user":user})
        .then(cartItems => res.json(cartItems))
})

module.exports = router;