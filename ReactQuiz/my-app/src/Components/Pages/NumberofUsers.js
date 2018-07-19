import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class NumberofUsers extends Component{
 constructor(props){
    super(props);
    this. state={
        totalUsers: ''

    }
 }

 componentDidMount(){
    var self = this;
    axios.post('http://localhost:5000/api/userDetails', {})
    .then(function(response){
        let data = response.data;
        let NumberofUsers = data.length;
        self.setState({
            totalUsers:NumberofUsers
        }); 
    })
 }
render(){
    console.log(this.state.totalUsers);
let total = this.state.totalUsers;
	return(
		<div className="NumberofUsers">
                    <div className="col-lg-6 col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-user fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge"><h3>{total}</h3> </div>
                                        <div>Total number of Users</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={{ pathname: '/AdminLogin', state:'2' }}>
                                <div className="panel-footer">
                                    <span className="pull-left">View Details</span>
                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                    <div className="clearfix"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>

		);
}
}