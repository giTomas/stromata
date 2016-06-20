const mongoose   = require('mongoose');
const Art        = require('../models/art');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {
const promise = Art.findById(req.params.id).exec();

  promise.then( (article) => {
    res.render('article', { item: article });
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
