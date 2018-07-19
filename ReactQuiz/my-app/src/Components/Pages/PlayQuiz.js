import React, {Component} from 'react'; 
import axios from 'axios';
import Header from '../../Components/Include/Header.js';
import Style from "../../css/Style.css";
import quiz from '../Images/quiz6.jpg';
export default class PlayQuiz extends Component{
    constructor(props){
        super(props);
        this.state={
            quizName: [],
            question: [],
            answer1: [],
            answer2: [],
            answer3: [],
            answer4: [],
            answer5: [],
            answer6: [],
            quiz: '',
            actual: [],
            userans: [],
            x: '',
            name: []


            }
        }

    handleRadioChange = (event) => {
        this.setState({
            a1: event.currentTarget.value
            })
        };
    handleRadioChange1 = (event) => {
        this.setState({
            a2: event.currentTarget.value
            })
        };
    handleRadioChange2 = (event) => {
        this.setState({
            a3: event.currentTarget.value
            })
        };
    handleRadioChange3= (event) => {
        this.setState({
        a4: event.currentTarget.value
        })
    };
    handleRadioChange4= (event) => {
        this.setState({
            a5: event.currentTarget.value
        })
    };
    handleRadioChange5= (event) => {
        this.setState({
            a6: event.currentTarget.value
        });
    };

    componentDidMount(){
        if(this.props.location.state==undefined)
        {
            this.props.history.push("/");
        }
        else{
        let x=[];
        x.push(this.props.location.state[0]);
        x.push(this.props.location.state[1]);
        if(x[1]==undefined)
        {
            this.props.history.push("/");
        }
        
        var self=this;
        axios.post('http://localhost:5000/api/getQuiz',{})
            .then(function(response){
                let data = response.data;
                let getQuiz = [];
                let getQuestion = [];
                let getanswer1 = [];
                let getanswer2 = [];
                let getanswer3 = [];
                let getanswer4 = [];
                let getanswer5 = [];
                let getanswer6 = [];
                let q_no;
                let ran;

                let xi = Math.round(Math.random());

                let qno=x[0];
                self.setState({
                    q_no: qno
                });

                    getanswer1.push(data[self.state.q_no].quizName[0].question1[0].answers[0].answer1);
                    getanswer1.push(data[self.state.q_no].quizName[0].question1[0].answers[0].answer2);
                    getanswer1.push(data[self.state.q_no].quizName[0].question1[0].answers[0].answer3);
                    getanswer1.push(data[self.state.q_no].quizName[0].question1[0].answers[0].answer4);
                    
                    getanswer2.push(data[self.state.q_no].quizName[0].question2[0].answers[0].answer1);
                    getanswer2.push(data[self.state.q_no].quizName[0].question2[0].answers[0].answer2);
                    getanswer2.push(data[self.state.q_no].quizName[0].question2[0].answers[0].answer3);
                    getanswer2.push(data[self.state.q_no].quizName[0].question2[0].answers[0].answer4);
                    
                    getanswer3.push(data[self.state.q_no].quizName[0].question3[0].answers[0].answer1);
                    getanswer3.push(data[self.state.q_no].quizName[0].question3[0].answers[0].answer2);
                    getanswer3.push(data[self.state.q_no].quizName[0].question3[0].answers[0].answer3);
                    getanswer3.push(data[self.state.q_no].quizName[0].question3[0].answers[0].answer4);
                    
                    getanswer4.push(data[self.state.q_no].quizName[0].question4[0].answers[0].answer1);
                    getanswer4.push(data[self.state.q_no].quizName[0].question4[0].answers[0].answer2);
                    getanswer4.push(data[self.state.q_no].quizName[0].question4[0].answers[0].answer3);
                    getanswer4.push(data[self.state.q_no].quizName[0].question4[0].answers[0].answer4);
                    
                    getanswer5.push(data[self.state.q_no].quizName[0].question5[0].answers[0].answer1);
                    getanswer5.push(data[self.state.q_no].quizName[0].question5[0].answers[0].answer2);
                    getanswer5.push(data[self.state.q_no].quizName[0].question5[0].answers[0].answer3);
                    getanswer5.push(data[self.state.q_no].quizName[0].question5[0].answers[0].answer4);
                    
                    getanswer6.push(data[self.state.q_no].quizName[0].question6[0].answers[0].answer1);
                    getanswer6.push(data[self.state.q_no].quizName[0].question6[0].answers[0].answer2);
                    getanswer6.push(data[self.state.q_no].quizName[0].question6[0].answers[0].answer3);
                    getanswer6.push(data[self.state.q_no].quizName[0].question6[0].answers[0].answer4);
                
                    getQuestion.push(data[self.state.q_no].quizName[0].question1[0].question);
                    getQuestion.push(data[self.state.q_no].quizName[0].question2[0].question);
                    getQuestion.push(data[self.state.q_no].quizName[0].question3[0].question);
                    getQuestion.push(data[self.state.q_no].quizName[0].question4[0].question);
                    getQuestion.push(data[self.state.q_no].quizName[0].question5[0].question);
                    getQuestion.push(data[self.state.q_no].quizName[0].question6[0].question);
                
                    data.forEach((data) => {
                        getQuiz.push(data.quizName[0].quizName);
                    });
                
                self.setState({
                    quizName: getQuiz,
                    question: getQuestion,
                    answer1 : getanswer1,
                    answer2 : getanswer2,
                    answer3 : getanswer3,
                    answer4 : getanswer4,
                    answer5 : getanswer5,
                    answer6 : getanswer6,
                    x:xi
                });
            })
}
        }

    handleform =(event) => {
        let ans = [];
        let currectAns = [];
        var count = 0;
        ans.push(this.state.a1);
        ans.push(this.state.a2);
        ans.push(this.state.a3);
        ans.push(this.state.a4);
        ans.push(this.state.a5);
        ans.push(this.state.a6);
        currectAns.push(this.state.answer1[3]);
        currectAns.push(this.state.answer2[3]);
        currectAns.push(this.state.answer3[3]);
        currectAns.push(this.state.answer4[3]);
        currectAns.push(this.state.answer5[3]);
        currectAns.push(this.state.answer6[3]);
        console.log("User", ans);
        console.log("Actual", currectAns);
    
        for(let i = 0; i < 6;i++)
        {
        if(ans[i] === currectAns[i])
        count = count+10;
        }

    // this.setState({
    //     userans:ans,
    //     actual: currectAns
    // });

        let gameDetails=[];
        gameDetails[0]=currectAns;
        gameDetails[1]=ans;
        gameDetails[2]=count;
        this.props.history.push('/Result',gameDetails);
    
}

render(){
    var resultRows
//console.log("Randam", this.state.random);
// console.log(this.state.answer1);
// console.log("Hellow", this.state.q_no);
    let list = [];
    for(let i=0; i<this.state.quizName.length;i++)
    {
     list[i] = this.state.quizName[i];
    }
 let q = [];
 for(let i = 0; i < 6; i++)
 {
  q[i] = this.state.question[i];
 }
 let ans1 = [];
 let ans2 = [];
 let ans3 = [];
 let ans4 = [];
 let ans5 = [];
 let ans6 = [];
 let ans11 = [];
 let ans22 = [];
 let ans33 = [];
 let ans44 = [];
 let ans55 = [];
 let ans66 = [];
 

for(let i = 0; i<4; i++)
{
    ans1[i] = this.state.answer1[i];
    ans2[i] = this.state.answer2[i];
    ans3[i] = this.state.answer3[i];
    ans4[i] = this.state.answer4[i];
    ans5[i] = this.state.answer5[i];
    ans6[i] = this.state.answer6[i];
}



let x = this.state.x;
 
 for(let j = 0; j<4;j++ )
  { console.log(x);

    if(x>3){
        x=0;
    }
  ans11[j] = ans1[x];
  ans22[j] = ans2[x];
  ans33[j] = ans3[x];
  ans44[j] = ans4[x];
  ans55[j] = ans5[x];
  ans66[j] = ans6[x];

  x++;
}
  console.log("ans",ans11);

	return(
            <div className="container">
                <Header/>

                <div className="row">
                    
                    <div className="col-md-4">
                    <div className="PlayQuiz">
                    <img src={quiz}/>
                    </div>
                    </div>
                    <div className="col-md-8">
                        <form method="post" name="handleform" onSubmit={this.handleform}>
                            <div className="PlayQuiz">
                                <label><h2>Quiz Aaha!</h2></label>
                                <label className="form-control"  ref="quizName" name="Quizname" ><strong>{list[this.state.q_no]} ==>></strong></label>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block"> &nbsp; </p>
                                    <label className="form-control" ref="question1" name="questioninsert">Q1. {q[0]}</label>
                                </div>
                            </div>
                            <div className="question1">
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[0]}/> {ans11[0]}
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[1]}/> {ans11[1]}
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[2]} /> {ans11[2]}
                                    </div>
                                    <div className="col-md-3">    
                                        <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[3]} /> {ans11[3]}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">&nbsp; </p>
                                    <label className="form-control" ref="question1" name="questioninsert">Q2. {q[1]}</label>
                                </div>
                            </div>
                            <div className="question2">
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[1]} /> {ans22[1]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[2]} /> {ans22[2]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[3]} /> {ans22[3]} 
                                    </div>
                                    <div className="col-md-3">    
                                        <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[0]} /> {ans22[0]} 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">&nbsp; </p>
                                    <label className="form-control" ref="question1" name="questioninsert">Q3. {q[2]}</label>
                                </div>
                            </div>
                            <div className="question3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[3]} /> {ans33[3]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[2]} /> {ans33[2]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[1]} /> {ans33[1]} 
                                    </div>
                                    <div className="col-md-3">    
                                        <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[0]} /> {ans33[0]} 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">&nbsp; </p>
                                    <label className="form-control" ref="question1" name="questioninsert">Q4. {q[3]}</label>
                                </div>
                            </div>
                            <div className="question4">
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[2]} /> {ans44[2]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[1]} /> {ans44[1]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[3]} /> {ans44[3]} 
                                    </div>
                                    <div className="col-md-3">    
                                        <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[0]} /> {ans44[0]} 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">&nbsp; </p>
                                    <label className="form-control" ref="question1" name="questioninsert">Q5. {q[4]}</label>
                                </div>
                            </div>
                            <div className="question">
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="radio" name="answer5" onChange={this.handleRadioChange4} value={ans55[0]} /> {ans55[0]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer5" onChange={this.handleRadioChange4} value={ans55[1]} /> {ans55[1]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer5" onChange={this.handleRadioChange4} value={ans55[2]} /> {ans55[2]} 
                                    </div>
                                    <div className="col-md-3">    
                                        <input type="radio" className="abc" name="answer5" onChange={this.handleRadioChange4} value={ans55[3]} /> {ans55[3]}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">&nbsp; </p>
                                    <label className="form-control" ref="question1" name="questioninsert">Q6. {q[5]}</label>
                                </div>
                            </div>
                            <div className="question">
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[2]} /> {ans66[2]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[0]} /> {ans66[0]} 
                                    </div>
                                    <div className="col-md-3">
                                        <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[1]} /> {ans66[1]} 
                                    </div>
                                    <div className="col-md-3">    
                                        <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[3]} /> {ans66[3]} 
                                    </div>
                                </div>
                            </div>
                            <div className="submit-game">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block" >Submit</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="reset" className="btn btn-primary btn-lg btn-block"> Reset </button>
                                    </div>
                                </div>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        );
	}
}
