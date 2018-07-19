import React, {Component} from 'react';
import Header from '../../Components/Include/Header.js'; 
import {Link} from 'react-router-dom';
import Style from "../../css/Style.css"
import quiz from '../Images/quiz3.png';
//import { Route } from 'react-router';
export default class Play extends Component{
    constructor(props){
        super(props);
        this.state={
            email:''
        }
    }
    componentDidMount(){
        if(this.props.location.state==undefined)
        {
            this.props.history.push("/");
        }
    }
    handlePlay = (event) =>{
        event.preventDefault();
        this.props.history.push("/Game", this.state.email);
    } 
render(){
	return(
	<div className="play">
    <Header/>
    <img src={quiz}/>
    
    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handlePlay}>Play</button>
    </div>
    )
}
}
