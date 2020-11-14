const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  email: {type: String, required: true},
  username: {type: String, required: true},
  avatar: {type: String, required: false},
  banner: {type: String, required: false},
  posts: [{type: String}],
  hash: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

User.setPassword = (password) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) =>{
      this.hash = hash
    })
  })
};


 



module.exports = User;