const mongoose = require("mongoose");

const userSchema = {
    name: String,
    email: String,
    username: String,
    phone: String,
    country: String,
    region:String,
    password: String,

}
const mongoCollection = mongoose.model("User", userSchema)

module.exports = mongoCollection;