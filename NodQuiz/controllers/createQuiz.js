let quizModel = require('../models/quiz');
var async = require('async');
exports.setQuiz =(req,res,next)=>
{	
	try{
		quizModel.findOne({quizName:req.body.quizName})
		.then((result)=>
		{
			if(result!=null){
				console.log("result");
				res.send("already exists");
			}
			else{
				async.waterfall([
					function(abc, callback){
						console.log(abc);
						quizModel.create({
							quizName:req.body.quizName,
						questions:[
									req.body.question1,
									req.body.question2,
									req.body.question3,
									req.body.question4,
									req.body.question5,
									req.body.question6,
									],
						answer1 : [
										req.body.correctAns1,
										req.body.ans11,
										req.body.ans12,
										req.body.ans13
										],
						answer2:[
										req.body.correctAns2,
										req.body.ans21,
										req.body.ans22,
										req.body.ans23
										],
						answer3 : [
										req.body.correctAns3,
										req.body.ans31,
										req.body.ans32,
										req.body.ans33
										],
						answer4 : [
										req.body.correctAns4,
										req.body.ans41,
										req.body.ans42,
										req.body.ans43
										],
						answer5 : [
										req.body.correctAns5,
										req.body.ans51,
										req.body.ans52,
										req.body.ans53
										],
						answer6 : [
										req.body.correctAns6,
										req.body.ans61,
										req.body.ans62,
										req.body.ans63
										]

						},(err,data)=>{
							const mydata={
								data:data,
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