const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/user');

module.exports = () => {

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) =>  done(err, user))
  });

  passport.use('local-signup', new LocalStrategy(
  function(username, password , done){
    process.nextTick(() => {
      User.findOne({'username' : username}, (err, user) => {
        if (err)
          return done(err);
        if (user) {
          return done(null, false); // req.flash('signupMessage', 'That username is already taken!'))
        } else {
          const newUser  = new User();
          newUser.username = username;
          newUser.password = newUser.generateHash(password);
          newUser.save((err) => {
            if (err)
              throw err;
            return done(null, newUser);
          }); //newUser
        } //if else
      }); //find one
    }); //nextTick
  }));  //localStrategy

  passport.use('local-login', new LocalStrategy(
    function(username, password, done) {
      User.findOne({ 'username' : username}, function(err, user){
        const hash = user.password;
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.validPassword(password, hash)) {
          return done(null, false);
        }
        return done(null, user);
    });
  }));

}; //end of module
