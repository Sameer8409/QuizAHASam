import React, {Component} from 'react';
import axios from 'axios'; 
import {Link} from "react-router-dom";
export default class Forgot extends Component{
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
            this.props.history.push("/");
    }
        handleemail=(event)=>{
        event.preventDefault();
        let email=this.refs.email.value;
        var regex= "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
        var text="Email Address must have '@' and '.'"
        if(!(email.match(regex)))
        {
            document.getElementById("emailverify").innerHTML=text;
            return false;
        }
        else{
            document.getElementById("emailverify").innerHTML="";
            this.setState({
                email:email
            })
            return false;
        }
    }
	handlemobile=(event)=>{
        event.preventDefault();
        let mobile=this.refs.mobile.value;
        var regex="^([7-9]{1})([0-9]{9})$";
        var text="Mobile number must have 10 digit and should start with 7,8 or 9.";
        if(!(mobile.match(regex)))
        {
            document.getElementById("mobileverify").innerHTML=text;
            return false;
        }
        else{
            document.getElementById("mobileverify").innerHTML="";
            this.setState({
                mobile:mobile
            })
            return false;
        }
    }
    

	handleForm = (event) =>{
        event.preventDefault();
  //       this.email=this.refs.email.value;
		// this.mobile = this.refs.mobile.value;
		if(this.state.mobile==""||this.state.email=="")
		{
			alert("Enter your email and registered mobile number.");
			return false;
		}
		var self = this;
		axios.post('http://localhost:5000/api/forgot',{
			email:this.state.email,
			mobile:this.state.mobile
		})
		.then(function(response){
			console.log(response);
			if(response.data=="yes")
			{
				alert("Enter New password");
                self.props.history.push('/Reset', self.state.email);
			}
			else
			{
				alert("Invalid Email or Mobile Please Try Again");
                return false;
				}
		})
	}
	render(){
		return(
			<div className="UserLogin">
        <div className="container">
            <div className = "row">
                <div className = "col-md-3">
                </div>
                <div className="panel panel-primary mypanel col-md-6 col-sm-9 ">
                    <div className="panel-heading heading">
                        Forgot Password
                        <div className="pull-right">QuizAHA!</div>
                    </div>
                    <div className = "panel-body">
                        <div id = "loginmsg">
                        </div>
                        <form method="post" name="handleForm" onSubmit={this.handleForm}>
                            <div className="form-group">
                                <label className="control-label">Email</label>
                                <input type="email" ref="email" id="email" className="form-control" name="email" placeholder="Ex. example@gmail.com or example@yahoo.co.in" onBlur={this.handleemail} />
                                <span id="emailverify"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Mobile</label>
                                <input type="tel" ref="mobile" id="mobile" maxLength="10" className="form-control" name="mobile" placeholder="Ex: 987XXXX321" onBlur={this.handlemobile} />
                                <span id="mobileverify"></span>
                            </div>
                            <button id="update" type="submit" name="update" className="btn btn-success">Verify mobile number</button>
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

			);
	}

}
