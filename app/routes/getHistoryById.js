"use strict";

const mongoose   = require('mongoose');
const History    = require('../models/history');
mongoose.Promise = require('bluebird');


module.exports = (req, res) => {
  const promise = History.findById(req.params.id).exec();

  promise.then( (article) =>  res.render('article', { item: article }))
         .catch( (err) => console.log(err));
}

// module.exports = getArticleById;
