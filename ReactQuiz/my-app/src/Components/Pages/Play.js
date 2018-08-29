import axios from 'axios';
import React, {Component} from 'react';
import Header from '../../Components/Include/Header.js';
import Footer from '../../Components/Include/Footer.js'; 
export default class Play extends Component{
    constructor(props){
        super(props);
        this.state={
            hits: null,
            email:'',
            quizName:[],
            time:[],
            score:[]
        }
    }
    componentWillMount(){
        if(localStorage.mydata === "null" && localStorage.mydata != "admin@gmail.com")
        {
            this.props.history.push("/")
        }
        var self = this
        axios.post('http://localhost:5000/api/showRecords', {
        email:localStorage.mydata
        })
        .then(function (response) {
            console.log(response.data);
            let data = response.data
            let quiz = [];
            let time = [];
            let score = [];
                data.forEach((data) => {
                    quiz.push(data.quizName);
                    time.push(data.playTime);
                    score.push(data.total_score);
                });
                self.setState({
                    quizName: quiz,
                    time:time,
                    score:score
                });

            
        })
    .catch(function(err){
    console.log("error", err);    
    });   
}
    handlePlay = (event) =>{
        event.preventDefault();
        this.props.history.push("/Game");
    } 
render(){
    var table1='';
let index = this.state.quizName.map((data, index) => {
        return (<li>  {index+1} </li> );
    });
 let quiz = this.state.quizName.map((data, index) => {
        return (<li>  {data} </li> );
    });
let score = this.state.score.map((data, index) => {
        return (<li>  {data} </li> );
 });
 let time = this.state.time.map((data, index) => {
        return (<li>  {data} </li> );
 });
 if(index.length===0)
 {
    table1=<div className="Slidepanel">
                <div className="slidePlay">
                    <div className="card-header">
                    Previous Record
                    </div>
                    <div className="card-body">
                        <center><div className="over"><h1>Hello !</h1></div>
                                <div className="final-result">You have not played any game yet!</div>
                        </center>
                    </div>
                </div>    
            </div>
 }
 else{
 table1 = <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>S no.</th>
                            <th>Played Quizes</th>
                            <th>Scored</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{quiz}</td>
                            <td>{score}</td>
                            <td>{time}</td>
                       </tr>
                    </tbody>
                </table>
            </div>
    }
	return(
            <div className="play">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-head page-header">
                                <h2>Your recent Score history</h2>
                            </div>
                            <div className="card-body">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <i className="fa fa-bar-chart-o fa-fw"></i>players
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    {table1}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <button type="button" className="btn btn-default btn-lg btn-block" onClick={this.handlePlay}><h2>Play</h2></button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
    )
}
}
