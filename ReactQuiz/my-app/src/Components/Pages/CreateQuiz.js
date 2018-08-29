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
            name:'',
            questions: [{ name: '' }],
            options:[{name:''}]
        }
    }
    
    componentWillMount(){
        if(localStorage.mydata != "admin@gmail.com")
       {
        this.props.history.push("/")
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
        this.handleAddOption(idx);
        const newOptions = this.state.options.map((options, aidx) => {
            if (idx !== aidx) return options;
            return { ...options, name: evt.target.value };
        });
        this.setState({ options: newOptions });
    }
    
    handleSubmit = (evt) => {
        //evt.preventDefault()
        const { name, questions, options } = this.state;
        const x = this.state;
        console.log(this.state);
        var self = this;
        axios.post('http://localhost:5000/api/createQuiz', {
            name:this.state.name,
            questions:this.state.questions,
            options:this.state.options
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

    handleAddOption = () => {
        this.setState({
            options:this.state.options.concat([{name:''}])
         });
    }
    handleAddQuestion = () => {
        this.setState({
            questions: this.state.questions.concat([{ name: '' }]),
        });
    }

    handleRemoveQuestion = (idx) => () => {
        this.setState({
            questions: this.state.questions.filter((s, qidx) => idx !== qidx)
        });
    }
    click=(event)=>{
        event.preventDefault();
        this.handlename();
        if(this.state.quizName)
        this.submit();
    }
    submit = (event) => {
        event.preventDefault();
        if(this.state.name==="")
        {
            return false;
        }
        //this.handleNameChange();
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to submit this form to create Quiz.',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => this.handleSubmit()
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
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-sm-3">
                        <LeftBar/>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <form onSubmit={this.submit}>
                            <h1>Create Quiz</h1> 
                            <hr/>
                            <input type="text" placeholder="Quiz name" onBlur={this.handleNameChange} />
                            <h4>Questions</h4>
                            {this.state.questions.map((question, idx) => (
                                <div className="question">
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-xs11">      
                                            <input type="text" placeholder={`Question #${idx + 1}`}  onChange={this.handleQuestionChange(idx)} /> 
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-xs-1">
                                            <button type="button" onClick={this.handleRemoveQuestion(idx)} className="small">X</button>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-xs-9">
                                            <input type="text" placeholder={`Currect Ans`} onChange={this.handleOptionChange(4*idx)} onBlur={this.handleAddOption} />
                                        </div> 
                                        <div className="col-md-3 col-sm-6 col-xs-9">
                                            <input type="text" placeholder={`Option`} onChange={this.handleOptionChange(4*idx + 1)} onBlur={this.handleAddOption} />
                                        </div> 
                                        <div className="col-md-3 col-sm-6 col-xs-9">
                                            <input type="text" placeholder={`Option`} onChange={this.handleOptionChange(4*idx + 2)} onBlur={this.handleAddOption}/>
                                        </div> 
                                        <div className="col-md-3 col-sm-6 col-xs-9">
                                            <input type="text" placeholder={`Option`} onChange={this.handleOptionChange(4*idx + 3)} onBlur={this.handleAddOption}/>
                                        </div> 
                                    </div>
                                </div>
                            ))}
                            <button type="button" onClick={this.handleAddQuestion} className="small">Add Question</button>
                            <span id="quiznameverify"/>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        );
	}
}
