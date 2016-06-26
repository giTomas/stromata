"use strict";

const routes                 = require('express').Router();
const getHistoryById         = require('./routes/getHistoryById');
const getPhilosophyById      = require('./routes/getPhilosophyById');
const getLiteratureById      = require('./routes/getLiteratureById');
const getAllIndex            = require('./routes/getAllIndex');
const getAllHistory          = require('./routes/getAllHistory');
const getAllLiterature       = require('./routes/getAllLiterature');
const getAllPhilosophy       = require('./routes/getAllPhilosophy');
const getAllArticlesByAuthor = require('./routes/getAllArticlesByAuthor');
const getAuthor              = require('./routes/getAuthor');
const getAllAuthors          = require('./routes/getAllAuthors');
const getAllImages           = require('./routes/getAllImages');
const addComment             = require('./routes/addComment');
const updateComments         = require('./routes/updateComments');

//get first 3 documents from all articles collections
// TODO  add get first 3 images from img collection
routes.get('/', getAllIndex);

// get particular article from history collection
routes.get('/dejiny/:id', getHistoryById)

// TODO post comment to article
//get particular article from philosophy collection
routes.get('/filozofia/:id', getPhilosophyById)

//get particular article from literature collection
routes.get('/literatura/:id', getLiteratureById)

//get all articles from history collection
routes.get('/dejiny', getAllHistory);

routes.get('/literatura', getAllLiterature);

routes.get('/filozofia', getAllPhilosophy);

//get particular author
routes.get('/autori/:id', getAuthor);

//get all authors
routes.get('/autori', getAllAuthors);

//get articles by particular author
routes.get('/articles/by/:id', getAllArticlesByAuthor);

//get all images for gallery
routes.get('/images', getAllImages);

//Managing CLIENT SIDE routes---------------------------------------------------

routes.get('/Filozofia/comments/:id', (req, res) => res.json({"say":"hello"}));

routes.post('/Filozofia/comments/:id', (req, res) => {
  console.log(req.body);
  res.send("OK");
});

routes.get('/literatura/comments/:id', (req, res) => res.json({"say":"hello"}));

routes.get('/literatura/:id1/:id2', (req, res) => console.log( "id1 : " + req.params.id1 + ' ' + "id2 : " + req.params.id2 ));

routes.post('/literatura/comments/:id', (req, res) => {
  console.log(req.body);
  res.send("OK");
});

routes.get('/dejiny/comments/:id', updateComments );
routes.post('/dejiny/comments/:id', addComment);

/*
routes.post('/dejiny/comments/:id', (req, res) => {
  console.log(req.body.userName);
  res.send("OK");
});*/

module.exports = routes;
