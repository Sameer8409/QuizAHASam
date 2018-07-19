import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
export default class Signup extends Component{

getSignup(e){
e.preventDefault();
this.name=this.refs.name.value;
this.email=this.refs.email.value;
this.password=this.refs.password.value;
this.confirm_password=this.refs.confirm_password.value;
this.doj=this.refs.doj.value;
this.mobile=this.refs.mobile.value;
axios.post('http://localhost:5000/api/signup', {
name:this.name,
email:this.email,
password: this.password,
confirm_password:this.confirm_password,
doj:this.doj,
mobile:this.mobile

})
.then(function (response) {
console.log(response);
//let email=response.data[0].data.email;
//localStorage.setItem('mydata', email);
})
.catch(function(err){
console.log("error");    
});
}


    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            confurm_password:'',
            doj:'',
            mobile:''

        }
    }
    handlename=(event)=>{
        let name=event.target.value;
        this.setState({name:name});
    }
    handleemail=(event)=>{
        let email=event.target.value;
        this.setState({email:email});
    }
    handlepassword=(event)=>{
        let password=event.target.value;
        this.setState({password:password});
    }
    handleconfirm_password=(event)=>{
        let confirm_password=event.target.value;
        this.setState({confirm_password:confirm_password});
    }
    handledoj=(event)=>{
        let doj=event.target.value;
        this.setState({doj:doj});
    }
    handlemobile=(event)=>{
        let mobile=event.target.value;
        this.setState({mobile:mobile});
    }
    handleform=(event)=>{
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirm_password);
        console.log(this.state.mobile);
        
        
    }
render(){
    return(
    <section id="sign_section">
        <div className="panel panel-primary signpanel">
            <div className="panel-heading">
                <h3> User s registration page </h3>
            </div>
            <div className="panel-body">
                <form method="post" onSubmit={this.handleform}>
                    <div className="form-group">
                        <label className="col-md-12 control-label">Name</label>
                        <div className="col-md-12 gutter-left">
                        <input type="text" ref="name" name="name" id="name" className="form-control" placeholder="Enter your name" onChange={this.handlename}  />
                            <div id="name"></div>
                        </div>
                    </div>
                    <div className="form-group col-md-12 gutter-left">
                        <label className="control-label">Email Address</label>
                            <input title="suggestion"  type="email" ref="email" name="emailid" id="emailid" className="form-control" placeholder="Ex. example@gmail.com" onChange={this.handlemail} required /> 
                    </div>


                    <div className="form-group">
                        <label className="control-label col-md-12">password</label>
                        <div >
                        <input type="password" ref="password" name="password" id="pas" className="form-control" placeholder="Enter password" onChange={this.handlepassword} required />
                            <div id="pasdiv"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Confirm password</label>
                        <div >
                        <input type="password"  id="cpas" ref="confirm_password" name="confirm" className="form-control" placeholder="confirm password" onChange={this.handleconfirm_password} required/>
                            <div id="confirmdiv"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Date of Joining</label>
                        <div >
                        <input type="date" ref="doj" className="form-control" id="doj" name="dat" onChange={this.handledoj} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Phone no.</label>
                            <div className="input-group">
                                <div className="input-group-addon">+91</div>
                            <input type="tel" pattern="^\d{10}$" ref="mobile" className="form-control" id="phone" name="phone" placeholder="Enter phone number" onChange={this.handlemobile} required />

                            </div>
                            <div id="phonediv"></div>

                    </div>
                    
                    <div className="form-group policy">
                        <p>You must agree with our <Link to="/UserLogin"> terms and conditions</Link></p>
                        <p>Already a user <Link to="UserLogin">Login here</Link> </p>
                    </div>
                    <div className="forsm-group">

                        <button type="submit" onClick={this.getSignup.bind(this)} id="sub" className="btn-block" name="submit">SIGN IN</button>
                    </div>
                </form>

            </div>
        </div>

    </section>
    );
}
}