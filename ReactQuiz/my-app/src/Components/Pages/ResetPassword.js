import React, {Component} from 'react';
import axios from 'axios'; 
import {Link} from "react-router-dom";
export default class Reset extends Component{
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			mobile:''
		}
	}
    componentDidMount(){
        if(this.props.location.state==undefined)
        {
            this.props.history.push("/");
        }
        let email='';
        this.setState({
            email:this.props.location.state
        })
    }
	handlePassword = (event)=>{
        event.preventDefault();
        let password=this.refs.password.value;
        var regex= /^(?=.*[0-9])(?=.{6,})(?=.*[!@#$%^&*])/;
        var text=" use 6 to 16 character with at least one number and one special character(!@#$%^&*)";
        if (!(password.match(regex)))
        {
            document.getElementById("passverify").innerHTML=text;  
            return false;
        }
        else{
            document.getElementById("passverify").innerHTML="";  
            this.setState({
                password:password
            })
            return false;
        }
    }
    handleConfirm_password=(event)=>{
        event.preventDefault();
        let confirm_password=this.refs.confirm_password.value;
        var pas=document.getElementById("password").value;
        var text="Please enter the same password";
        if(!(confirm_password.match(pas)))
        {
            document.getElementById("confirm_password").innerHTML=text;
            return false;
        }
        else{
            document.getElementById("confirm_password").innerHTML="";
            this.setState({
                confirm_password:confirm_password
            })
            return false;
        }
    }
    
    
	handleForm = (event) =>{
        event.preventDefault();
		// this.password = this.refs.password.value;
  //       this.confirm_password = this.refs.confirm_password.value;
		if(this.state.password==""||this.state.confirm_password=="")
		{
			alert("Enter your New password");
			return false;
		}
		var self = this;
		axios.post('http://localhost:5000/api/reset',{
			email:this.state.email,
            password:this.state.password
		})
		.then(function(response){
			console.log(response);
            alert("Password updated!");
			alert("Please login with your new password");
                self.props.history.push("/");

		})
	}
	render(){
        console.log(this.state.email);
		return(
			<div className="UserLogin">
        <div className="container">
            <div className = "row">
                <div className = "col-md-3">
                </div>
                <div className="panel panel-primary mypanel col-md-6 col-sm-9 ">
                    <div className="panel-heading heading">
                        Set New Password
                        <div className="pull-right">QuizAHA!</div>
                    </div>
                    <div className = "panel-body">
                        <div id = "loginmsg">
                        </div>
                        <form method="post" name="handleform" onSubmit={this.handleForm}>
                            <div className="form-group">
                                <label className="control-label">New Password</label>
                                <input type="password" ref="password" id="password" className="form-control" name="password" placeholder="Minimum 6 and Maximum 16 character" maxLength="16" onBlur={this.handlePassword} />
                                <span id="passverify"></span>
                            </div>
                            <div className="form-group">
                        <label className="control-label">Confirm password</label>
                        <div >
                        <input type="password"  id="cpas" ref="confirm_password" name="confirm" className="form-control" maxLength="16" placeholder="confirm password" onBlur={this.handleConfirm_password} />
                            <span id="confirm_password"></span>
                        </div>
                    	</div>
                         <button id="update" type="submit" name="update" className="btn btn-success">Update Password</button>
                         <div className="forgot password pull-right">
                                <Link to="/"> Back to Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            <div className="col-md-3"> 
            </div>
        </div>
    </div>
</div>

			)
	}

}
