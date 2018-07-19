/**
 * Users Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    mobile: Number,
    email: String,
    password: String,
    doj:Date,
    total_score:Number,
    
});

module.exports = userSchema;