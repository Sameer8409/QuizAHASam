/**
 * Quiz Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let quizSchema = new Schema({
    category_id: String,
    quizName: Array,
    question: String,
    Answers: String,
});

module.exports = quizSchema;