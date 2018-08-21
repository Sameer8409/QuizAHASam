    let userModel = require('../models/user');
    const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotalySecretKey');
    var async = require('async');
    exports.forgot = (req, res) => {
        userModel.findOne({email:req.body.email, mobile:req.body.mobile})
        .then((result)=>
        {
        if(result !=null){
        	res.send("yes");
            }
        	else{
                res.send("No");
            }
            
        })
        .catch((err)=>{
            console.log(err);
            res.send("hello");
        })
    }
    exports.reset = (req,res) =>{
        try{
            async.series({
                one:function(callback){
                userModel.update({email:req.body.email}, {$set:{password:cryptr.encrypt(req.body.password)}},
                 (err, data)=>{
                            const mydata={
                                data:req.body.email,
                                error:false,
                                message:"user data"
                                }
                            res.send(mydata)                               
                        }
                    );
                },            
            })
        }
        catch(err){
            throw err;
        }
    }