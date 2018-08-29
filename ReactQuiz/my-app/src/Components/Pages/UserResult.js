import axios from 'axios';
import React, {Component} from 'react'; 
export default class UserResult extends Component{
    constructor(props){
        super(props);
        this.state={
            x: ''
        }
    }
    componentWillMount(){ 
        console.log("Will",this.props.location.state)
         if(localStorage.mydata === "null" && localStorage.mydata != "admin@gmail.com")
        {
            this.props.history.push("/")
        }
        else{
            if(this.props.location.state===undefined)
            {
                this.props.history.push("/Play")
            }
            else{
                let x=[];
                x.push(this.props.location.state[0]);//Quiz number
                x.push(this.props.location.state[1]);//User Id
                x.push(this.props.location.state[2]+1); //Next Question Number
                x.push(this.props.location.state[3]); //Score
                x.push(this.props.location.state[4]); //Answer True / False
                x.push(this.props.location.state[5]); //Total length questions
                x.push(this.props.location.state[6]); //Quiz Name
                if(x[1]==undefined)
                {
                    this.props.history.push("/Game");
                }
                this.setState({
                            x:x
                });
            }
        }    
    }
    handlNext=(event)=>{
        console.log(this.state.idx);
        console.log(event.target.value);
        console.log(this.props.history.location);
        this.props.history.replace("/PlayQuiz", this.state.x)
    }
    handlAgain=(event)=>{
        var self = this;
        axios.post('http://sameer-intern.hestalabs.com:5000/api/userRecord', {
            email:localStorage.mydata,
            quizName: this.state.x[6],
            total_score:this.state.x[3]
        })
        .then(function (response) {
        })
        .catch(function(err){
            console.log("error");    
        });
        this.props.history.replace("/Game", this.state.x)
    }
    render(){
        let answer='' 
        let ans='';
        let end='';
        if(this.state.x[4]===1)
        {
            answer="Right answer"
        }
        else{
            if(this.state.x[4]===0)
            {
                answer="Wrong Answer"
            }
        }
        if(this.state.x[2]==this.state.x[5])
        {
        end = <form method="post" name="handleform" onSubmit={this.submit}>
                <div className="PlayQuiz">
                    <label><h2>Quiz Aaha!</h2></label>
                </div>
                <div className="slidePlay">
                    <div className="card-header">
                        {answer}
                    </div>
                    <div className="card-body">
                        <center><div className="over"><h1>GAME OVER</h1></div>
                                <div className="final-result">You have played total {this.state.x[2]} questions</div>
                                <div className="final-result"><strong> You scored {this.state.x[3]}/{this.state.x[2]} </strong></div>
                        </center>
                        <div className="submit-game">
                            <div className="row">
                                <div className="col-md-12">
                                    <button type = "button" onClick={this.handlAgain} className="btn btn-primary btn-lg btn-block" ><center>Play Again</center></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </form>   
        }
        else{
            if(this.state.x[2]<this.state.x[5])
            {
            ans =  <form method="post" name="handleform" onSubmit={this.submit}>
                    <div className="PlayQuiz">
                        <label><h2>Quiz Aaha!</h2></label>
                    </div>
                    <div className="slidePlay">
                        <div className="card-header">
                       {answer}
                        </div>
                        <div className="card-body">
                            <label className="submit-card" ref="question1" name="questioninsert"><strong> You have played {this.state.x[2]} questions </strong></label>
                            <label className="submit-card" ref="question1" name="questioninsert"><strong> Your current score {this.state.x[3]} </strong></label>
                            <div className="submit-game">
                                <div className="row">
                                    <div className="col-md-12">
                                        <button type = "button" onClick={this.handlNext} className="btn btn-default btn-lg btn-block" ><center>Next</center></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </form>
            } 
        }
    	return(
            <div className="playquiz">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="Slidepanel">
                                {ans}
                                {end}
                            </div>  
                        </div>  
                    </div>
                </div>
                <footer>
                </footer>
            </div>
        );
	}
}
