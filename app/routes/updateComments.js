"use strict";

const mongoose   = require('mongoose');
const History    = require('../models/history');
const helpers    = require('../helpers/helpers');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {
const promise = History.findById(req.params.id).exec();
  /*promise.then( (article) => {
    res.send( article);
    console.log(article);
    })
    .catch( (err) => {
      console.log(err);
    })*/
  promise
    .then( (article) => helpers.commentsDatetoLocalSting2(article))
    // for client side rendering
    // .then( (comments) => res.send(comments)})
    // for server side rendering
    .then( (comments) => res.render( 'comments', { item: comments,  layout: false }))
    .catch( (err) => console.log(err))
}
