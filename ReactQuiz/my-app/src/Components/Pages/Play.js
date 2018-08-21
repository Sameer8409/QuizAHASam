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
        axios.post('http://sameer-intern.hestalabs.com:5000/api/showRecords', {
        email:localStorage.mydata
        })
        .then(function (response) {
            console.log(response.data[0].playTime);
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
                                                    <div className="table-responsive">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handlePlay}>Play</button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
