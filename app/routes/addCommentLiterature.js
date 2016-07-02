"use strict";

const mongoose     = require('mongoose');
const Literature   = require('../models/literature');
mongoose.Promise   = require('bluebird');
const dateToLocale = require('../helpers/helpers').commentsDatetoLocaleString2;


module.exports = (req, res) => {

  const promise = Literature.findByIdAndUpdate(req.params.id,
    {$push: {"comments": { name: req.body.userName, body: req.body.userComment, date: new Date() }}},
    {safe: true, upsert: true, new: true}).exec();

  promise
    .then(  ()         => Literature.findById(req.params.id).exec())
    .then(  (article)  => dateToLocale(article))
    .then(  (comments) => res.render( 'comments', { item: comments,  layout: false }))
    .catch( (err)      => console.log(err))
};
