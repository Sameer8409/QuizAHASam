/**
 * Result Model
 */
const mongoose = require('mongoose');
const resultSchema = require('../database/schema').result;
const Result = mongoose.model('result', resultSchema);
const async = require('async');


module.exports = Result;