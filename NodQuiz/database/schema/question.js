/**
 * Question Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let questionSchema = new Schema({
    quiz_id: String,
    question: Array
    
});

module.exports = questionSchema;