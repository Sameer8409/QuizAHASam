	let quizModel = require('../models/quiz');
	exports.deleteQuiz = (req, res) => {
		quizModel.remove({name:req.body.name})
		.then((result)=>{
			 
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		})
	}