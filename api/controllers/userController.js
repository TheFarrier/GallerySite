const db = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const passport = require("passport")

module.exports ={
  registerUser: async function(req, res) {
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.hash, salt, (err, hash) => {
        req.body.hash = hash
        db.User.collection
          .insert(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
    })
  },
  findUser: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.body.vendor }, {$push:{products: req.body._id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  authenticateUser: async function(req, res) {
    db.User
      .findOne({username: req.body.username})
      .then(user => {
        bcrypt.compare(req.body.password, user.hash, (err, isMatch) => {
          if(err) throw err;
          if(isMatch) {
            jwt.sign(req.body, 'secretkey', { expiresIn: '7d'}, (err, token) =>{
              res.json({
                token: token,
                user : {
                  id: user._id,
                  email: user.email,
                  username: user.username,
                  avatar: user.avatar,

                }
              })
            }),
            console.log("Authenticated")   
          } else {
            res.json("password bad")
          }
        })
      })
      .catch(err => res.status(422).json(err));
  },
  accessProfile: function(req, res) {
    console.log('accessing profile')

    db.User
      .findById({ _id: req.body._id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
    // const bearerHeader = req.headers['authorization'];

    // if(typeof bearerHeader !== 'undefined') {
      
    // } else {
    //   res.sendstatus(403)
    // }

    
  }
};