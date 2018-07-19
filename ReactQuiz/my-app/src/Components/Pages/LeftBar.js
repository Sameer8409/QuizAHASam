import React, {Component} from 'react';
import {Link} from "react-router-dom";
export default class LeftBar extends Component{
    constructor(props){
        super(props);
        this.state={
            abc:''
        }
    }
    
render(){
    	return(
                <div className="navbar-default sidebar navigation" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav" id="side-menu">
                            <li>
                                <Link to={{ pathname: '/AdminLogin', state:'1' }} className="active"><i className="fa fa-tachometer"></i>  Dashboard </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/AdminLogin', state:'2' }}><i className="fa fa-user"></i>  User Management</Link>
                            </li>
                            {/*<li>
                                                            <a href="#"><i className="fa fa-list-ul"></i>   Topic Management<span className="fa arrow"></span></a>
                                                            <ul className="nav nav-second-level">
                                                                <li>
                                                                    <Link to="/CreateTopics">Create topic</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/TopicManagement">Check existing topics</Link>
                                                                </li>
                                                            </ul>
                                                        </li>*/}
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
                                        <span><strong>Note:-</strong><p>If you choose to play Game you can not come back to the Dashboard.</p>
                                        <p>If you want to come back to the Dashboard you have to Login again.</p>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            );
}
}