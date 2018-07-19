/**
 * Notification Schema
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let notificationSchema = new Schema({
    friend_id: String,
    notification: String
    
    
});

module.exports = notificationSchema;