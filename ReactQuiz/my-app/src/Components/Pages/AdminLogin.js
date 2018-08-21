import React, {Component} from 'react';
export default class AdminLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            abc:''
        }
    }
    componentWillMount(){
        if(localStorage.mydata != "admin@gmail.com")
        {
            this.props.history.push("/");
        }
        else{
            if(this.props.location.state === undefined)
            {
                this.props.history.push("/Dashboard");
            }
            let val= this.props.location.state;
             this.setState({
            	abc:val
            })
        }
    }
    render(){
    	 if(this.state.abc==='admin@gmail.com')
    	{
    	 this.props.history.push("/Dashboard", "1");
    	}
    	else{
    		switch(this.state.abc){
    			case "1": this.props.history.replace("/Dashboard", "1");
    			break;
    			case "2": this.props.history.replace("/UserManagement", "2");
    			break;
    			case "3": this.props.history.replace("/CreateQuiz", "3");
    			break;
    			case "4": this.props.history.replace("/QuizManagement", "4");
    			break;
    			case "5": this.props.history.replace("/Play", "5");
                break;
                case "6": this.props.history.replace("/UpdateQuiz", "6");
    		}
    	}
    	return(<div>Hello there is some error</div>);
    }
}