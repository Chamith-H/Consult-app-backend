const express = require("express");
const router = express.Router();
const dataModel = require("../Models/CartData_Model")

//API-01
//save iten data to the Cart
router.route("/addConsult").post((req, res) => {
    const user = req.body.user
    const image = req.body.image
    const price = req.body.status


    const mongoDocument = new dataModel({
        user,
        image,
        price,
    })

    const response = mongoDocument.save()
    response != null ?
        res.send('1') :res.send('0')
})

//API 2 Get cart Data
router.route("/getConsult").post((req, res) => {
    const user = req.body.user
    
    dataModel.find({"user":user})
        .then(cartItems => res.json(cartItems))
})

module.exports = router