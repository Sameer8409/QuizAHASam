let quizModel = require('../models/quiz');
exports.updateQuiz = (req, res) => {
	let quizId=req.body.quiz_id;
	let quizName1=req.body.quizName;
	let answers1 = [];
	let answers2 = [];
	let answers3 = [];
	let answers4 = [];
	let answers5 = [];
	let answers6 = [];
	let question = [];
	question[0]=req.body.question1;
	question[1]=req.body.question2;
	question[2]=req.body.question3;
	question[3]=req.body.question4;
	question[4]=req.body.question5;
	question[5]=req.body.question6;
	answers1[0] = req.body.correctAns1;
	answers1[1] = req.body.ans11;
	answers1[2] = req.body.ans12;
	answers1[3] = req.body.ans13;
	answers2[0] = req.body.correctAns2;
	answers2[1] = req.body.ans21;
	answers2[2] = req.body.ans22;
	answers2[3] = req.body.ans23;
	answers3[0] = req.body.correctAns3;
	answers3[1] = req.body.ans31;
	answers3[2] = req.body.ans32;
	answers3[3] = req.body.ans33;
	answers4[0] = req.body.correctAns4;
	answers4[1] = req.body.ans41;
	answers4[2] = req.body.ans42;
	answers4[3] = req.body.ans43;
	answers5[0] = req.body.correctAns5;
	answers5[1] = req.body.ans51;
	answers5[2] = req.body.ans52;
	answers5[3] = req.body.ans53;
	answers6[0] = req.body.correctAns6;
	answers6[1] = req.body.ans61;
	answers6[2] = req.body.ans62;
	answers6[3] = req.body.ans63;
	console.log(quizName1);
	quizModel.update({_id:quizId,},
		{$set:{quizName:quizName1, questions:question, answer1:answers1, answer2:answers2, answer3:answers3, answer4:answers4, answer5:answers5, answer6:answers6}
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
