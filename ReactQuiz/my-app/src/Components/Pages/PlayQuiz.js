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
            name: [],
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
    handleRadioChange = (event) => {
        this.setState({
            a1: event.currentTarget.value
        })
    console.log(this.state.a1);
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

    componentWillMount(){ 
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
                if(x[1]==undefined)
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
                                getQuiz.push(data.quizName);
                        });
                        self.setState({
                            quizName: getQuiz,
                            question: data[self.state.q_no].questions,
                            answer1 : data[self.state.q_no].answer1,
                            answer2 : data[self.state.q_no].answer2,
                            answer3 : data[self.state.q_no].answer3,
                            answer4 : data[self.state.q_no].answer4,
                            answer5 : data[self.state.q_no].answer5,
                            answer6 : data[self.state.q_no].answer6,
                            x:xi
                        });
                    }
                )
            }
        }
    }

    handleform =(event) => {
        //event.preventDefault();
        let ans = [];
        let currectAns = [];
        var count = 0;
        ans.push(this.state.a1);
        ans.push(this.state.a2);
        ans.push(this.state.a3);
        ans.push(this.state.a4);
        ans.push(this.state.a5);
        ans.push(this.state.a6);
        currectAns.push(this.state.answer1[0]);
        currectAns.push(this.state.answer2[0]);
        currectAns.push(this.state.answer3[0]);
        currectAns.push(this.state.answer4[0]);
        currectAns.push(this.state.answer5[0]);
        currectAns.push(this.state.answer6[0]);
        {/*console.log("User", ans);
                console.log("Actual", currectAns);*/}
        for(let i = 0; i < 6;i++){
            if(ans[i] === currectAns[i])
            count = count+10;
        }
        let gameDetails=[];
        gameDetails[0]=currectAns;
        gameDetails[1]=ans;
        gameDetails[2]=count;
        this.total_score=gameDetails[2]
        var self = this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/userRecord', {
            email:localStorage.mydata,
            quizName: this.state.quizName[self.state.q_no],
            total_score:this.total_score
        })
        .then(function (response) {
        })
        .catch(function(err){
            console.log("error");    
        });
        this.props.history.push('/Result',gameDetails);
    }

    render(){
        var resultRows
    {/*console.log("Randam", this.state.random);
    console.log(this.state.answer1);
    console.log("Hii", this.state.answer1);*/}
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
      { 
      {/*console.log(x);*/}
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
      {/*console.log("ans",ans11);*/}
      var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    	return(
            <div className="playquiz">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="Slidepanel">
                                <form method="post" name="handleform" onSubmit={this.submit}>
                                    <div className="PlayQuiz">
                                        <label><h2>Quiz Aaha!</h2></label>
                                        <div className="row">
                                            <div className="col-md-8 col-sm-6 col-xs-12">
                                                <label className="form-control quizName" >You are Playing </label>
                                            </div>
                                            <div className="col-md-4 col-sm-6 col-xs-12">
                                                <label className="form-control quizName"  ref="quizName" name="Quizname"><strong>{list[this.state.q_no]}</strong></label>
                                            </div>
                                        </div>
                                    </div>
                                    <Slider {...settings}>
                                        <div className="slidePlay">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="card-header">
                                                        <label className="question" ref="question1" name="questioninsert">Q1. {q[0]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="question1">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[0]}/> {ans11[0]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation2 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[1]}/> {ans11[1]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation3 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[2]} /> {ans11[2]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation4 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer1" onChange={this.handleRadioChange} value={ans11[3]} /> {ans11[3]}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slidePlay">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="card-header">
                                                        <label className="question" ref="question2" name="questioninsert">Q2. {q[1]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="question2">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[1]} /> {ans22[1]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[2]} /> {ans22[2]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[3]} /> {ans22[3]}</label>  
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer2" onChange={this.handleRadioChange1} value={ans22[0]} /> {ans22[0]}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slidePlay">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="card-header">
                                                        <label className="question" ref="question3" name="questioninsert">Q3. {q[2]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="question3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[3]} /> {ans33[3]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[2]} /> {ans33[2]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[1]} /> {ans33[1]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer3" onChange={this.handleRadioChange2} value={ans33[0]} /> {ans33[0]}</label>    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slidePlay">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="card-header">
                                                        <label className="question" ref="question4" name="questioninsert">Q4. {q[3]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="question4">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[2]} /> {ans44[2]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[1]} /> {ans44[1]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[3]} /> {ans44[3]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer4" onChange={this.handleRadioChange3} value={ans44[0]} /> {ans44[0]}</label>    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slidePlay">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="card-header">
                                                    <label className="question" ref="question5" name="questioninsert">Q5. {q[4]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="question5">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer5" onChange={this.handleRadioChange4} value={ans55[0]} /> {ans55[0]} </label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer5" onChange={this.handleRadioChange4} value={ans55[1]} /> {ans55[1]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer5" onChange={this.handleRadioChange4} value={ans55[2]} /> {ans55[2]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">    
                                                            <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer5" onChange={this.handleRadioChange4} value={ans55[3]} /> {ans55[3]}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slidePlay">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="card-header">
                                                        <label className="question" ref="question6" name="questioninsert">Q6. {q[5]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="question6">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[2]} /> {ans66[2]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[0]} /> {ans66[0]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[1]} /> {ans66[1]}</label>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <label className="element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span> <input type="radio" name="answer6" onChange={this.handleRadioChange5} value={ans66[3]} /> {ans66[3]}</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-success btn-lg btn-block" >Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </form>
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
