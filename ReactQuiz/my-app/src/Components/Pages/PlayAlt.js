import axios from 'axios';
import LeftBar from './LeftBar'; 
import React, {Component} from 'react'; 
import { confirmAlert } from 'react-confirm-alert';
import Header from '../../Components/Include/Header.js';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default class PlayAlt extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      questions: [{ name: '' }],
      options:[{name:''}]
    };
  }
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
  handleQuestionChange = (idx) => (evt) => {
    const newQuestions = this.state.questions.map((questions, qidx) => {
      if (idx !== qidx) return questions;
      return { ...questions, name: evt.target.value };
    });

    this.setState({ questions: newQuestions });
  }

  handleOptionChange = (idx) => (evt) => {
    console.log(idx)
    this.handleAddOption(idx);
    const newOptions = this.state.options.map((options, aidx) => {
      if (idx !== aidx) return options;
      return { ...options, name: evt.target.value };

    });

    this.setState({ options: newOptions });
    
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const { name, questions, options } = this.state;
    const x = this.state;
    console.log(this.state);
    var self = this;
    axios.post('http://sameer-intern.hestalabs.com:5000/api/createQuiz', {
      name:this.state.name,
      questions:this.state.questions,
      options:this.state.options
    })
    .then(function(response){
      let text="This quiz is already exists";
      if(response.data=="already exists")
      {
        document.getElementById("quiznameverify").innerHTML=text;
        return false;
      }
      else{
            self.props.history.push('/QuizManagement', "4");
      }
    });
        
    // alert(`Quiz created: ${name} with ${questions.length} ${questions} questions`);
  }
  handleAddOption = () => {
  
    this.setState({
      options:this.state.options.concat([{name:''}])
    });
  }
  handleAddQuestion = () => {
    this.setState({
      questions: this.state.questions.concat([{ name: '' }]),
    });
  }

  handleRemoveQuestion = (idx) => () => {
    this.setState({
      questions: this.state.questions.filter((s, qidx) => idx !== qidx)
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Quiz name, e.g. Movie" onChange={this.handleNameChange} />
        <h2>Questions</h2>

        {this.state.questions.map((question, idx) => (
          <div className="row">
            <div className="col-md-10">
              <div className="question">
                <input type="text" placeholder={`Question #${idx + 1}`}  onChange={this.handleQuestionChange(idx)} />
              </div>
            </div>
            <div className="col-md-2">
              <button type="button" onClick={this.handleRemoveQuestion(idx)} className="small">X</button>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-9">
                <input type="text" placeholder={`Option #${idx + 2}`} onChange={this.handleOptionChange(4*idx)} onBlur={this.handleAddOption} />
              </div> 
              <div className="col-md-3 col-sm-6 col-xs-9">
                <input type="text" placeholder={`Option 2`} onChange={this.handleOptionChange(4*idx + 1)} onBlur={this.handleAddOption} />
              </div> 
              <div className="col-md-3 col-sm-6 col-xs-9">
                <input type="text" placeholder={`Option 3`} onChange={this.handleOptionChange(4*idx + 2)} onBlur={this.handleAddOption}/>
              </div> 
              <div className="col-md-3 col-sm-6 col-xs-9">
                <input type="text" placeholder={`Option 4`} onChange={this.handleOptionChange(4*idx + 3)} onBlur={this.handleAddOption}/>
              </div> 
            </div>
          </div>
        ))}
        <button type="button" onClick={this.handleAddQuestion} className="small">Add Question</button>
        <button>Submit</button>
      </form>
    )
  }
}
