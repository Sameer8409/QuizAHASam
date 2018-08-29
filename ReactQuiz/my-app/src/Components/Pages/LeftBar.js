import {Link} from "react-router-dom";
import React, {Component} from 'react';
export default class LeftBar extends Component{
    constructor(props){
        super(props);
        this.state={
            abc:''
        }
    }
render(){
        return(
            <div className="leftbar">
                <div className="navbar navbar-inverse sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav" id="side-menu">
                            <li>
                                <Link to={{ pathname: '/AdminLogin', state:'1' }} className="active"><i className="fa fa-tachometer"></i>  Dashboard </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/AdminLogin', state:'2' }}><i className="fa fa-user"></i>  User Management</Link>
                            </li>
                            <li>
                             <i className="fa fa-question"></i> <strong> Quiz Management</strong><span className="fa arrow"></span>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <Link to={{ pathname: '/AdminLogin', state:'3' }}>Create quiz</Link>
                                    </li>
                                    <li>
                                        <Link to={{ pathname: '/AdminLogin', state:'4' }}>Check existing quizzes</Link>
                                    </li>
                                    <li>
                                        <Link to={{ pathname: '/AdminLogin', state:'5' }}>Play Game</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            );
        }
    }