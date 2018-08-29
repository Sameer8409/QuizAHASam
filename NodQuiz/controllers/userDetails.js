let userModel = require('../models/user');
exports.userDetails = (req, res)=>{
	userModel.find({email:{$ne:"admin@gmail.com"}}).skip(5*(req.body.activePage-1)).limit(5)
	.then((result)=>{
		if(result != null)
		{
		res.send(result);

		
		}(err, data)=>{
			const  mydata={
				data:result,
				status:true,
				error:false,
				message:"User details"
			}
			
		}
			
	})	
} 