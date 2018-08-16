import React, {Component} from 'react';
import {Link} from "react-router-dom"; 
import Style from "../../css/Style.css";
export default class Footer extends Component{
    
render(){
    return(
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-3 col-xs-6">
                    <i className="fa">&#xf1f9;</i>QuizAHA Copyright
                </div>
                <div className="col-md-5 col-sm-4 col-xs-6">
                    <div className="icons">
                        <Link to="#" className="fa fa-facebook"></Link>
                        <Link to="#" className="fa fa-twitter"></Link>
                        <Link to="#" className="fa fa-instagram"></Link>
                    </div>
                </div>
                <div className="col-md-3 col-sm-5 col-xs-12">
                    <i className="fa">&#xf1f9;</i> 2017 quizGame.org. All rights reserved
                </div>
            </div>
        </div>
    </footer>
    );
}
}