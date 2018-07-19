/**
 * Signup Model
 */
const mongoose = require('mongoose');
const signupSchema = require('../database/schema').users;
const Signup = mongoose.model('User', signupSchema);
const async = require('async');

module.exports = Signup;