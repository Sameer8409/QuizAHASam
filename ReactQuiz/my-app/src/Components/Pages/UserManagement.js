import React, {Component} from 'react';
import Header from '../../Components/Include/Header.js';
import LeftBar from './LeftBar';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
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
                this.email=event.target.id;
                var self = this;
        axios.post('http://localhost:5000/api/delete', {email:this.email})
        .then(function(response){
            if(response.data=="Done")
            {
                alert("User Removed Successfully!");
                self.props.history.push('/Dashboard', "1");
                self.props.history.push('/UserManagement', "2");
            }

        else{
            alert("User Can not not be delete!")
        }
                console.log(response.data);
               

            })
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
    let edit = this.state.emails.map((Email, index11) => {
        return (<li> <Link id={Email} onClick={this.handleUser} name="edit" to="UserManagement"> {"Delete"} </Link> </li> );
    });
    let mobile = this.state.mobiles.map((Mobile, index2) => {
        return (<li> {Mobile}</li> );
    });

    let doj = this.state.datesofJoining.map((DOJ, index3) => {
        return (<li> {DOJ}</li> );
    });

    return(
        <div className="container-fluid">
            <Header/>
            <div id="page-wrapper">
    <Row>
    <Col md={3}>
    <LeftBar/>
    </Col>
    <Col md={9}>
        <Row>
        <Col md={12}>
            <h1 className="page-header">User Management</h1>
        </Col>
    </Row>
        <div className="panel panel-default">
            <div className="panel-heading">
            	<i className="fa fa-bar-chart-o fa-fw"></i> Users
                {/*<div className="pull-right">
                                     <div className="btn-group">
                                        <button onClick={this.handleUsers}>Delete All</button>
                                    </div>
                                </div>
                                */}<div className="panel-body">
              		<Row>
                    	<Col md={12}>
                    		<div className="table-responsive">
                        		<table className="table table-bordered table-hover table-striped">
                            	<thead>
                                <tr>
                                    <th>      </th>
                                    <th>Player Id</th>
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
                   	<Row>	
                		<Col md={12}>
                			<div id="morris-bar-chart">
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