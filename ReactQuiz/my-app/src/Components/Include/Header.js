import React, {Component} from 'react';
import {Link} from "react-router-dom"; 
import Style from "../../css/Style.css";
export default class Header extends Component{
render(){
	return(
            <div id="wrapper">
            <div className="container">
            div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="#">QuizAHA!</Link>
                    </div>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <ul className="nav navbar-nav navbar-left navbar-top-links">
                        <li><Link to="#"><i className="fa fa-home fa-fw"></i> Website</Link></li>
                    </ul>
                    <ul className="nav navbar-right navbar-top-links">
                        <li className="dropdown">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="/Logout">
                                <i className="fa fa-user fa-fw"></i> Logout<b className="caret"></b>
                            </Link>
                        
                        </li>
                    </ul>
                </nav>
                </div>
                </div>
                
            </div>
    );
}
}