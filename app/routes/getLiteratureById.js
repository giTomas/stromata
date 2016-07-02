"use strict";

const mongoose   = require('mongoose');
const Literature = require('../models/literature');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {

  const promise = Literature.findById(req.params.id).exec();

  promise
    .then( (article) => res.render('article', { pageTitle: article.title, item: article, user: req.user }))
    .catch( (err)    => res.send(err));

}

// module.exports = getArticleById;
