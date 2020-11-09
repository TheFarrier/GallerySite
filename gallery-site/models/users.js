const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: {type: String, required: true},
  avatar: {type: String, required: true},
  banner: {type: String, required: true},
  posts: [{type: String}]

})

const User = mongoose.model("User", userSchema);


module.exports = User;