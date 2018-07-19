import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Include/Header.js';
import LeftBar from './LeftBar';
export default class QuizManagement extends Component{
constructor(props){
        super(props);
        this.state = { 
            Quizes: [],
            quizName:''
        }
    }
    handlequiz = (event) => {
        
        this.quizName = event.target.id;
        var self = this;
        axios.post('http://localhost:5000/api/deleteQuiz', {quizName:this.quizName})
        .then(function(response){
            console.log(response.data);
            if(response.data=="Done")
            {
                alert("Quiz Removed Successfully!");
                self.props.history.push('/QuizManagement');
            }

        else{
            alert("Quiz Can not not be delete!")
        }
               

            })
  
    }

    componentDidMount(){
        if(this.props.location.state == undefined)
       {
        this.props.history.push("/")
       }
        var self = this;
        axios.post('http://localhost:5000/api/getQuiz', {})
        .then(function(response){
            let data = response.data;
            let getQuiz = [];
            data.forEach((data)=>{
                getQuiz.push(data.quizName[0].quizName);
            });
            self.setState({
                Quizes: getQuiz
            });
        })
    }
render(){
  
    let quizes = this.state.Quizes.map((data, index) => {
        return (<li> {data} </li> );
    });
    let quizId = this.state.Quizes.map((data, index) => {
        return (<li> {index+1} </li> );
    });
    let editQuiz = this.state.Quizes.map((data, index) => {
        return (<li> <Link id={data} onClick={this.handlequiz} name="edit" to="quizManagement"> {"Delete"} </Link> </li> );
    });

	return(
            <div className="container-fluid">
                <Header/>
                <div className="row">
                    <div className="col-md-3">
                        <LeftBar/>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="colName-md-12">
                                <h1 className="page">Quiz Management</h1>
                            </div>
                        </div>                  
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="fa fa-bar-chart-o fa-fw"></i> Quizzes
                                {/*<div className="pull-right">
                                                                    <div className="btn-group">
                                                                        <button>Delete</button>
                                                                    </div>
                                                                </div>*/}
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>      </th>
                                                    <th>Quiz Id</th>
                                                    <th>Quiz Name</th>
                                                    {/*<th>Topic</th>*/}
                                                    {/*<th>Last modified on</th>*/}
                                                    {/*<th>Action</th>*/}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>      </td>
                                                    <td>{quizId}</td>
                                                    <td>{quizes}</td>
                                                    {/*<td>jbgfishj@gmail.com</td>*/}
                                                    {/*<td>684561654</td>*/}
                                                    {/*<td>  {editQuiz}   </td>*/}
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
        );
	}
}