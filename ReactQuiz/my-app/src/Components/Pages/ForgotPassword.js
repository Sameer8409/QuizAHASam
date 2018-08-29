import axios from 'axios'; 
import {Link} from "react-router-dom";
import React, {Component} from 'react';
import Footer from '../../Components/Include/Footer.js';
import FirstHeader from '../../Components/Include/FirstHeader.js';
export default class Forgot extends Component{
	constructor(props){
		super(props);
        this.click=this.click.bind(this);
		this.state = {
			email:'',
			password:'',
			mobile:''
		}
	}
    componentDidMount(){
        if(this.props.location.state === undefined)
            this.props.history.push("/");
    }
    click = (event) => { 
        event.preventDefault();
        this.handleemail();
        this.handlemobile();
        this.handleform();
    }
        handleemail=(event)=>{
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
    

	handleform = (event) =>{
        let text="Admin is not allowed to reset the password please contact to your service provider.";
        let text2="Invalid Email addredd or Mobile number";
        if(this.state.email==="admin@gmail.com")
		{
			document.getElementById("emailverify").innerHTML=text;
			return false;
		}
        else{
            if(this.state.mobile===""||this.state.email==="")
            {
                return false;
            }
        }
		var self = this;
		axios.post('http://sameer-intern.hestalabs.com:5000/api/forgot',{
			email:this.state.email,
			mobile:this.state.mobile
		})
		.then(function(response){
			console.log(response);
			if(response.data === "yes")
			{
                self.props.history.push('/Reset', self.state.email);
			}
			else
			{
				document.getElementById("dberror").innerHTML=text2;
                return false;
				}
		})
	}
	render(){
		return(
			<div className="UserLogin">
            <FirstHeader/>
        <div className="container">
            <div className="row">
                <div clissName="col-md-12">
                <center><h1>Reset/Update Password   STEP 1 of 2</h1><h2>please enter your email address and registered Mobile Number</h2></center>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-3 col-sm-2 col-xs-1">
                </div>
                <div className="panel panel-primary mypanel col-md-6 col-sm-8 col-xs-10 ">
                    <div className="panel-heading heading">
                        Forgot Password
                        <div className="pull-right">QuizAHA!</div>
                    </div>
                    <div className = "panel-body">
                        <div id = "loginmsg">
                        </div>
                        <form method="post" name="handleForm" onSubmit={this.click}>
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
                            <div className="row">
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <button id="update" type="submit" name="update" className="btn btn-success">Verify mobile number</button>
                                </div>
                                    
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <Link to="/"> Back to Login</Link>
                                </div>
                            </div>
                            <div>
                             <span id="dberror"></span>
                             </div>
                        </form>
                    </div>
                </div>
            <div className="col-md-3 col-sm-2 col-xs-1"> 
            </div>
        </div>
        <center><p> Wana Play <strong>Ultimate quizes </strong> <i>Login here or <Link to="/Signup">Register yourself</Link></i></p></center>
    </div>
    <Footer/>
</div>

			);
	}

}
