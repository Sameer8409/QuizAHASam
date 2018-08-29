import axios from 'axios';
import Slider from "react-slick";
import React, {Component} from 'react'; 
import { confirmAlert } from 'react-confirm-alert';
import Header from '../../Components/Include/Header.js';
import Footer from '../../Components/Include/Footer.js'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
export default class PlayQuiz extends Component{
    constructor(props){
        super(props);
        this.state={
            quizName: [],
            questions: [],
            options: [],
            quiz: '',
            actual: [],
            userans: [],
            x: '',
            ran:'',
            uname: [],
            total_score:''
        }
    }

    submit = (event) => {
        event.preventDefault();
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to submit the Quiz.',
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
                  onClick: (event) => this.props.history.push("/Game", this.props.location.state) 
                },
                {
                  label: 'No',
                  onClick: () => ""
                }
            ]
        })
    };
    componentWillMount(){ 
        console.log("Will",this.props.location.state)
        if(localStorage.mydata === "null" && localStorage.mydata != "admin@gmail.com")
        {
            this.props.history.push("/")
        }
        else{
            if(this.props.location.state===undefined)
            {
                this.props.history.push("/Play")
            }
            else{
        let x=[];
        x.push(this.props.location.state[0]);
        x.push(this.props.location.state[1]);
        x.push(this.props.location.state[2]);
        if(x[0]==undefined)
        {
            this.props.history.push("/Game");
        }
        
        var self=this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/getQuiz',{})
            .then(function(response){
                let data = response.data;
                let getQuiz = [];
                let q_no;
                let ran;
                let xi = Math.round(Math.random());
                let qno=x[0];
                self.setState({
                    q_no: qno
                });
                    data.forEach((data) => {
                        getQuiz.push(data.name);
                });
                self.setState({
                    name: getQuiz[self.state.q_no],
                    questions: data[self.state.q_no].questions,
                    options : data[self.state.q_no].options,
                    ran:xi,
                    x:x,
                    idx:x[2]
                });
            })
        }}
    }
    handlNext=(event)=>{
        console.log(this.state.idx);
        console.log(event.target.value);
        console.log(this.props.history.location);
        if(this.state.options[4*this.state.idx].name===event.target.value && this.state.idx<this.state.questions.length)
        {
            this.state.x.push(this.props.location.state[3]+1);//score
            this.state.x.push(this.props.location.state[4]=1);//True/false
            this.state.x.push(this.props.location.state[5]=this.state.questions.length);//total questions
            this.state.x.push(this.props.location.state[6]=this.state.name);//Quiz Name
            this.props.history.replace("/UserResult", this.state.x)
        }
        else{
            this.state.x.push(this.props.location.state[3]);//score
            this.state.x.push(this.props.location.state[4]=0);//True/false
            this.state.x.push(this.props.location.state[5]=this.state.questions.length);//True/false
            this.state.x.push(this.props.location.state[6]=this.state.name);//QuizName
            this.props.history.replace("/UserResult", this.state.x) 
        }

    }

    render(){
        console.log(this.state.userans)
        var a = [];
        var q=[];
        var option=[];
        var id=this.state.idx;
        for (let i=0;i<this.state.options.length;i++)
        {
            a[i]=this.state.options[i].name;
        }
        for (let i=0;i<this.state.questions.length;i++)
        {
            q[i]=this.state.questions[i].name;
        }
        for(let i=0;i<4;i++)
        {
            if(this.state.ran > 3)
            {
                this.state.ran=0;
            }
           option[i] = <div className="col-md-6 col-sm-6 col-xs-12">
                <button type="button" onClick={this.handlNext} className="element-animation3 btn btn-lg btn-primary btn-block" value={a[4*id+this.state.ran]}><span className="btn-label"></span> {a[4*id+this.state.ran]}</button>
            </div>
            this.state.ran++;
        } 
        console.log("Random", this.state.ran)  
	return(
        <div className="playquiz">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="Slidepanel">
                            {
                                <form method="post" name="handleform" onSubmit={this.submit}>
                                    <div className="PlayQuiz">
                                        <label><h2>Quiz Aaha!</h2></label>
                                        <div className="row">
                                            <div className="col-md-8 col-sm-6 col-xs-12">
                                                <label className="form-control quizName" >You are Playing </label>
                                            </div>
                                            <div className="col-md-4 col-sm-6 col-xs-12">
                                                <label className="form-control quizName"  ref="quizName" name="Quizname"><strong>{this.state.name}</strong></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Slidepanel">
                                       <div className="slidePlay">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="card-header">
                                                        <label className="question" ref="question1" name="questioninsert">Q {this.state.idx+1}. {q[id]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="question1">
                                                <div className="card-body">
                                                    <div className="row">
                                                        {option}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>  
                    </div>  
                </div>
            </div>
            <footer>
            <Footer/>
            </footer>
        </div>
        );
	}
}
