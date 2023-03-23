const mongoose = require("mongoose");

const cartSchema = {
    user:String,
    image: String,
    price: String
}

const mongoCollection = mongoose.model("Cart", cartSchema)

module.exports = mongoCollection;