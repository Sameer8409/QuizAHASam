let quizModel = require('../models/quiz');
// var async = require('async');
exports.getQuiz = (req, res)=>
{
	try{
		
		quizModel.find()
		.then((result)=>{
			// console.log(result.quizName[0].question2[0].answers[0].answer2);
			// console.log(result.quizName[0].quizName);
			res.send(result);
		}
			);
		
	}catch(err){
		throw err;
	}
}