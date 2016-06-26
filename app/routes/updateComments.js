"use strict";

const mongoose     = require('mongoose');
const History      = require('../models/history');
const dateToLocale = require('../helpers/helpers').commentsDatetoLocaleString2;
mongoose.Promise   = require('bluebird');

module.exports = (req, res) => {
const promise = History.findById(req.params.id).exec();


  promise
    .then( (article) => dateToLocale(article))
    // for client side rendering
    // .then( (comments) => res.send(comments)})
    // for server side rendering
    .then( (comments) => res.render( 'comments', { item: comments,  layout: false }))
    .catch( (err) => res.send(err));
}
