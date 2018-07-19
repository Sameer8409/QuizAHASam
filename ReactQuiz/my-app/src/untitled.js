Bootstrap
import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
export default class UserManagement extends Component{
render(){
  return(
<body>
<UserManagement/>
  <div id="page-wrapper">
    <Row>
        <Col md={12}>
            <h1 className="page-header">User Management</h1>
        </Col>
    </Row>
        <div className="panel panel-default">
            <div className="panel-heading">
              <i class="fa fa-bar-chart-o fa-fw"></i> Users
                <div className="pull-right">
                  <div className="btn-group">
                  <button>Delete</button>
                    </div>
                </div>
                <div class="panel-body">
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
                                <td>  </td>
                                <td>1 </td>
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
    </div>   
</body>

    );
}
}




App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}  from 'react-router-dom';
import { Route, BrowserHistory}  from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './Components/Pages/Dashboard.js';
import NumberofUsers from './Components/Pages/NumberofUsers.js';
import NumberofTopics from './Components/Pages/NumberofTopics.js';
import UserLogin from './Components/Pages/UserLogin.js';
import Signup from './Components/Pages/Signup.js';
import UserManagement from './Components/Pages/UserManagement.js';
import CreateTopics from './Components/Pages/CreateTopics.js';
import TopicManagement from './Components/Pages/TopicManagement.js';
import CreateQuiz from './Components/Pages/CreateQuiz.js';
import QuizManagement from './Components/Pages/QuizManagement';
import UncategorizedQuiz from './Components/Pages/UncategorizedQuiz.js';
import Header from './Components/Include/Header.js';
import LeftBar from './Components/Pages/LeftBar.js';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
  <div>
  <Route exact path='/UserLogin' component={UserLogin}/>
  <Route exact path='/Signup' component={Signup}/>
  <Route exact path='/Dashboard' component={Dashboard}/>
  <Route exact path='/UserLogin' component={UserLogin}/>
  <Route exact path='/UserManagement' component={UserManagement}/>
  <Route exact path='/CreateTopics' component={CreateTopics}/>
  <Route exact path='/TopicManagement' component={TopicManagement}/>
  <Route exact path='/CreateQuiz' component={CreateQuiz}/>
  <Route exact path='/QuizManagement' component={QuizManagement}/>
  <Route exact path='/UncategorizedQuiz' component={UncategorizedQuiz}/>





  document.getElementById('root'));
registerServiceWorker();



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
class 

export default App;


<div id="page-wrapper">
            <div class="row">
              <div class="col-md-12">
                <h1 class="page-header">Dashboard</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-user fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">25548</div>
                                    <div>Total number of Users</div>
                                </div>
                            </div>
                        </div>
                          <a href="#">
                          <div class="panel-footer">
                            <span class="pull-left">View Details</span>
                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                            <div class="clearfix"></div>
                          </div>
                            </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="panel panel-yellow">
                        <div class="panel-heading">
                            <div class="row">
                              <div class="col-xs-3">
                                  <i class="fa fa-list-ul fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                  <div class="huge">1598</div>
                                        <div>Total number of Topics</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <span class="pull-left">View Details</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
               </div>
            </div>
        