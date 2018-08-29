import React, {Component} from 'react';
import {Link} from "react-router-dom"; 
import Style from "../../css/Style.css";
export default class FirstHeader extends Component{
render(){
	return(
    <div id="wrapper">
        <header>
       <nav className="navbar navbar-expand-lg navbar-light bg-danger text-light py-3 main-nav">
          <div className="container">
            <Link className="navbar-brand" to="/"><h2> QuizAHA</h2></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link text-uppercase" to="/Dashboard">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" to="/Aboutus">Aboutus</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" to="/Help">Help</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" to="/contactus">Contact us</Link>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
    </header>
   
            </div>
    );
}
}FirstHeader.js