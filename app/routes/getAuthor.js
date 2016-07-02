"use strict";

const mongoose   = require('mongoose');
const Author     = require('../models/author');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {

  const promise = Author.find( { "author.authorId" : req.params.id } ).exec();

  promise.then( (author) => res.render('article', { item: author, user: req.user }))
         .catch( (err)   => res.send(err))
};
