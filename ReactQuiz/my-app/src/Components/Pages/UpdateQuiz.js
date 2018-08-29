import axios from 'axios';
import LeftBar from './LeftBar';
import React, {Component} from 'react'; 
import { confirmAlert } from 'react-confirm-alert';
import Header from '../../Components/Include/Header.js';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default class UpdateQuiz extends Component{
    constructor(props){
        super(props);
        this.state={
            totalQuestions:'',
            name:'',
            questions: [{ name: '' }],
            options: [{name:''}]
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
                axios.post('http://localhost:5000/api/getQuiz',{})
                .then(function(response){
                    let data = response.data;
                    let total=data.length;
                    let getQuiz = [];
                    let option=[];
                    let q_no;
                    let qno=x[0];
                    console.log("hLO", data[qno]._id)
                    let quizId=data[qno]._id;
                    self.setState({
                        q_no: qno,
                        quiz_id:quizId
                    });
                        data.forEach((data) => {
                            getQuiz.push(data.name);
                        });
                    
                    self.setState({
                        totalQuestions:total,
                        name: getQuiz[self.state.q_no],
                        questions: data[self.state.q_no].questions,
                        options : data[self.state.q_no].options
                        
                    });
                })
            }
        }
    }
    handleNameChange = (evt) => {
        let name=evt.target.value;
        var regex= /^[a-zA-Z ]{2,30}$/;
        var text="*Quiz name should start with an alphabet and must have atlest two character";
        if(!(name.match(regex))){
            document.getElementById("quiznameverify").innerHTML=text;
            return false;
        }
        else{
            document.getElementById("quiznameverify").innerHTML="";
            this.setState({
                name:name
            })
            return false;
        }
        //this.setState({ name: evt.target.value });
    }
    
    handleQuestionChange = (idx) => (evt) => {
        const newQuestions = this.state.questions.map((questions, qidx) => {
          if (idx !== qidx) return questions;
          return { ...questions, name: evt.target.value };
        });
        this.setState({ questions: newQuestions });
    }

    handleOptionChange = (idx) => (evt) => {
        console.log(idx)
        const newOptions = this.state.options.map((options, aidx) => {
            if (idx !== aidx) return options;
            return { ...options, name: evt.target.value };
        });
        this.setState({ options: newOptions });
    }
    submit = (event) => {
        event.preventDefault();
        if(this.state.name==="")
        {
            return false
        }
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
        title: 'Confirm to reset',
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
    var self = this;
        axios.post('http://localhost:5000/api/UpdateQuiz', {
            name:this.state.name,
            questions:this.state.questions,
            options:this.state.options,
            quiz_id:this.state.quiz_id
          })
        .then(function(response){
            console.log(response);
            self.props.history.push('/AdminLogin', "4");
        })
    }


    render(){
        var a = [];
        for (let i=0;i<this.state.options.length;i++)
            a[i]=this.state.options[i].name;
        console.log("fghj",a[0])
        let list = this.state.name;
     for(let i=0; i < this.state.questions.length; i++){
        let idx=i;
         var update=this.state.questions.map((question, idx) => (
            <div className="question">
                <div className="row">
                    <div className="col-md-11 col-sm-11 col-xs11">      
                        <input type="text" Value={this.state.questions[idx].name} onChange={this.handleQuestionChange(idx)} /> 
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-9">
                        <input type="text" Value={a[4*idx+0 ]} onChange={this.handleOptionChange(4*idx)} onBlur={this.handleOptionChange} />
                    </div> 
                    <div className="col-md-3 col-sm-6 col-xs-9">
                        <input type="text" Value={a[4*idx+1]} onChange={this.handleOptionChange(4*idx + 1)} onBlur={this.handleOptionChange} />
                    </div> 
                    <div className="col-md-3 col-sm-6 col-xs-9">
                        <input type="text" Value={a[4*idx+2]} onChange={this.handleOptionChange(4*idx + 2)} onBlur={this.handleOptionChange}/>
                    </div> 
                    <div className="col-md-3 col-sm-6 col-xs-9">
                        <input type="text" Value={a[4*idx+3]} onChange={this.handleOptionChange(4*idx + 3)} onBlur={this.handleOptionChange}/>
                    </div>
                </div>
            </div>
        ))
    }
    return(
        <div className="container-fluid">
            <Header/>
            <div className="updateQuiz">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-sm-3">
                    <LeftBar/>
                    </div>
                    <div className="col-md-9 col-sm-9 col-sm-9">
                        <form onSubmit={this.submit}>
                            <h1>Update Quiz</h1> 
                            <hr/>
                            <input type="text" Value={this.state.name} onBlur={this.handleNameChange} />
                            <h4>Questions</h4>
                            {update}
                            <span id="quiznameverify"/>
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
