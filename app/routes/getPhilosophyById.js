"use strict";

const mongoose   = require('mongoose');
const Philosophy = require('../models/philosophy');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {
const promise = Philosophy.findById(req.params.id).exec();

  promise.then( (article) => {
    res.render('article', { item: article });
    })
    .catch( (err) =>  res.send(err));
}
