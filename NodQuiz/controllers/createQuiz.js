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
					function(callback){
						var abc=[
								req.body.quizName,
									[
									req.body.question1,
										[
										req.body.ans11,
										req.body.ans12,
										req.body.ans13,
										req.body.correctAns1
										]
									],
									[
									req.body.question2,
										[
										req.body.ans21,
										req.body.ans22,
										req.body.ans23,
										req.body.correctAns2
										]
									],
									[
									req.body.question3,
										[
										req.body.ans31,
										req.body.ans32,
										req.body.ans33,
										req.body.correctAns3
										]
									],
									[
									req.body.question4,
										[
										req.body.ans41,
										req.body.ans42,
										req.body.ans43,
										req.body.correctAns4
										]
									],
									[
									req.body.question5,
										[
										req.body.ans51,
										req.body.ans52,
										req.body.ans53,
										req.body.correctAns5
										]
									],
									[
									req.body.question6,
										[
										req.body.ans61,
										req.body.ans62,
										req.body.ans63,
										req.body.correctAns6
										]
									]
									]

									
						console.log("callback1");
						console.log(abc[0]);
						callback(null, abc);
									
					},
					function(abc, callback){
						console.log(abc);
						quizModel.create({
							"quizName":[{
								quizName:abc[0],
								
								"question1":[{
											question:abc[1][0],
											"answers":[{
												       	answer1:abc[1][1][0],
														answer2:abc[1][1][1],
														answer3:abc[1][1][2],
														answer4:abc[1][1][3]
											         }]
											}],
								"question2":[{
											question: abc[2][0],
											"answers": [{											
											answer1:abc[2][1][0],
											answer2:abc[2][1][1],
											answer3:abc[2][1][2],
											answer4:abc[2][1][3]
											}]
											}],
								"question3":[{
									question:abc[3][0],
									"answers":[{
											answer1:abc[3][1][0],
											answer2:abc[3][1][1],
											answer3:abc[3][1][2],
											answer4:abc[3][1][3],
											}]
											}],
								"question4":[{
									question:abc[4][0],
									"answers":[{
											answer1:abc[4][1][0],
											answer2:abc[4][1][1],
											answer3:abc[4][1][2],
											answer4:abc[4][1][3]
											}]
											}],
								"question5":[{
									question:abc[5][0],
									"answers":[{
											answer1:abc[5][1][0],
											answer2:abc[5][1][1],
											answer3:abc[5][1][2],
											answer4:abc[5][1][3]
											}]
											}],
								"question6":[{
									question:abc[6][0],
									"answers":[{
											answer1:abc[6][1][0],
											answer2:abc[6][1][1],
											answer3:abc[6][1][2],
											answer4:abc[6][1][3]
											}]
											}]
								}]

						},(err,data)=>{
							const mydata={
								data:data,
								error:false,
								message:"Quiz Data"
							}
						res.send(abc)
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