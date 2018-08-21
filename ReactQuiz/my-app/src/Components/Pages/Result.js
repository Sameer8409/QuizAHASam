import axios from 'axios';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react'; 
import Header from '../../Components/Include/Header.js';
import Footer from '../../Components/Include/Footer.js'; 
export default class Result extends Component{
	constructor(props){
		super(props);
		this.state={
			result:''
		}
	}
	componentWillMount(){
        console.log("Hello", this.props.location);
		if(localStorage.mydata === "null" && localStorage.mydata != "admin@gmail.com")
        {
            window.location="/";
        }
        else{
            if(this.props.location.state===undefined)
            {
                window.location="/Play";
            }
            else{
        		let result=[];
        		console.log(this.props.location.state[2]);
        		let res= this.props.location.state;
        		this.setState({
        			result:res
        		})
	        }
    	}
    }
	handleUsers = (event) =>{
		this.props.history.push("/Play");
	}
	
	render(){
        console.log("render")
		let currect=this.state.result[0].map((data, index) => {
			return(<li>{data}</li>)
		});
		let givenAns = this.state.result[1].map((data, index) => {
			return(<li>{"A"+(index+1)+": "}  <strong>{data}</strong></li>)
		});
        console.log("Result", this.state.result[1]);
		let score=this.state.result[2];
        return(
            <div id="page-wrapper">
                <Header/>
        	    <div className="container-fluid">
                    <Row>
                        <Col md={12}>
                            <h1 className="page-header">Score Board</h1>
                        </Col>
                    </Row>
                    <div className="panel panel-default">
                        <div className="panel-heading">
            	            <i className="fa fa-bar-chart-o fa-fw"></i> Result
                            <div className="pull-right">
                                 <div className="btn-group">
                                    <button className="btn btn-success" onClick={this.handleUsers}><Link to="/Game">Play Again </Link></button>
                                </div>
                            </div>
                            <div className="panel-body">
              		            <Row>
                    	           <Col md={12}>
                    		          <div className="table-responsive">
                        		           <table className="table table-bordered table-hover table-striped">
                                	           <thead>
                                                    <tr>
                                                        <th>      </th>
                                                        <th>Your Answers</th>
                                                        <th>Currect Answers</th>
                                                        <th>Your Score</th>
                                                    </tr>
                                	            </thead>
                               		            <tbody>
                                	                <tr>
                                		                <td>	</td>
                                		                <td>{givenAns}</td>
                                		                <td><strong>{currect}</strong></td>
                                                        <td><strong>{score}</strong>/60</td>
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
                <Footer/>  
            </div>
	   );
	}
}

