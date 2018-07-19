import React, {Component} from 'react';
import {Link} from "react-router-dom";
export default class Logout extends Component{
    constructor(props){
        super(props);
        this.state={
            abc:''
        }
    }
    
    render(){
    	alert("Thank you for choosing QuizAHA! ");
    	this.props.history.push("/");
    	return(<div>
    		Hello
    		</div>
    		);
    }
}