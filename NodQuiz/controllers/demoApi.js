let userModel = require('../models/user');

exports.index = (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/dashboard');
        res.end();
    }else{
        res.render('login', {session: req.session});
    }
}

exports.myFirstApi1 = (req, res, next)=>{
	try{
		let data={
		name: "Sameer",
    	mobile: 9717219898,
    	email: "abc@gmail.com",
    	password: "123456",
    	doj:"10/10/2017",
    	total_score:40,
        
		}
        console.log(data);
		res.send(data);	
	}catch(error){
		throw error;
	}
}
exports.myFirstApi=(req,res,next)=>
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
                doj:req.body.doj,
                mobile:req.body.mobile
                            }, (err, data)=>{

                                const mydata={
                                    data:data,
                                    error:false,
                                    message:"user data"
                                }

                                res.send(mydata)
                                
                            });
                        }
                    })
                }
    });
}
        catch(err){
        throw err;
        }
    }