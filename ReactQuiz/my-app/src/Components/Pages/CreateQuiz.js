import axios from 'axios';
import LeftBar from './LeftBar'; 
import React, {Component} from 'react'; 
import { confirmAlert } from 'react-confirm-alert';
import Header from '../../Components/Include/Header.js';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default class CreateQuiz extends Component{
    constructor(props){
        super(props);
        this.state={
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
        this.props.history.push("/")
       }
    }
    

    
    handleform=(event)=>{
        //event.preventDefault();
        if(this.state.quizName==="")
        {
            return false;
        }
        this.quizName=this.refs.quizName.value;
        this.question1=this.refs.question1.value;
        this.question2=this.refs.question2.value;
        this.question3=this.refs.question3.value;
        this.question4=this.refs.question4.value;
        this.question5=this.refs.question5.value;
        this.question6=this.refs.question6.value;
        this.correctAns1=this.refs.correctAns1.value;
        this.correctAns2=this.refs.correctAns2.value;
        this.correctAns3=this.refs.correctAns3.value;
        this.correctAns4=this.refs.correctAns4.value;
        this.correctAns5=this.refs.correctAns5.value;
        this.correctAns6=this.refs.correctAns6.value;
        this.ans11=this.refs.ans11.value;
        this.ans12=this.refs.ans12.value;
        this.ans13=this.refs.ans13.value;
        this.ans21=this.refs.ans21.value;
        this.ans22=this.refs.ans22.value;
        this.ans23=this.refs.ans23.value;
        this.ans31=this.refs.ans31.value;
        this.ans32=this.refs.ans32.value;
        this.ans33=this.refs.ans33.value;
        this.ans41=this.refs.ans41.value;
        this.ans42=this.refs.ans42.value;
        this.ans43=this.refs.ans43.value;
        this.ans51=this.refs.ans51.value;
        this.ans52=this.refs.ans52.value;
        this.ans53=this.refs.ans53.value;
        this.ans61=this.refs.ans61.value;
        this.ans62=this.refs.ans62.value;
        this.ans63=this.refs.ans63.value;
        var self = this;
        axios.post('http://localhost:5000/api/createQuiz', {
            quizName:this.quizName,
            question1:this.question1,
            question2:this.question2,
            question3:this.question3,
            question4:this.question4,
            question5:this.question5,
            question6:this.question6,
            correctAns1:this.correctAns1,
            correctAns2:this.correctAns2,
            correctAns3:this.correctAns3,
            correctAns4:this.correctAns4,
            correctAns5:this.correctAns5,
            correctAns6:this.correctAns6,
            ans11:this.ans11,
            ans12:this.ans12,
            ans13:this.ans13,
            ans21:this.ans21,
            ans22:this.ans22,
            ans23:this.ans23,
            ans31:this.ans31,
            ans32:this.ans32,
            ans33:this.ans33,
            ans41:this.ans41,
            ans42:this.ans42,
            ans43:this.ans43,
            ans51:this.ans51,
            ans52:this.ans52,
            ans53:this.ans53,
            ans61:this.ans61,
            ans62:this.ans62,
            ans63:this.ans63
        })
        .then(function (response) {
            let text="This quiz is already exists";
            if(response.data==="already exists")
            {
                document.getElementById("quiznameverify").innerHTML=text;
                return false;
            }
            else{
            self.props.history.push('/QuizManagement', "4");
        }
        })
        .catch(function(err){
            console.log("error");    
        });
        
    }
    handlename=(event)=>{
        //event.preventDefault();
        let name = this.refs.quizName.value;
        // this.name=this.refs.name.value;
        var regex= /^[a-zA-Z ]{2,30}$/;
        var text="*Quiz name should start with an alphabet and must have atlest two character";
        if(!(name.match(regex))){
            document.getElementById("quiznameverify").innerHTML=text;
            return false;
        }
        else{
            document.getElementById("quiznameverify").innerHTML="";
            this.setState({
                quizName:name
            })
            return false;
        }
        
    }
    click=(event)=>{
        event.preventDefault();
        this.handlename();
        if(this.state.quizName)
        this.submit();
    }
    submit = (event) => {
    this.handlename();
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to submit this form to create Quiz.',
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
    this.handlename();
    confirmAlert({
      title: 'Confirm to reset',
      message: 'Are you sure to do this? All changes will be reset. ',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.history.push("/AdminLogin", "3")
        },
        {
          label: 'No',
          onClick: () => ""
        }
      ]
    })
  };

render(){
	return(
            <div className="createQuiz">
                <Header/>
                <div className="row">
                <div className="createQuiz">
                    <div className="col-md-3">
                        <LeftBar/>
                    </div>
                    <div className="col-md-9">
                        <form method="post" onSubmit = {this.click}>
                            <div className="form-group">
                            <h1>Create Quiz </h1>
                            <hr/>
                                <label>Quiz Name</label>
                                <input className="form-control" type="text" ref="quizName" name="Quizname" onBlur={this.handlename} />
                                <p className="help-block">Example Movies</p>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="help-block">Question1 </p>
                                    <input type="text" className="form-control" ref="question1" name="questioninsert"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className="help-block">Correct answer</p>
                                    <input className="form-control" type="text" ref="correctAns1" name="correctAns" />
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 1</p>
                                    <input className="form-control" type="text" ref="ans11" name="ans1"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 2</p>
                                    <input className="form-control" type="text" ref="ans12" name="ans2"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 3</p>
                                    <input className="form-control" type="text" ref="ans13" name="ans3"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="help-block">Question 2</p>
                                    <input type="text" className="form-control" ref="question2" name="questioninsert"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className="help-block">Correct answer</p>
                                    <input className="form-control" type="text" ref="correctAns2" name="correctAns"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 1</p>
                                    <input className="form-control" type="text" ref="ans21" name="ans1"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 2</p>
                                    <input className="form-control" type="text" ref="ans22" name="ans2"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 3</p>
                                    <input className="form-control" type="text" ref="ans23" name="ans3"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="help-block">Question 3</p>
                                    <input type="text" className="form-control" ref="question3" name="questioninsert"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className="help-block">Correct answer</p>
                                    <input className="form-control" type="text" ref="correctAns3" name="correctAns"/>
                                </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 1</p>
                                    <input className="form-control" type="text" ref="ans31" name="ans1"/>
                                </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 2</p>
                                    <input className="form-control" type="text" ref="ans32" name="ans2"/>
                                </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 3</p>
                                    <input className="form-control" type="text" ref="ans33" name="ans3"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="help-block">Question 4</p>
                                    <input type="text" className="form-control" ref="question4" name="questioninsert"/>
                                </div>  
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className="help-block">Correct answer</p>
                                    <input className="form-control" type="text" ref="correctAns4" name="correctAns"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 1</p>
                                    <input className="form-control" type="text" ref="ans41" name="ans1"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 2</p>
                                    <input className="form-control" type="text" ref="ans42" name="ans2"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 3</p>
                                    <input className="form-control" type="text" ref="ans43" name="ans3"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="help-block">Question 5</p>
                                    <input type="text" className="form-control" ref="question5" name="questioninsert"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className="help-block">Correct answer</p>
                                    <input className="form-control" type="text" ref="correctAns5" name="correctAns"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 1</p>
                                    <input className="form-control" type="text" ref="ans51" name="ans1"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 2</p>
                                    <input className="form-control" type="text" ref="ans52" name="ans2"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 3</p>
                                    <input className="form-control" type="text" ref="ans53" name="ans3"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="help-block">Question 6</p>
                                    <input type="text" className="form-control" ref="question6" name="questioninsert"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className="help-block">Correct answer</p>
                                    <input className="form-control" type="text" ref="correctAns6" name="correctAns"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 1</p>
                                    <input className="form-control" type="text" ref="ans61" name="ans1"/>
                                </div>
                                <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 2</p>
                                    <input className="form-control" type="text" ref="ans62" name="ans2"/>
                                </div>
                                    <div className="col-md-3">
                                    <p className="help-block">Incorrect answer 3</p>
                                    <input className="form-control" type="text" ref="ans63" name="ans3"/>
                                </div>
                            </div>
                            <span id="quiznameverify"></span>
                            <div className="submit-game">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block" >Submit</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" onClick={this.reset} className="btn btn-primary btn-lg btn-block"> Reset </button>
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
