//Include React dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//define the class, add constructor, super() and state. Within state we initialize some properties
//we also initialize two methods and use bind(this) to bind this to the instance.
class Color extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			favorite:"red",
			divStyle: {
				"width": "85%",
				"height": "100px"
			},
			value: "blue"
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick =this.handleClick.bind(this);
	}

	handleClick(e){//this method is to demonstrate a button
		e.preventDefault();
		console.log("I've been cliked");
	}

	handleChange(event) {//here we use setState to update value
	//we use event.target.value to grab the value of an input, in this case for the color
		this.setState({value: event.target.value});
	}
	

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h1>Welcome back Bootstrap</h1>
						<p>As I said before things were going to visually change. Now we bring boostrap into the mix.</p>
						<p>Pay close attention to the syntax. The main thing is that now we are force to use <mark>className</mark> for the class attribute.</p>
						<p>The default color is blue. Every time you change the color and submit the state of the Color component will be updated and the change will update the UI as well.</p>
					</div>
					<div className="col-md-6">
					<h3>Select your color here</h3>
							{/*The use of onChange is boilerplate*/}
							<input  type="color"  id="guestColor" onChange={this.handleChange}/>
					<h3>See it change right away</h3>
						{/*in-line style in React*/}
						<div id="new-color" style={{"backgroundColor":this.state.value, "width": this.state.divStyle.width, "height": this.state.divStyle.height}}></div> 
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<h1>A simple button</h1>
						<button type="button"	className="bt btn-success" onClick={this.handleClick}>Click Me and go to console.</button>
					</div>
				</div>
			</div>
			);
	}
}

ReactDOM.render(
	<div>
		<Color/>
	</div>,
	document.getElementById("app")
	)