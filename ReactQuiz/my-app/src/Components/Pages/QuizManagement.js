import axios from 'axios';
import LeftBar from './LeftBar';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Header from '../../Components/Include/Header.js';
export default class QuizManagement extends Component{
constructor(props){
        super(props);
        this.state = { 
            Quizes: [],
            name:[],
            email:''

        }
    }
    
    handleEditQuiz = (event) => {
        event.preventDefault();
        let x = [];
        x[0]=event.target.id;
        x[1]= this.state.email;
        console.log("Id",event.target.id);
        console.log("Value", this.state.email)
        this.props.history.push('/UpdateQuiz', x);
         }
    quizDelete = (event) => {
    event.preventDefault();
    this.name=event.target.id;
    console.log(this.name);
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to delete this Quiz permanently.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.handleDeleteQuiz()
        },
        {
          label: 'No',
          onClick: () => ""
        }
      ]
    })
  };
    handleDeleteQuiz = (event) => {
        var self = this;
        axios.post('http://localhost:5000/api/deleteQuiz', {name:this.name})
        .then(function(response){
            console.log(response.data)
            if(response.data !== undefined)
            {
                self.props.history.push('/Dashboard', "1");
                self.props.history.push('/QuizManagement', "4");
            }

        else{
            alert("Quiz Can not not be delete!")
        }
               

            })
  
    }

    componentWillMount(){
        let e=this.props.location.state;
        if(localStorage.mydata != "admin@gmail.com")
       {
        this.props.history.location("/");
        //window.location="/";
       }
       else{
       this.setState({
            email:e
        })
        var self = this;
        axios.post('http://localhost:5000/api/getQuiz', {})
        .then(function(response){
            let data = response.data;
            let getQuiz = [];
            data.forEach((data)=>{
                getQuiz.push(data.name);
            });
            self.setState({
                Quizes: getQuiz
            });
        })
    }}
render(){
  
    let quizes = this.state.Quizes.map((data, index) => {
        return (<li> {data} </li> );
    });
    let quizId = this.state.Quizes.map((data, index) => {
        return (<li> {index+1} </li> );
    });
    let deleteQuiz = this.state.Quizes.map((data, index) => {
        return (<li> <Link id={data} onClick={this.quizDelete} name="delete" to="quizManagement"> {"Delete"} </Link> </li> );
    });
    let editQuiz = this.state.Quizes.map((data, index) => {
        return (<li> <Link id={index} onClick={this.handleEditQuiz} name="edit" to={{ pathname: '/AdminLogin', state:'6' }}> {"Edit"} </Link> </li> );
    });


	return(
        <div className="quizManagement">
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <LeftBar/>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="colName-md-12">
                                <h1 className="page">Quiz Management</h1>
                                <hr/>
                            </div>
                        </div>                  
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="fa fa-bar-chart-o fa-fw"></i> Quizzes
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>      </th>
                                                    <th>S No.</th>
                                                    <th>Quiz Name</th>
                                                    {/*<th>Topic</th>*/}
                                                    {<th>Modify/Update</th>}
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>      </td>
                                                    <td>{quizId}</td>
                                                    <td>{quizes}</td>
                                                    {/*<td>jbgfishj@gmail.com</td>*/}
                                                    <td> {editQuiz} </td>
                                                    <td>  {deleteQuiz}   </td>
                                                </tr>
                                                                                                
                                            </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div id="morris-bar-chart">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
	}
}