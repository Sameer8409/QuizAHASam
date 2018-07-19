import React, {Component} from 'react';
import Header from '../../Components/Include/Header.js';
import LeftBar from './LeftBar.js';
export default class TopicManagement extends Component{
    render()
    {
	return(
        <div id="page-wrapper">
        <Header/>
        <div className="row">
        <div className="col-md-3">
        <LeftBar/>
        </div>
        <div className="col-md-9">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Topic Management</h1>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-bar-chart-o fa-fw"></i> Topics
                    <div className="pull-right">
                        <div className="btn-group">
                            <button>Delete</button>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>      </th>
                                                <th>Topic Id</th>
                                                <th>Topic Name</th>
                                                <th>No. of quizzes</th>
                                                <th>Last modified on</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>      </td>
                                                <td>1</td>
                                                <td>Sunil</td>
                                                <td>jbgfishj@gmail.com</td>
                                                <td>684561654</td>
                                                <td>     </td>
                                            </tr>
                                            <tr>
                                                <td>   </td>
                                                <td>2</td>
                                                <td>Sameer</td>
                                                <td>sdvsdfv@gmail.com</td>
                                                <td>6565265</td>
                                                <td>      </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div id="morris-bar-chart"></div>
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