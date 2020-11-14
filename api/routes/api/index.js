const router = require('express').Router();
const userRoutes = require('./users');

// product routes
router.use('/user', userRoutes);

module.exports = router;