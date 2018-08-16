import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class NumberofUsers extends Component{
 constructor(props){
    super(props);
    this. state={
        totalUsers: ''

    }
 }

 componentDidMount(){
    var self = this;
    axios.post('http://sameer-intern.hestalabs.com/api/totalUsers', {})
    .then(function(response){
        let data = response.data;
        let NumberofUsers = data.length;
        self.setState({
            totalUsers:NumberofUsers
        }); 
    })
 }
render(){
let total = this.state.totalUsers;
	return(
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
		);
}
}