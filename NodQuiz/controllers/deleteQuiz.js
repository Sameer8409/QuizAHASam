let quizModel = require('../models/quiz');
exports.deleteQuiz = (req, res) => {
	quizModel.remove({quizName:req.body.quizName})
	.then((result)=>{
		 
		res.send(result);
	})
	.catch((err) => {
		console.log(err);
		res.send(err);
	})
}