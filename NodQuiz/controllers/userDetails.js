let userModel = require('../models/user');
exports.userDetails = (req, res)=>{
	userModel.find({email:{$ne:"admin@gmail.com"}})
	.then((result)=>{
		res.send(result);
	})
} 