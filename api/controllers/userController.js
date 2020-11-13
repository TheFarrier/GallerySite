const db = require("../models")
const bcrypt = require("bcryptjs")

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
  authenticateUser: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};