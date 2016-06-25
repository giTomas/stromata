"use strict";

const mongoose   = require('mongoose');
const Image      = require('../models/image');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {
  const promise = Image.find( 'images').exec();

  promise.then( (images) => {
    res.render('index', { pageTitle: "Index", items: images })
  })
  .catch( (err) => {
    console.log(err);
  });
};
