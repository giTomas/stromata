"use strict";

const mongoose   = require('mongoose');
const History    = require('../models/history');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {

  const promise = History.find( 'articles').exec();

  promise
    .then( (articles) => res.render('articles', { pageTitle: "Index", items: articles, user: req.user }))
    .catch( (err)     => res.send(err));
};
