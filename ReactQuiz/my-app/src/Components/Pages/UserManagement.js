import axios from 'axios';
import LeftBar from './LeftBar';
import {Link} from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import Header from '../../Components/Include/Header.js';
export default class UserManagement extends Component{
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
    handleUser = (event) => {
        //this.email=event.target.id;
        var self = this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/delete', {email:this.email})
        .then(function(response){
            if(response.data==="Done")
                {
                self.props.history.push('/Dashboard', "1");
                self.props.history.push('/UserManagement', "2");
            }else
                {
                alert("User Can not not be delete!")
            }
        })
    }
    userDelete = (event) => {
        event.preventDefault();
        this.email=event.target.id;
        console.log(this.email);
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete this Quiz permanently.',
            buttons: [
            {
              label: 'Yes',
              onClick: () => this.handleUser()
            },
                {
                  label: 'No',
                  onClick: () => ""
                }
            ]
        })
    };
    componentWillMount(){
        if(localStorage.mydata != "admin@gmail.com")
       {
        window.location="/";
       }
        var self = this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/totalUsers', {})
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
        let edit = this.state.emails.map((Email, index11) => {
            return (<li> <Link id={Email} onClick={this.userDelete} name="edit" to="UserManagement"> {"Delete"} </Link> </li> );
        });
        let mobile = this.state.mobiles.map((Mobile, index2) => {
            return (<li> {Mobile}</li> );
        });

        let doj = this.state.datesofJoining.map((DOJ, index3) => {
            return (<li> {DOJ}</li> );
        });
        return(
            <div className="userManagement">
                <Header/>
                <div className="container-fluid">
                    <Row>
                        <Col md={3}>
                            <LeftBar/>
                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col md={12}>
                                    <h1 className="userManagement">User Management</h1>
                                    <hr/>
                                </Col>
                            </Row>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                	<i className="fa fa-bar-chart-o fa-fw"></i> Users
                                    <div className="panel-body">
                                  		<Row>
                                        	<Col md={12}>
                                        		<div className="table-responsive">
                                            		<table className="table table-bordered table-hover table-striped">
                                                    	<thead>
                                                            <tr>
                                                                <th>      </th>
                                                                <th>S No.</th>
                                                                <th>Player Name</th>
                                                                <th>Email id</th>
                                                                <th>Contact no.</th>
                                                                <th>Date of joining</th>
                                                                <th>Action</th>
                                                            </tr>
                                                    	</thead>
                                                   		<tbody>
                                                        	<tr>
                                                        		<td>	</td>
                                                        		<td>{index}	</td>
                                                        		<td>{name}</td>
                                                                <td>{email}</td>
                                                                <td>{mobile}</td>
                                                                <td>{doj}</td>
                                                                <td>{edit}</td>
                                                            </tr>    
                                                    	</tbody>
                                            		</table>
                                        		</div>
                                       		</Col>
                                       	</Row>
                        			</div>
                     			</div>
                     		</div>
                        </Col>
                    </Row>
                </div>   
            </div>
        );
    }
}