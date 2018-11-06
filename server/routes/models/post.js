const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text : String,
    createdAt : Date
});

module.exports = mongoose.model('post',postSchema);