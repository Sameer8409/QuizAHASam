import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Footer from '../../Components/Include/Footer.js';
import FirstHeader from '../../Components/Include/FirstHeader.js';
export default class Signup extends Component{

    constructor(props){
        super(props);
        this.click=this.click.bind(this);
        this.state={
            name:'',
            email:'',
            password:'',
            confirm_password:'',
            doj:'',
            mobile:''

        }
    }

click = (event) => {
    event.preventDefault();
    this.handlename();
    this.handleemail();
    this.handlepasswords();
    this.handleconfirm_password();
    this.handlemobile();
    this.handleform();

}

    handlename=(event)=>{
        //event.preventDefault();
        let name = this.refs.name.value;
        // this.name=this.refs.name.value;
        var regex= /^[a-zA-Z ]{2,30}$/;
        var text="Name should start with an alphabet and must have atlest two character";
        if(!(name.match(regex))){
            document.getElementById("nameverify").innerHTML=text;
            return false;
        }
        else{
            document.getElementById("nameverify").innerHTML="";
            this.setState({
                name:name
            })
            return false;
        }
        
    }
    handleemail=(event)=>{
        //event.preventDefault();
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
    handlepasswords=(event)=>{
        //event.preventDefault();
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
    handleconfirm_password=(event)=>{
        //event.preventDefault();
        let confirm_password=this.refs.confirm_password.value;
        var pas=document.getElementById("pas").value;
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
    
    handlemobile=(event)=>{
        //event.preventDefault();
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
    handleform=(event)=>{
        let text="You are already registered, Please Login with your email id or use another";
        if(this.state.name===""||this.state.email===""||this.state.password===""||this.state.confirm_password===""||this.state.mobile==="")
        {
            return false;

        }
        var self = this;
        axios.post('http://localhost:5000/api/signup', {
            name:this.state.name,
            email:this.state.email,
            password: this.state.password,
            confirm_password:this.state.confirm_password,
            mobile:this.state.mobile
        })
        .then(function (response) {
            if(response.data==="already exists")
            {   
                document.getElementById("emailverify").innerHTML=text; 
                return false;
            }
            else{
                if(response.data.data==="admin@gmail.com")
                {
                    localStorage.setItem('mydata', response.data.data); 
                    self.props.history.push('/Dashboard', response.data.data);           
                }
                else{
                    localStorage.setItem('mydata', response.data.data);
            self.props.history.push('/Play', self.state.email);
        }}
        })
        .catch(function(err){
            console.log("error");    
        });
    }
render(){
    return(
<div className="signup">
    <FirstHeader/>
    <div className="container">
        <div className="panel panel-primary signpanel">
            <div className="panel-heading signup">
                <h3> User Registration Page </h3>
            </div>
            <div className="panel-body">
                <form  method="post" onSubmit={this.click}>
                    <div className="form-group">
                        <label className="col-md-12 control-label">Name</label>
                        <div className="col-md-12 gutter-left">
                        <input type="text" ref="name" name="name" id="name" className="form-control" placeholder="Enter your name" maxLength="30" onBlur={this.handlename} />
                            <span id="nameverify"></span>
                            <div id="name"></div>
                        </div>
                    </div>
                    <div className="form-group col-md-12 gutter-left">
                        <label className="control-label">Email Address</label>
                            <input title="suggestion"  type="email" ref="email" name="emailid" id="emailid" className="form-control" placeholder="Ex. example@gmail.com or example@yahoo.co.in" onBlur={this.handleemail}  /> 
                            <span id="emailverify"></span>
                    </div>

                    <div className="form-group col-md-12 gutter-left">
                        <label className="control-label">password</label>
                        <div>
                        <input type="password" ref="password" name="password" id="pas" className="form-control" placeholder="Enter password" maxLength="16" onBlur={this.handlepasswords} />
                        <span id="passverify"></span>
                            
                        </div>
                    </div>
                    <div className="form-group col-md-12 gutter-left">
                        <label className="control-label">Confirm password</label>
                        <div >
                        <input type="password"  id="cpas" ref="confirm_password" name="confirm" className="form-control" maxLength="16" placeholder="confirm password" onBlur={this.handleconfirm_password} />
                            <span id="confirm_password"></span>
                        </div>
                    </div>

                    <div className="form-group col-md-12 gutter-left">
                        <label className="control-label">Phone no.</label>
                            <div className="input-group">
                                <div className="input-group-addon">+91</div>
                            <input type="text"  ref="mobile" className="form-control" id="phone" name="phone" placeholder="Ex. 971 XXXX 823" maxLength="10" onBlur={this.handlemobile}  />
                            <span id="mobileverify"></span>
                            </div>
                            <div id="phonediv"></div>

                    </div>
                    
                    <div className="form-group policy col-md-12 gutter-left">
                        <p>You must agree with our <Link to="/Terms"> terms and conditions</Link></p>
                        <p>Already a user <Link to="/">Login here</Link> </p>
                    </div>
                    <div className="forsm-group col-md-12 gutter-left">

                        <button type="submit" id="sub" className="btn-block" name="submit">SIGN IN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
</div>
    );
}
}
