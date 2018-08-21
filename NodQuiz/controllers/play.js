	let quizModel = require('../models/quiz');
	exports.getQuiz = (req, res)=>
	{
		try{			
			quizModel.find()
			.then((result)=>{
				// console.log(result.quizName[0].quizName);
				res.send(result);
			});			
		}catch(err){
			throw err;
		}
	}