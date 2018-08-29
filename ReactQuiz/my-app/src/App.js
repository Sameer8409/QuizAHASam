import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import './App.css';
import Play from './Components/Pages/Play';
import Game from './Components/Pages/Game';
import Help from './Components/Pages/Help';
import Terms from './Components/Pages/Terms';
import Signup from './Components/Pages/Signup';
import Logout from './Components/Pages/Logout';
import Result from './Components/Pages/Result';
import PlayAlt from './Components/Pages/PlayAlt';
import Footer from './Components/Include/Footer';
import Aboutus from './Components/Pages/Aboutus';
import LeftBar from './Components/Pages/LeftBar';
import Header from './Components/Include/Header';
import PlayQuiz from './Components/Pages/PlayQuiz';
import Contactus from './Components/Pages/Contactus';
import Reset from './Components/Pages/ResetPassword';
import UserLogin from './Components/Pages/UserLogin';
import Dashboard from './Components/Pages/Dashboard';
import UserResult from './Components/Pages/UserResult';
import AdminLogin from './Components/Pages/AdminLogin';
import Forgot from './Components/Pages/ForgotPassword';
import CreateQuiz from './Components/Pages/CreateQuiz';
import UpdateQuiz from './Components/Pages/UpdateQuiz';
import FirstHeader from './Components/Include/FirstHeader';
import NumberofUsers from './Components/Pages/NumberofUsers';
import NumberofTopics from './Components/Pages/NumberofTopics';
import UserManagement from './Components/Pages/UserManagement';
import QuizManagement from './Components/Pages/QuizManagement';

export default class App extends Component {
  

  render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/' component={UserLogin}/>
        <Route path='/play' component={Play}/>
        <Route path='/help' component={Help}/>
        <Route path='/game' component={Game}/>
        <Route path='/terms' component={Terms}/>
        <Route path='/reset' component={Reset}/>
        <Route path='/header' component={Header}/>
        <Route path='/playAlt' component={PlayAlt}/>
        <Route path='/footer' component={Footer}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/result' component={Result}/>
        <Route path='/forgot' component={Forgot}/>
        <Route path='/aboutus' component={Aboutus}/>
        <Route path='/contactus' component={Contactus}/>
        <Route path='/playQuiz' component={PlayQuiz}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/updateQuiz' component={UpdateQuiz}/>
        <Route path='/adminLogin' component={AdminLogin}/>
        <Route path='/createQuiz' component={CreateQuiz}/>
        <Route path='/userresult' component={UserResult}/>
        <Route path='/firstheader' component={FirstHeader}/>
        <Route path='/userManagement' component={UserManagement}/>
        <Route path='/quizManagement' component={QuizManagement}/>
      </Switch>
      </Router>
    );
  }
}



