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

userSchema.methods.setPassword = (password) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) =>{
      this.hash = hash
    })
  })
};

userSchema.methods.generateJwt = function() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.name,
      avatar: this.avatar,
      exp: parseInt(expiry.getTime() / 1000)
    },
    'MY_SECRET'
  ); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

const User = mongoose.model("User", userSchema);


module.exports = User;