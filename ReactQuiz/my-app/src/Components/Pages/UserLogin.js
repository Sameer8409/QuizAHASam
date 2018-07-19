import React, {Component} from 'react';
import axios from 'axios'; 
import {Link} from "react-router-dom";
import Style from "../../css/Style.css";
export default class UserLogin extends Component{
    
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    componentDidMount(){
        console.log("Did",this.props);
    }
    handelemail=(event)=>{
        event.preventDefault();
        let email=this.refs.email.value;
        var regex= "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
        var text="Please enter a valid email id";
        if (!(email.match(regex)))
        {
            document.getElementById("emailverify").innerHTML=text;  
            return false;
        }
        else
        {
            document.getElementById("emailverify").innerHTML="";
            this.setState({
                email:email
            })
            return false;
        }
    }

    handleform=(event)=>{
        event.preventDefault();
        this.password=this.refs.password.value;
        if(this.state.email===""||this.password==="")
        {
            alert("Both fields are required");
            return false;
        }
        else
        {
        var self = this;
        axios.post('http://localhost:5000/api/userlogin', {
        email:this.state.email,
        password: this.password
        })
        .then(function (response) {
            console.log(response);
            if(response.data==="admin login successful")
            {
                alert("Welcome");
                self.props.history.push('/AdminLogin',self.state.email);
            }
            else{
        if(response.data==="login successful")
        {
            //let email=response.data[0].data.email;
            //console.log(email);
            //localStorage.setItem('mydata', email);
            alert("Welcome");
            self.props.history.push('/Play', self.state.email);
        }
        else
        {
            alert("Please Enter a valid Email id or password")
            self.props.history.push('/');
        }
    }
})
    .catch(function(err){
    console.log("error");    
}); 
}  
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
                        Login to Quiz World 
                        <div className="pull-right">QuizAHA!</div>
                    </div>
                    <div className = "panel-body">
                        <div id = "loginmsg">
                        </div>
                        <form method="post" name="handleform" onSubmit={this.handleform}>
                            <div className="form-group">
                                <label className="control-label">Email</label>
                                <input type="email" ref="email" id="email" className="form-control" name="email" placeholder="Ex. example@gmail.com or example@yahoo.co.in" onBlur={this.handelemail} />
                                <span id="emailverify"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Password</label>
                                <input type="password" ref="password" id="pas1" className="form-control" name="password" placeholder="Minimum 6 and Maximum 16 character" maxLength="16" onBlur={this.handelpassword} />
                                <span id="passverify"></span>
                            </div>
                            <button id="login1" type="submit" name="login1" className="btn btn-success">Login</button>
                            <Link to="/Signup"> SIGN UP</Link>
                            <div className="forgot password pull-right">
                                <Link to={{ pathname: '/Forgot', state:'forgot' }}>Forgot Password?</Link>
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
