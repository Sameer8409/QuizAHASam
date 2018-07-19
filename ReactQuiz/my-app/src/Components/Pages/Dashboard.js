import React, {Component} from 'react'; 
import axios from 'axios';
import LeftBar from './LeftBar.js';
import {Link} from 'react-router-dom';
import Header from '../../Components/Include/Header.js';
import NumberofUsers from './NumberofUsers.js';
import NumberofTopics from './NumberofTopics.js';
export default class Dashboard extends Component{
     constructor(props){
        super(props);
        this.state={
            userDetails:[],
                names: [],
                mobiles: [],
                emails: [],
                datesofJoining: [],
                email:''
        }
    }
    componentWillMount(){
        if(this.props.location.state == undefined)
       {
        this.props.history.push("/")
       }
        var self = this;
        axios.post('http://localhost:5000/api/userDetails', {})
        .then(function(response){
            let data = response.data;
            let name = [];
            let email = [];
            let mobile = [];
            let doj= [];

            data.forEach((Name) => {
                name.push(Name.name)
            });
            data.forEach((Email) => {
                email.push(Email.email)
            });
            data.forEach((Mobile) => {
                mobile.push(Mobile.mobile)
            });
            data.forEach((DOJ) => {
                doj.push(DOJ.doj)
            });

            self.setState({
                names: name,
                emails: email,
                mobiles: mobile,
                datesofJoining: doj

           
            },()=>{
                //console.log("userDetails",self.state.userDetails[0].name)
            });
        })

    }
render(){
    let index = this.state.names.map((Name, Index) => {
        return (<li>{Index+1}</li> );
    });
    let name = this.state.names.map((Name, index) => {
        return (<li>{Name}</li> );
    });
    let email = this.state.emails.map((Email, index1) => {
        return (<li> {Email}</li> );
    });
    let mobile = this.state.mobiles.map((Mobile, index2) => {
        return (<li> {Mobile}</li> );
    });

    return(			
		<div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Header/>
                    <div className="row">
                        <div className="col-md-3">
                            <LeftBar/>

                        </div>
                        <div className="col-md-9">
			                <center>
                                <div className="row">
                                    <div className="col-md-6">
                                        <NumberofUsers/>
                                    </div>
                                    <div className="col-md-6">
                                        <NumberofTopics/>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                   		               <i className="fa fa-bar-chart-o fa-fw"></i>players
                                        <div className="panel-body">
                                            <div className="row">
                         	                    <div className="col-md-12">
                            	                   <div className="table-responsive">
                                                <table className="table table-bordered table-hover table-striped">
                                                <thead>
                                                <tr>
                                                    <th>S no.</th>
                                                    <th>Player Name</th>
                                                    <th>Email Id</th>
                                                    <th>Email Id</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>{index} </td>
                                                    <td>{name}</td>
                                                    <td>{email}</td>
                                                    <td>{mobile}</td>
                                    
                                                </tr>
                                                </tbody>
                                                </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
		            </div>
                </div>
            </div>
        </div>
	);
}
}  
