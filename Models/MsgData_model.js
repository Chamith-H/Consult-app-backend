const mongoose = require("mongoose");

const msgSchema = {
    u_name:String,
    message:String
}

const mongoCollection = mongoose.model("Message", msgSchema)

module.exports = mongoCollection;