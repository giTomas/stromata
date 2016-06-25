"use strict";

const mongoose   = require('mongoose');
const Author     = require('../models/author');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {
const promise = Author.find( { "author.authorId" : req.params.id } ).exec();

  promise.then( (author) => {
    res.render('article', { item: author });
    })
    .catch( (err) => {
      console.log(err);
    })
}
/*
routes.get('/art/:id', (req, res) => {

  Art.findById(req.params.id, function(err, article) {

    if(err)
      res.send(err);
      res.render('article', { item: article })
  })
})*/
