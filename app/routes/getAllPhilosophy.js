"use strict";

const mongoose   = require('mongoose');
const Philosophy = require('../models/philosophy');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {

  const promise = Philosophy.find( 'articles').exec();

  promise
    .then( (articles) => res.render('articles', { pageTitle: "Index", items: articles, user: req.user }))
    .catch( (err)     => res.send(err));
};
