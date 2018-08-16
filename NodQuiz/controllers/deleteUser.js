	let userModel = require('../models/user');
	exports.delete = (req, res) => {
		userModel.remove({email:req.body.email})
		.then((result)=>{
			 
			res.send("Done");
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		})
	}