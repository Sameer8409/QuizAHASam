let quizModel = require('../models/quiz');
var async = require('async');
exports.setQuiz =(req,res,next)=>
{	console.log(req.body.name)
	console.log(req.body.questions)
	console.log(req.body.options)
	try{
		quizModel.findOne({quizName:req.body.name})
		.then((result)=>
		{
			if(result!=null){
				//console.log(result);
				res.send("already exists");
			}
			else{
				async.waterfall([
					function(abc, callback){
						// console.log(abc);
							console.log(req.body.questions);
						quizModel.create({
							name:req.body.name,
						questions: req.body.questions,
						options: req.body.options
						},(err,data)=>{
							const mydata={
								data:data,
								status:true,
								error:false,
								message:"Quiz Data"
							}
						res.send(data)
						});
					}
				], (err, result) => {
					if (err) { throw err; }
					console.log("result", result);
				});
			}
		});
	}
	catch(err){
		throw err;
	}
}	