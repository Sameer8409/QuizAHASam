import axios from 'axios'; 
import {Link} from "react-router-dom";
import React, {Component} from 'react';
import Style from "../../css/Style.css";
import Footer from '../../Components/Include/Footer.js';
import FirstHeader from '../../Components/Include/FirstHeader.js';
export default class UserLogin extends Component{
    
    constructor(props){
        super(props);
        this.click=this.click.bind(this);
        this.state={
            email:'',
            password:''
        }
    }
    
    componentWillMount(){
        if(localStorage.mydata != "null" && localStorage.mydata === "admin@gmail.com")
        {
            this.props.history.push("/Dashboard")
        }
        else{
            if(localStorage.mydata != "null" && localStorage.mydata != "admin@gmail.com")
            {
            this.props.history.push("/Play")       
            }
        }
    }
    click = (event) => { 
        event.preventDefault();
        this.handelemail();
        this.handlepasswords();
        this.handleform();

    }
    handelemail=(event)=>{
        //event.preventDefault();
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
handlepasswords=(event)=>{
        //event.preventDefault();
        let password=this.refs.password.value;
        var text=" Please enter the password";
        if (password==="")
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
    handleform=(event)=>{
        //event.preventDefault();
        let text="Invalid Email address or password";
        this.password=this.refs.password.value;
        if(this.state.email===""||this.password==="")
        {
            
            return false;
        }
        else
        {
        var self = this
        axios.post('http://sameer-intern.hestalabs.com/api/userlogin', {
        email:this.state.email,
        password: this.password
        })
        .then(function (response) {
            if(response.data==="admin@gmail.com")
            {
                localStorage.setItem('mydata', response.data);
                //console.log("Cache", localStorage);
                self.props.history.push('/AdminLogin',response.data);
            }
            else{
        if(response.data === "unsuccessful")
        { 
            document.getElementById("dberror").innerHTML=text;
            return false;
        
        }
        else
        {
            localStorage.setItem('mydata', response.data);
            self.props.history.push('/Play', response.data);
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
	<div className = "UserLogin">
        <FirstHeader/>
        <div className = "container">
            <div className = "row">
                <div clissName = "col-md-12">
                    <center><h1>Welcome to QuizAHA the Ultimate Quiz Game</h1></center>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-3 col-sm-2 col-xs-1">
                </div>
                <div className="panel panel-primary mypanel col-md-6 col-sm-8 col-xs-10">
                    <div className="panel-heading heading">
                        Login to Quiz World 
                        <div className="pull-right">QuizAHA!</div>
                    </div>
                    <div className = "panel-body">
                        <div id = "loginmsg">
                        </div>
                        <form method="post" name="handleform" onSubmit={this.click}>
                            <div className="form-group">
                                <label className="control-label">Email</label>
                                <input type="email" ref="email" id="email" className="form-control" name="email" placeholder="Ex. example@gmail.com or example@yahoo.co.in" onBlur={this.handelemail} />
                                <span id="emailverify"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Password</label>
                                <input type="password" ref="password" id="pas1" className="form-control" name="password" placeholder="Minimum 6 and Maximum 16 character" maxLength="16" onKeyUp={this.handelpassword} />
                                <span id="passverify"></span>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <button id="login1" type="submit" name="login1" className="btn btn-success">Login</button>
                                    <Link to="/Signup"> SIGN UP</Link>
                                </div>
                                    
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <Link to={{ pathname: '/Forgot', state:'forgot' }}>Forgot Password?</Link>
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
        <center><p> Wana Play <strong>Ultimate quizes</strong> <i>Login here or <Link to="/Signup">Register yourself</Link></i></p></center>
    </div>
    <Footer/>
</div>
    );
}
}
