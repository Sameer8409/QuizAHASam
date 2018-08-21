import axios from 'axios'; 
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Style from "../../css/Style.css";
import SweetAlert from 'sweetalert-react';
import Header from '../../Components/Include/Header.js';
import Footer from '../../Components/Include/Footer.js'; 
export default class Game extends Component{
    constructor(props){
            super(props);
            this.state={
                quizName:[],
                email:''
                }
            }     
    componentWillMount() { 
        console.log("Willmount");
        if(localStorage.mydata == "null" && localStorage.mydata != "admin@gmail.com")
        {
            this.props.history.push("/")
        }
        else{
            if(this.props.location.state===undefined)
            {
                this.props.history.push("/Game")
            }
        var self=this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/getQuiz',{})
            .then(function(response){
                let data = response.data;
                console.log(data.quizName);
                let getQuiz = [];
                data.forEach((data) => {
                    getQuiz.push(data.quizName);
                });
                self.setState({
                    quizName: getQuiz
                });
            })
        }
    }
    handleQuiz = (event) => {
        event.preventDefault();
        let x = [];
        x[0]=event.target.id;
        x[1]= this.state.email;
        console.log("Id",event.target.id);
        console.log("Value", this.state.email)
        this.props.history.push('/PlayQuiz', x);
    }
    render(){
        console.log("histopry", this.state.email);
        let list = this.state.quizName.map((data, index) => {
            return (<li><div className="media">
                            <div className="media-body">
                                <h4>{data}</h4>
                                <p>Want to play this game please click on play now coresponding to the Quiz Name</p>
                            </div>
                            <div className="media-right align-self-center">
                                <button id={index} type="button" onClick={this.handleQuiz} name="quizes" className="btn btn-default"> {"Play Now"} </button>
                            </div>
                        </div>
                    </li>
                );
            });
        return(
            <div className="Game">
                <Header/>
                <div className="game">
                    <div className="constructor">
                        <section className="row-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="text-center"><span>Quiz Game Listing</span>Created with <i className="fa fa-heart"></i> from<Link to="#"> Sameer Khan</Link></h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12  col-sm-12  col-xs-10 row-block">
                                        <ul id="sortable">
                                            {list}                       
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>  
                <Footer/>    
            </div>   
        )
    }
}
