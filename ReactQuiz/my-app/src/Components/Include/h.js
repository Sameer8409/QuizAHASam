import React, {Component} from 'react';
import {Link} from "react-router-dom"; 
import Style from "../../css/Style.css";
export default class Header extends Component{
render(){
	return(
    <div id="wrapper">
        <header>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3 col-sm-3 col-xs-2">
                    <h2> QuizAHA</h2> 
                </div>
                <div className="col-md-6 col-sm-9 col-xs-10">
                    <nav>
                        <ul>
                            <li><Link to="/Dashboard">Home</Link></li>
                            <li><Link to="/Aboutus">Upcomming</Link></li>
                            <li><Link to="/Game">Games</Link></li>
                            <li><Link to="/Help">Help</Link></li>
                            <li><Link to="/contactus">Contact us</Link></li>
                            <li><Link className="btn btn-success" to="/Logout">
                                <i className="fa fa-user fa-fw"></i> Logout <b className="fa fa-sign-out"></b>
                              </Link>                        
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>  
        </div>
    </header>
   
            </div>
    );
}
}


{/*First Header*/}

import React, {Component} from 'react';
import {Link} from "react-router-dom"; 
import Style from "../../css/Style.css";
export default class FirstHeader extends Component{
render(){
    return(
    <div id="wrapper">
        <header>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-3 col-xs-2">
                    <h2> QuizAHA</h2> 
                </div>
                <div className="col-md-6 col-sm-9 col-xs-10">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Aboutus">About us</Link></li>
                            <li><Link to="/Help">Help</Link></li>
                            <li><Link to="/contactus">Contact us</Link></li>
                            <li><Link className="btn btn-success" to="/Dashboard">
                                <i className="fa fa-user fa-fw"></i> Back to home <b className="fa fa-sign-in"></b>
                              </Link>                        
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>  
        </div>
    </header>
   
            </div>
    );
}
}FirstHeader.js