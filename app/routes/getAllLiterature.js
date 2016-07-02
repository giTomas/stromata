"use strict";

const mongoose   = require('mongoose');
const Literature    = require('../models/literature');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {

  const promise = Literature.find( 'articles').exec();

  promise
   .then( (articles) => res.render('articles', { pageTitle: "Index", items: articles, user: req.user }))
   .catch((err)      => res.send(err));
};
