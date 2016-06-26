"use strict";

// DEPENDENCIES
const express    = require('express');
const app        = express();   //instead of express(app) work bad(!!) with STRICT MODE
const bodyParser = require('body-parser');
const formidable = require("express-formidable");
const path       = require('path');
const exphbs     = require('express-handlebars');
const mongoose   = require('mongoose');
const port       = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip         = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const database   = require("./config/database");
const routes     = require('./app/index');

//load/database.js--------------------------------------------------------------
mongoose.connect( database.url , (err, res) => {
  if (err) {
    console.log("Connection to " + database.url + " failed " + err);
  } else {
    console.log( 'Succesfully connected to ' + database.url);
  }
});

//CONFIG------------------------------------------------------------------------
// app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(formidable.parse());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// app.enable('view cache');
app.use( '/public', express.static(path.join(__dirname + '/public')));

//connect ROUTES to app------------------------------------------------------------------------
app.use('/', routes)

app.listen(port, ip, () => console.log('App is listening on port ' + port + ' ip: ' + ip));
