"use strict";

const mongoose   = require('mongoose');
const Author     = require('../models/author');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {
  const promise = Author.find( 'articles').exec();

  promise.then( (articles) => res.render('index', { pageTitle: "Index", items1: articles }))
         .catch( (err) => res.send(err));
};
