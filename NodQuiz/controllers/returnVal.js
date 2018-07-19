let userModel = require('../models/user');
var async = require('async');
exports.setVal = (req, res) => {
    userModel.findOne({email:req.body.email, password:req.body.password})
    .then((result)=>
    {
        if(result !=null){
        	if(result.email=="admin@gmail.com"){
        		res.send("admin login successful")
        	}
        	else{
            res.send("login successful");
        }
        }
        else{
            console.log(result);
            res.send("unsuccessful");
        }
    })
    .catch((err)=>{
        console.log(err);
        res.send("hello");
    })
}

exports.setSignup=(req,res,next)=>
{
	try{
		userModel.findOne({email:req.body.email})
    .then((result)=>{
    	if(result!=null){
    		console.log("result");
    		res.send("already exists");
    	}
    	else{
		async.series({
 			one:function(callback){
 			userModel.create({
 				name:req.body.name,
				email:req.body.email,
				password:req.body.password,
				confirm_password:req.body.confirm_password,
				doj:new Date(),
				mobile:req.body.mobile
							}, (err, data)=>{

								const mydata={
									data:data,
									error:false,
									message:"user data"
								}

								res.send(mydata)
								
							});
 			 			},
 			 			
 			 		})
				}
 	});
}
		catch(err){
		throw err;
		}
	}
		