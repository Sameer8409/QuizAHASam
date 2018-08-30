import axios from 'axios'; 
import {Link} from "react-router-dom";
import React, {Component} from 'react';
import Footer from '../../Components/Include/Footer.js';
import FirstHeader from '../../Components/Include/FirstHeader.js';
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
        if(this.props.location.state === undefined)
        {
            this.props.history.push("/");
        }
        let email='';
                this.setState({
                    email:this.props.location.state
                })
    }
    click = (event) => { 
        event.preventDefault();
        this.handlePassword();
        this.handleConfirm_password();
        this.handleform();
    }
	handlePassword = (event)=>{
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
    
    
	handleform = (event) =>{
        if(this.state.password === ""||this.state.confirm_password === "")
		{
			return false;
		}
		var self = this;
		axios.post('http://sameer-intern.hestalabs.com:5000/api/reset',{
			email:this.state.email,
            password:this.state.password
		})
		.then(function(response){
			console.log(response);
            alert("Password updated! now you can login with new password");
                self.props.history.push("/");

		})
	}
	render(){
        console.log(this.state.email);
		return(
        	<div className="UserLogin">
                <FirstHeader/>
                <div className="container">
                    <div className="row">
                        <div className = "col-md-4 col-sm-3 col-xs-2">
                        </div>
                        <div clissName="col-md-4 col-sm-6 col-xs-8 ">
                            <center>
                            <h1>Reset/Update Password   STEP 2 of 2</h1>
                            <h2>Please Enter a New Password to change</h2>
                            </center>
                        </div>
                        <div className = "col-md-4 col-sm-3 col-xs-2">
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-md-3 col-sm-2 col-xs-1">
                        </div>
                        <div className="panel panel-primary mypanel col-md-6 col-sm-8 col-xs-10">
                            <div className="panel-heading heading">
                                Set New Password
                                <div className="pull-right">QuizAHA!</div>
                            </div>
                            <div className = "panel-body">
                                <div id = "loginmsg">
                                </div>
                                <form method="post" name="handleform" onSubmit={this.click}>
                                    <div className="form-group">
                                        <label className="control-label">New Password</label>
                                        <input type="password" ref="password" id="password" className="form-control" name="password" placeholder="Minimum 6 and Maximum 16 character" maxLength="16" onBlur={this.handlePassword} />
                                        <span id="passverify"></span>
                                    </div>
                                    <div className="form-group">
                                    <label className="control-label">Confirm password</label>
                                        <div>
                                            <input type="password"  id="cpas" ref="confirm_password" name="confirm" className="form-control" maxLength="16" placeholder="confirm password" onBlur={this.handleConfirm_password} />
                                            <span id="confirm_password"></span>
                                        </div>
                            	    </div>
                                    <div className="row">
                                        <div className="col-md-8 col-sm-7 col-xs-12">
                                            <button id="update" type="submit" name="update" className="btn btn-success">Update Password</button>
                                        </div>    
                                        <div className="col-md-4 col-sm-5 col-xs-12">
                                            <Link to="/"> Back to Login</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className = "col-md-3 col-sm-2 col-xs-1">
                        </div>
                    </div>
                    <center><p> Wana Play <strong>Ultimate quizes</strong> <i>Login here or <Link to="/Signup">Register yourself</Link></i></p></center>
                </div>
                <Footer/>
            </div>
		)
	}

}
