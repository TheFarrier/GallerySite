const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const routes = require('./api/routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
app.use(express.static(path.join(__dirname, './public')));


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/GallerySite');

mongoose.connection.on('connected', () => {
  console.log("Connected to database");
})

mongoose.connection.on('error', () => {
  console.log("Failed databse connection");
})

// Start API Server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});