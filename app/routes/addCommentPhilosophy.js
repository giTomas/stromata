"use strict";

const mongoose     = require('mongoose');
const Philosophy   = require('../models/philosophy');
mongoose.Promise   = require('bluebird');
const dateToLocale = require('../helpers/helpers').commentsDatetoLocaleString2;


module.exports = (req, res) => {

  const promise = Philosophy.findByIdAndUpdate(req.params.id,
    {$push: {"comments": { name: req.body.userName, body: req.body.userComment, date: new Date() }}},
    {safe: true, upsert: true, new: true}).exec();

  promise
    .then(  ()         => Philosophy.findById(req.params.id).exec())
    .then(  (article)  => dateToLocale(article))
    .then(  (comments) => res.render( 'comments', { item: comments,  layout: false }))
    .catch( (err)      => console.log(err))
};
