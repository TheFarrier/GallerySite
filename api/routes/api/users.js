const router = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.registerUser)
  

// Matches with "/api/user/:id"
// router.route("/:id")
//   .get(userController.findUser)
//   .delete(userController.removeUser)

router.route("/authenticate")
  .post(userController.authenticateUser)

router.route("/profile")
  .get(verifyToken, userController.accessProfile)
  .put(verifyToken, userController.updateUser)


function verifyToken(req, res, next) {
  console.log("validating token")
  const bearerHeader = req.headers['authorization'];

  console.log(bearerHeader)

  if(typeof bearerHeader !== 'undefined') {
    jwt.verify(bearerHeader, 'secretkey', (err, authData) => {
      if (err) {
        res.sendStatus(403)
      } else {
        res.json({
          message:"token Authenticated",
          authData
        })
      }
    })

  } else {
    res.sendStatus(403)
  }
}

module.exports = router;