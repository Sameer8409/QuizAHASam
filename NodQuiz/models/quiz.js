/**
 * QuizModel
 */
const mongoose = require('mongoose');
const quizSchema = require('../database/schema').quiz;
const Quiz = mongoose.model('Quiz', quizSchema);
const async = require('async');
module.exports = Quiz;
