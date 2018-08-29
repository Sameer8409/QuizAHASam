	let quizModel = require('../models/quiz');
	exports.updateQuiz = (req, res) => {
		let quizId=req.body.quiz_id;
		console.log(req.body.name);
			quizModel.update({_id:quizId,},
				{$set:{name:req.body.name, questions:req.body.questions, options:req.body.options}
			})
			.then((result)=>{
				console.log(result);
				res.send(result);
			})
			.catch((err) => {
				console.log(err);
				res.send(err);
			});
		}
