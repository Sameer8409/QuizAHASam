let userModel = require('../models/user');
exports.totalUsers = (req, res)=>{
	userModel.find({email:{$ne:"admin@gmail.com"}})
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