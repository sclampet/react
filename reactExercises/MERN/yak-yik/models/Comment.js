var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	username: {type:String, defualt: ''},
	body: {type:String, defualt: ''},
	timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('CommentSchema', CommentSchema);