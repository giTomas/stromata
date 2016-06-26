"use strict";

const mongoose   = require('mongoose');
const History    = require('../models/history');
const Literature = require('../models/literature');
const Philosophy = require('../models/philosophy');
const arrayMerge = require('../helpers/helpers').arrayMergeItems;
mongoose.Promise = require('bluebird');


module.exports = (req, res) => {
  const auth     = req.params.id;
  const promise  = History.find( { "author.authorId" : auth } ).exec();
  const promise2 = Philosophy.find( { "author.authorId" : auth } ).exec();
  const promise3 = Literature.find({ "author.authorId" : auth} ).exec();
  const fns      = [promise, promise2, promise3];

  Promise.all(fns)
    .then( (articles)    => arrayMerge(articles))
    .then( (artCombined) => res.render('articles', { pageTitle: "all", items: artCombined  }))
    .catch( (err)        => res.send(err));
};
