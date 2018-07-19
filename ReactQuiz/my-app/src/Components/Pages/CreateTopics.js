import React, {Component} from 'react';
import Header from '../../Components/Include/Header.js'; 
import LeftBar from './LeftBar.js';
export default class CreateTopics extends Component{
render(){
	return(            
            <div id="container-fluid">
            <Header/>
            <div className="row">
            <div className="col-md-3">
            <LeftBar/>
            </div>
            <div className="col-md-9">
             <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Create Topics</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form role="form">
                                                <div className="form-group">
                                                    <label>Topic Name</label>
                                                    <input className="form-control"/>
                                                    <p className="help-block">Example Movies</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>Upload Image</label>
                                                    <input type="file"/>
                                                </div>
                                                <center>
                                                    <div> 
                                                        <button type="submit" className="btn btn-default">Submit Button</button>
                                                        <button type="reset" className="btn btn-default">Reset Button</button>
                                                    </div>
                                                </center>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}