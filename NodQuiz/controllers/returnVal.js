    let userModel = require('../models/user');
    const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotalySecretKey');
    var async = require('async');
    var date = new Date();
    exports.setVal = (req, res) => {
        userModel.findOne({email:req.body.email})
        .then((result)=>
        {
            if(result !=null){
            	if(result.email=="admin@gmail.com" && req.body.password===cryptr.decrypt(result.password))
                {   
            		res.send(result.email)
            	}
            	else{
                    if(result.email===req.body.email && cryptr.decrypt(result.password)===req.body.password)
                    {
                        res.send(result.email);
                    }
                    else{
                        res.send("unsuccessful");
                    }
                }
            }
            else{
                res.send("unsuccessful");
            }
        })
        .catch((err)=>{
            console.log(err);
            res.send(err);
        })
    }

    exports.setSignup=(req,res,next)=>
    {
    	try{
    		userModel.findOne({email:req.body.email})
        .then((result)=>{
        	if(result!=null){
        		res.send("already exists");
        	}
        	else{
    		async.series({
     			one:function(callback){
     			userModel.create({
     				name:req.body.name,
    				email:req.body.email,
    				password:cryptr.encrypt(req.body.password),
    				confirm_password:req.body.confirm_password,
    				doj:date.toDateString(),
    				mobile:req.body.mobile
    							}, (err, data)=>{

    								const mydata={
    									data:req.body.email,
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
    		