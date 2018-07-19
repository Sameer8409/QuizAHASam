import React, {Component} from 'react';
import {Link} from "react-router-dom";
export default class AdminLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            abc:''
        }
    }
    componentDidMount(){
    	console.log("Admin",this.props.location.state);
    let val= this.props.location.state;
     this.setState({
    	abc:val
    })
   
     }
    
    render(){
    	 if(this.state.abc=='admin@gmail.com')
    	{
    	 this.props.history.push("/Dashboard", "1");
    	}
    	else
    	{
    		switch(this.state.abc)
    		{
    			case "1": this.props.history.push("/Dashboard", "1");
    			break;
    			case "2": this.props.history.push("/UserManagement", "2");
    			break;
    			case "3": this.props.history.push("/CreateQuiz", "3");
    			break;
    			case "4": this.props.history.push("/QuizManagement", "4");
    			break;
    			case "5": this.props.history.push("/Play", "5");
    			 
    		}
    	}
    	return(<div>
    		Hello
    		</div>
    		);
    }
}