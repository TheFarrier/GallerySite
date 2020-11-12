const mongoose = require("mongoose");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: {type: String, required: true},
  avatar: {type: String, required: true},
  banner: {type: String, required: true},
  posts: [{type: String}],
  hash: String,
  salt: String
});

userSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex')
};

userSchema.methods.generateJwt = function() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      exp: parseInt(expiry.getTime() / 1000)
    },
    'MY_SECRET'
  ); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

const User = mongoose.model("User", userSchema);


module.exports = User;