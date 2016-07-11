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
const addCommentHistory      = require('./routes/addCommentHistory');
const addCommentPhilosophy   = require('./routes/addCommentPhilosophy');
const addCommentLiterature   = require('./routes/addCommentLiterature');
const showCommentsHistory    = require('./routes/showCommentsHistory');
const showCommentsPhilosophy = require('./routes/showCommentsPhilosophy');
const showCommentsLiterature = require('./routes/showCommentsLiterature');
// const user                   = require('./models/user');
//passport + passport helpers
const passport = require('passport');
const check    = require('./middleware/check');

//get first 3 documents from all articles collections
// TODO  add get first 3 images from img collection
routes.get('/', getAllIndex);

// TODO about
routes.get('/o-stranke', getAllIndex);

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

//get articles by particular author add view
routes.get('/articles/by/:id', getAllArticlesByAuthor);

//get all images for gallery
routes.get('/images', getAllImages);

//Managing CLIENT SIDE routes---------------------------------------------------

routes.get('/Filozofia/comments/:id', showCommentsPhilosophy);
routes.post('/Filozofia/comments/:id', addCommentPhilosophy);

routes.get('/literatura/comments/:id', showCommentsLiterature);
routes.post('/literatura/comments/:id', addCommentLiterature);

routes.get('/Dejiny/comments/:id', showCommentsHistory );
routes.post('/Dejiny/comments/:id', addCommentHistory);

//REGISTRATION------------------------------------------------------------------
routes.get('/login', (req, res) => res.render('login', { pageTitle: "index", user: req.user}));

routes.get('/register', (req, res) => res.render('signup', { pageTitle: "index", user: req.user}));

routes.post('/singup', passport.authenticate('local-signup', {
    successRedirect  : '/',
    failureRedirect : '/register',
    // failureFlash    : true
}));

routes.post('/login', passport.authenticate('local-login', {
    successRedirect  : '/',
    failureRedirect : '/login',
    // failureFlash    : true
}));

routes.get('/hidden', check, (req, res) => res.render('hidden', { pageTitle: "hidden", user: req.user}));

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


// test

routes.get('/literatura/:id1/:id2', (req, res) => console.log( "id1 : " + req.params.id1 + ' ' + "id2 : " + req.params.id2 ));

//error routes

routes.use((req, res, next) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

routes.use((req, res, next) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

module.exports = routes;
