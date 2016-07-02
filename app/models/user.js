"use strict";

const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  username:  String,
  password: String
});

userSchema.methods.generateHash  = (password)       => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
userSchema.methods.validPassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = mongoose.model('User', userSchema);
