/**
 * Quiz Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let quizSchema = new Schema({
    category_id: String,
    quizName: String,
    questions: Array,
    answer1: Array,
    answer2: Array,
    answer3: Array,
    answer4: Array,
    answer5: Array,
    answer6: Array
});

module.exports = quizSchema;