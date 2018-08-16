import axios from 'axios';
import LeftBar from './LeftBar';
import React, {Component} from 'react'; 
import Style from "../../css/Style.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Header from '../../Components/Include/Header.js';
export default class UpdateQuiz extends Component{
    constructor(props){
        super(props);
        this.state={
            quizName: [],
            questions: [],
            answer1: [],
            answer2: [],
            answer3: [],
            answer4: [],
            answer5: [],
            answer6: [],
            quiz: '',
            actual: [],
            userans: [],
            quiz_id:'',
            x: '',
            name: [],
            quizName:'',
            question1:'',
            question2:'',
            question3:'',
            question4:'',
            question5:'',
            question6:'',
            correctAns1:'',
            correctAns2:'',
            correctAns3:'',
            correctAns4:'',
            correctAns5:'',
            correctAns6:'',
            ans11:'',
            ans12:'',
            ans13:'',
            ans21:'',
            ans22:'',
            ans23:'',
            ans31:'',
            ans32:'',
            ans33:'',
            ans41:'',
            ans42:'',
            ans43:'',
            ans51:'',
            ans52:'',
            ans53:''


            }
        }

    
    componentWillMount(){
        if(localStorage.mydata != "admin@gmail.com")
        {
            this.props.history.push("/");
        }
        else{
            if(this.props.location.state === undefined)
            {
                this.props.history.push("/Dashboard");
            }
            else{
                let x=[];
                x.push(this.props.location.state[0]);
                x.push(this.props.location.state[1]);
                if(x[1]==undefined)
                {
                    this.props.history.push("/Dashboard");
                }
                
                var self=this;
                axios.post('http://sameer-intern.hestalabs.com/api/getQuiz',{})
                    .then(function(response){
                        let data = response.data;
                        
                        let getQuiz = [];
                        let q_no;
                        let qno=x[0];
                        let quizId=data[qno]._id;
                        self.setState({
                            q_no: qno,
                            quiz_id:quizId
                        });
                            data.forEach((data) => {
                                getQuiz.push(data.quizName);
                            });
                        
                        self.setState({
                            quizName: getQuiz,
                            questions: data[self.state.q_no].questions,
                            answer1 : data[self.state.q_no].answer1,
                            answer2 : data[self.state.q_no].answer2,
                            answer3 : data[self.state.q_no].answer3,
                            answer4 : data[self.state.q_no].answer4,
                            answer5 : data[self.state.q_no].answer5,
                            answer6 : data[self.state.q_no].answer6,
                        
                        });
                    })
                }
            }
        }
submit = (event) => {
    event.preventDefault();
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to submit all the changes and update the Quiz.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.handleform()
        },
        {
          label: 'No',
          onClick: () => ""
        }
      ]
    })
  };
  reset = (event) => {
    event.preventDefault();
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this? All changes will be reset.',
      buttons: [
        {
          label: 'Yes',
          onClick: (event) => this.props.history.push("/QuizManagement", this.props.location.state) 
        },
        {
          label: 'No',
          onClick: () => ""
        }
      ]
    })
  };
    
handleform = (event) => {
        this.quiz_id=this.state.quiz_id;
        this.quizName=this.refs.quizName.value;
        this.question1=this.refs.question1.value;
        this.correctAns1=this.refs.correctAns1.value;
        this.ans11=this.refs.ans11.value;
        this.ans12=this.refs.ans12.value;
        this.ans13=this.refs.ans13.value;
        this.question2=this.refs.question2.value;
        this.correctAns2=this.refs.correctAns2.value;
        this.ans21=this.refs.ans21.value;
        this.ans22=this.refs.ans22.value;
        this.ans23=this.refs.ans23.value;
        this.question3=this.refs.question3.value;
        this.correctAns3=this.refs.correctAns3.value;
        this.ans31=this.refs.ans31.value;
        this.ans32=this.refs.ans32.value;
        this.ans33=this.refs.ans33.value;
        this.question4=this.refs.question4.value;
        this.correctAns4=this.refs.correctAns4.value;
        this.ans41=this.refs.ans41.value;
        this.ans42=this.refs.ans42.value;
        this.ans43=this.refs.ans43.value;
        this.question5=this.refs.question5.value;
        this.correctAns5=this.refs.correctAns5.value;
        this.ans51=this.refs.ans51.value;
        this.ans52=this.refs.ans52.value;
        this.ans53=this.refs.ans53.value;
        this.question6=this.refs.question6.value;
        this.correctAns6=this.refs.correctAns6.value;
        this.ans61=this.refs.ans61.value;
        this.ans62=this.refs.ans62.value;
        this.ans63=this.refs.ans63.value;
    var self = this;
        axios.post('http://sameer-intern.hestalabs.com/api/UpdateQuiz', {
            quizName:this.quizName,
            question1:this.question1,
            correctAns1:this.correctAns1,
            ans11:this.ans11,
            ans12:this.ans12,
            ans13:this.ans13,
            question2:this.question2,
            correctAns2:this.correctAns2,
            ans21:this.ans21,
            ans22:this.ans22,
            ans23:this.ans23,
            question3:this.question3,
            correctAns3:this.correctAns3,
            ans31:this.ans31,
            ans32:this.ans32,
            ans33:this.ans33,
            question4:this.question4,
            correctAns4:this.correctAns4,
            ans41:this.ans41,
            ans42:this.ans42,
            ans43:this.ans43,
            question5:this.question5,
            correctAns5:this.correctAns5,
            ans51:this.ans51,
            ans52:this.ans52,
            ans53:this.ans53,
            question6:this.question6,
            correctAns6:this.correctAns6,
            ans61:this.ans61,
            ans62:this.ans62,
            ans63:this.ans63,
            quiz_id:this.quiz_id
          })
        .then(function(response){
            console.log(response);
            self.props.history.push('/AdminLogin', "4");
        })
}


render(){
    var resultRows
    let list = this.state.quizName;
 let q = [];
 for(let i = 0; i < 6; i++)
 {
  q[i] = this.state.questions[i];
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
    ans11[i] = this.state.answer1[i];
    ans22[i] = this.state.answer2[i];
    ans33[i] = this.state.answer3[i];
    ans44[i] = this.state.answer4[i];
    ans55[i] = this.state.answer5[i];
    ans66[i] = this.state.answer6[i];
}

    return(
            <div className="container-fluid">
                <Header/>
                <div className="updateQuiz">
                <div className="row">
                    <div className="col-md-3">
                    <LeftBar/>
                    </div>
                    <div className="col-md-9">
                        <form method="post" name="handleform" onSubmit={this.submit}>
                            <div className="PlayQuiz">
                                <label><h2>Update Quiz</h2></label><br/>
                            <div className = "Update">
                                <label>Quiz Name</label>
                                <div className="row">
                                    <div className="col-md-12">
                                    <input className="form-control" ref="quizName" name="quizName" Value={list[this.state.q_no]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Update">    
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">Question1 </p>
                                    <input type="text" className="form-control" ref="question1" name="questionupdate" Value={q[0]}/>
                                </div>
                            </div>
                            <div className="question1">
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="help-block">correct Ans </p>
                                        <input type="text" className="form-control" name="answer1" ref="correctAns1" Value={ans11[0]}/> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer1" ref="ans11" Value={ans11[1]}/> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer1" ref="ans12" Value={ans11[2]} />
                                    </div>
                                    <div className="col-md-3">    
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer1" ref="ans13" Value={ans11[3]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Update">
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">Question2 </p>
                                    <input type = "text" className="form-control" ref="question2" name="questioninsert" Value={q[1]}/>
                                </div>
                            </div>
                            <div className="question2">
                                <div className="row">
                                    <div className="col-md-3">
                                    <p className="help-block">correct Ans </p>
                                        <input type="text" className="form-control" name="answer2" ref="correctAns2" Value={ans22[0]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer2" ref="ans21" Value={ans22[1]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer2" ref="ans22" Value={ans22[2]} /> 
                                    </div>
                                    <div className="col-md-3">    
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer2" ref="ans23" Value={ans22[3]} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "Update">
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">Question3 </p>
                                    <input type = "text" className="form-control" ref="question3" name="questioninsert" Value = {q[2]}/>
                                </div>
                            </div>
                            <div className="question3">
                                <div className="row">
                                    <div className="col-md-3">
                                    <p className="help-block">correct Ans </p>
                                        <input type="text" className="form-control" name="answer3" ref="correctAns3" Value={ans33[0]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer3" ref="ans31" Value={ans33[1]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer3" ref="ans32" Value={ans33[2]} /> 
                                    </div>
                                    <div className="col-md-3">    
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer3" ref="ans33" Value={ans33[3]} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "Update">
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">question4 </p>
                                    <input type = "text" className="form-control" ref="question4" name="questioninsert" Value = {q[3]} />
                                </div>
                            </div>
                            <div className="question4">
                                <div className="row">
                                    <div className="col-md-3">
                                    <p className="help-block">correct Ans </p>
                                        <input type="text" className="form-control" name="answer4" ref="correctAns4" Value={ans44[0]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer4" ref="ans41" Value={ans44[1]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer4" ref="ans42" Value={ans44[2]} /> 
                                    </div>
                                    <div className="col-md-3">    
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer4" ref="ans43" Value={ans44[3]} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "Update">
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">Question5; </p>
                                    <input type = "text" className="form-control" ref="question5" name="questioninsert" Value = {q[4]} />                                </div>
                            </div>
                            <div className="question">
                                <div className="row">
                                    <div className="col-md-3">
                                    <p className="help-block">correct Ans </p>
                                        <input type="text" className="form-control" name="answer5" ref="correctAns5" Value={ans55[0]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer5" ref="ans51" Value={ans55[1]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer5" ref="ans52" Value={ans55[2]} /> 
                                    </div>
                                    <div className="col-md-3">    
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer5" ref="ans53" Value={ans55[3]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "Update">
                            <div className="col-md-12">
                                <div className="row">
                                    <p className="help-block">Question 6; </p>
                                    <input type = "text" className="form-control" ref="question6" name="questioninsert" Value = {q[5]}/>
                                </div>
                            </div>
                            <div className="question">
                                <div className="row">
                                    <div className="col-md-3">
                                    <p className="help-block">correct Ans </p>
                                        <input type="text" className="form-control" name="answer6" ref="correctAns6" Value={ans66[0]} /> 
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer6" ref="ans61" Value={ans66[1]} />
                                    </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer6" ref="ans62" Value={ans66[2]} /> 
                                    </div>
                                    <div className="col-md-3">    
                                    <p className="help-block">Incorrect Ans </p>
                                        <input type="text" className="form-control" name="answer6" ref="ans63" Value={ans66[3]} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="submit-game">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type = "submit" className="btn btn-primary btn-lg btn-block" >Update Now</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" onClick={this.reset} className="btn btn-primary btn-lg btn-block"> Don't want to update (Go Back) </button>
                                    </div>
                                </div>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
