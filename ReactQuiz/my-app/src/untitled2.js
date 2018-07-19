class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


class Colorbutton extends React.Component{
  constructor(){
    super()
    this.state={
      text:"Before click the button"
    };
  }
clicked(text){
  this.setState({text: text })
  console.log('The button was clicked');

}

render(){
  return<div id="red">
  {this.state.text} 
  <button onClick={ (e) => {this.clicked("hello");}}> Red </button>
  </div>
}
}



class Thirdbutton extends React.Component{
  constructor(){
    super()
    this.state={
      text:"The text before click the button"
    };
  }
clicked(text){
  this.setState({text: text })
  console.log('this Button is not clicked yet');

}

render(){
  return<div id="zxy">
  {this.state.text} 
  <button onClick={ (e) => {this.clicked("Now this button is clicked by user");}}> Red </button>
  </div>
}
}



export default Appp;
