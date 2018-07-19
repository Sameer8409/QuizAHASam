import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Play from './Components/Pages/Play';
import Game from './Components/Pages/Game';
import Dashboard from './Components/Pages/Dashboard';
import NumberofUsers from './Components/Pages/NumberofUsers';
import NumberofTopics from './Components/Pages/NumberofTopics';
import UserLogin from './Components/Pages/UserLogin';
import Signup from './Components/Pages/Signup';
import UserManagement from './Components/Pages/UserManagement';
import CreateTopics from './Components/Pages/CreateTopics';
import TopicManagement from './Components/Pages/TopicManagement';
import CreateQuiz from './Components/Pages/CreateQuiz';
import QuizManagement from './Components/Pages/QuizManagement';
import PlayQuiz from './Components/Pages/PlayQuiz';
import UncategorizedQuiz from './Components/Pages/UncategorizedQuiz';
import Header from './Components/Include/Header';
import LeftBar from './Components/Pages/LeftBar';
import Result from './Components/Pages/Result';
import Forgot from './Components/Pages/ForgotPassword';
import Reset from './Components/Pages/ResetPassword';
import Logout from './Components/Pages/Logout';
import AdminLogin from './Components/Pages/AdminLogin';

export default class App extends Component {
  

  render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/' component={UserLogin}/>
        <Route path='/LeftBar' component={LeftBar}/>
        <Route path='/Header' component={Header}/>
        <Route path='/Signup' component={Signup}/>
        <Route path='/Play' component={Play}/>
        <Route path='/Game' component={Game}/>
        <Route path='/PlayQuiz' component={PlayQuiz}/>
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path='/UserManagement' component={UserManagement}/>
        <Route path='/CreateTopics' component={CreateTopics}/>
        <Route path='/TopicManagement' component={TopicManagement}/>
        <Route path='/CreateQuiz' component={CreateQuiz}/>
        <Route path='/QuizManagement' component={QuizManagement}/>
        <Route path='/UncategorizedQuiz' component={UncategorizedQuiz}/>
        <Route path='/Result' component={Result}/>
        <Route path='/Forgot' component={Forgot}/>
        <Route path='/Reset' component={Reset}/>
        <Route path='/Logout' component={Logout}/>
        <Route path='/AdminLogin' component={AdminLogin}/>
      </Switch>
      </Router>


    );
  }
}



