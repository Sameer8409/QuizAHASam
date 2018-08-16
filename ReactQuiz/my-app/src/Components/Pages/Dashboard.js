import axios from 'axios';
import ReactDOM from "react-dom";
import LeftBar from './LeftBar.js';
import React, {Component} from 'react'; 
import Pagination from "react-js-pagination";
import NumberofUsers from './NumberofUsers.js';
import NumberofTopics from './NumberofTopics.js';
import Header from '../../Components/Include/Header.js';
export default class Dashboard extends Component{
     constructor(props){
        super(props);
        this.state={
            names: [],
            emails: [],
            mobiles: [],
            activePage:'',
            totalPages:'',
            userDetails:[],
            datesofJoining: []
        }
    }
    handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    let activePage=pageNumber;
    var self = this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/userDetails', {activePage:pageNumber})
        .then(response=>{
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
                activePage:pageNumber,
                names: name,
                emails: email,
                mobiles: mobile,
                datesofJoining: doj

           
            },(err, data)=>{
                {console.log(err)}
            });
            console.log(name);
        })
    }
    componentWillMount(){
        if(localStorage.mydata != "admin@gmail.com")
           {
                this.props.history.push("/");
           }
            var self = this;
            axios.post('http://sameer-intern.hestalabs.com:5000/api/totalUsers', {})
            .then(response=>{
                let totalRecords=response.data.length;
                this.setState({
                    totalPages:totalRecords/5
                })
            });
            axios.post('http://sameer-intern.hestalabs.com:5000/api/userDetails', {activePage:1})
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
                    datesofJoining: doj,
                    activePage:1
                },()=>{
                    {/*console.log("userDetails",self.state.userDetails[0].name)*/}
                });
            })

        }
    
render(){
    let a=(this.state.activePage);
    let index = this.state.names.map((Name, Index) => {
        return (<li>{((a-1)*5)+Index+1}</li> );
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
            <div className="Dashboard">
                <Header/>
        		<div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <LeftBar/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-sm-12">
                                    <h1>Dashboard</h1>
                                    <hr/>
                                </div>
                            </div>
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
                                                 <div>
                                                         <Pagination
                                                           activePage={this.state.activePage}
                                                           itemsCountPerPage={1}
                                                           totalItemsCount={this.state.totalPages}
                                                           pageRangeDisplayed={5}
                                                           onChange={this.handlePageChange.bind(this)}
                                                         />
                                                       </div>
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
        );
    }
}  
