import React, {Component} from 'react';
export default class Logout extends Component{
    constructor(props){
        super(props);
        this.state={
            abc:''
        }
    }   
    render(){
            <header>
            if(localStorage.mydata === "null" && localStorage.mydata != "admin@gmail.com")
        {
            this.props.history.push("/")
            
        }
        else
        {
        localStorage.mydata = "null", 
        this.props.history.push("/")
        }
            </header>
        return(<div>
    		Hello There is some problem
    		</div>
    		);
    }
}