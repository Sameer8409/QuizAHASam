import React, {Component} from 'react';
import Header from '../../Components/Include/Header.js'; 
import axios from 'axios'; 
import Style from "../../css/Style.css"
// import {Link} from 'react-router-dom';
//import { Route } from 'react-router';
export default class Game extends Component{

        constructor(props){
            super(props);
            this.state={
                quizName:[],
                email:''
                }
            }     
            componentDidMount(){
                let e=this.props.location.state;
        if(this.props.location.state==undefined)
        {
            this.props.history.push("/");
        }
        this.setState({
            email:e
        })
    }  
    handleform = (event) => {
        event.preventDefault(); 
        var self=this;
        axios.post('http://localhost:5000/api/getQuiz',{})
            .then(function(response){
                let data = response.data;
                let getQuiz = [];
                data.forEach((data) => {
                    getQuiz.push(data.quizName[0].quizName);
                });
                self.setState({
                    quizName: getQuiz
                });
        })
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
        return (<li> <button id={index} type="button" onClick={this.handleQuiz} name="quizes" className="btn btn-success"> {data} </button> </li> );
    });

	return(
	<div className="container">
	<Header/>
    <div className="Game">
                <form method="post" name="handleform" onSubmit={this.handleform}>
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="page-header">Select any quiz</h1>
                    </div>
                </div>
                <div>
                    <div className="row">
                    <div className="col-md-12">
                    
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                               <h3> <i className="fa fa-list-ul"></i> <button id="showQuiz" type="submit" name="quizes" className="btn btn-success">Show Quizes</button></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/*<div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <i className="fa fa-users"></i> My Friends
                                                    </div>
                                                    <div className="panel-body">
                                                        <div className="list-group">
                                                        </div>
                                                        <a href="#" className="btn btn-default btn-block">Add Friends</a>
                                                    </div>
                                                </div>*/}
                    </div>
                </div>
                <ul>
                    {list}
                
                </ul>

                </form>
                </div>
            </div>   
    )
}
}
