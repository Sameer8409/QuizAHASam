/**
 * Quiz Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let resultSchema = new Schema({
    player_id: String,
    playerEmail: String,
    quizName:String,
    playTime:String,
    total_score:Number

});

module.exports = resultSchema;