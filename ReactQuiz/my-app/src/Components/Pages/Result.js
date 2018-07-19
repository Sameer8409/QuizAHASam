import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import Style from "../../css/Style.css";
import quiz from '../Images/quiz7.jpg';
import Header from '../../Components/Include/Header.js';
export default class Result extends Component{
	constructor(props){
		super(props);
		this.state={
			result:''
		}
	}
	componentWillMount(){
		if(this.props.location.state==undefined)
		{
			this.props.history.push("/");
		}
		else
		{
		let result=[];
		console.log(this.props.location.state[2]);
		let res= this.props.location.state;
		this.setState({
			result:res
		})
	}
	}
	handleUsers = (event) =>{
		this.props.history.push("/Game", this.state.result);
	}
	
	render(){
		let currect=this.state.result[0].map((data, index) => {
			return(<li>{data}</li>)
		});
		let givenAns = this.state.result[1].map((data, index) => {
			return(<li>{data}</li>)
		});
		let score=this.state.result[2];

		
		return(
				<div className="container-fluid">
            <Header/>
            <div id="page-wrapper">
    <Row>
    <Col md={3}>
   <img src={quiz}/>
    </Col>
    <Col md={9}>
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

                                        <button onClick={this.handleUsers}><Link to="/Game">Play Again >>></Link></button>
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
        </Col>
        </Row>
    </div>   
</div>
	);
	}
}

