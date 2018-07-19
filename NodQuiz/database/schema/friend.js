/**
 * Friend Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let friendSchema = new Schema({
    user_one_id: String,
    user_two_id: String,
    status: Number
    
});

module.exports = friendSchema;