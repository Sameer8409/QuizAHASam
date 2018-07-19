/**
 * category Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let categorySchema = new Schema({
    name: String,
    picture: String
    
});

module.exports = categorySchema;