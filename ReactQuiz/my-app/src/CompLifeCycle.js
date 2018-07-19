import React, {Component} from 'react';	
export default class CompLifeCycle extends Component{
	
	constructor(props){
			super(props);
			this.state={
				count:0
			}
			console.log("Constructor");
		}
		incCount = () => {
			this.setState({
		count:this.state.count + 1
	})
		}
	componentDidMount(){
		console.log("Did Mount");	
		}
	shouldComponentUpdate(){
			if(this.state.count > 5){
				return false;
			}
			return true;
		}
		
	componentWillMount(){
		console.log("Will Mount");	
		}

	render(){
		console.log("render");
	return(
		<section>
		{this.state.count}
		<button onClick={this.incCount}> Increment </button>
		</section>
			);
	}

}  
