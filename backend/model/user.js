const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const user= new mongoose.model('User', UserSchema)

module.exports= user
