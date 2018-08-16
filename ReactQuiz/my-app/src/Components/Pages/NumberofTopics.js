import axios from 'axios';
import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
export default class NumberofTopics extends Component{
    constructor(props){
        super(props);
        this.state = { 
            totalTopics: []
        }
    }

    componentDidMount(){
        var self = this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/getQuiz', {})
        .then(function(response){
            let data = response.data;
            let getQuiz = [];
            data.forEach((data)=>{
                getQuiz.push(data.quizName);
            });
            self.setState({
                totalTopics: getQuiz
            });
        })
    }
render(){
    //console.log(this.state.totalTopics.length);
    let NumberofTopics = this.state.totalTopics.length;

	return(
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-list-ul fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge"><h3>{NumberofTopics}</h3></div>
                                        <div>Total number of Quizes</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={{ pathname: '/AdminLogin', state:'4' }}>
                                <div className="panel-footer">
                                    <span className="pull-left">View Details</span>
                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                    <div className="clearfix"></div>
                                </div>
                            </Link>
                        </div>

            
		);
}
}