/**
 * Quiz Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let quizSchema = new Schema({
    category_id: String,
    name: String,
    questions: Array,
    options: Array
});

module.exports = quizSchema;