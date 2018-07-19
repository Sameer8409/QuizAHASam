/**
 * Answer Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let answerSchema = new Schema({
    question_id: String,
    ans: Array
    
    
});

module.exports = answerSchema;