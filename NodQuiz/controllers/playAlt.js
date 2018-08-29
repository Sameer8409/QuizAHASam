let quizModel = require('../models/quiz');
exports.cquiz=(req, res, next)=>{
	try{
		console.log("hlo")
		quizModel.findOne({name:req.body.name})
		.then((result)=>{
			if(result!=null)
			{
				console.log(result);
				res.send("already exist")
			}else{
				quizModel.create({
					name:name,
					questions:questions,
					options:options,
				},(err,data)=>{
					const mydata={
						data:data,
						status:true,
						error:false,
						message:"Quiz creation error"
					}
					res.send(mydata);
				});
			}
		})
	}catch(err){
		throw err;
	}
}