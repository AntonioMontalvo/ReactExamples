//Include React dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//Remember that JavaScript expressions are embedded in JSX using curly braces.
//We can declare and add variables into our elements with JSX.
var favBeer = "Mc Leod's Better Days";
var location = "Van Nuys";
var numOfBeers = 1 + 1;
var element = "{What ever you see in curly braces like me is an embedded expression.}";

class Wine extends React.Component {
	constructor (props){
		super(props);
		this.state = {
	      lightBodied : "Pinot Noir 2015",
	      sweet : "Riesling",
	      mediumBodied : "Syrah",
	      dryAndRich : "Chardonay 2016"
    	}
	}
	render(){
    	return <div className="wine">
    			<h2>Hi I'm the 'Wine' Component</h2>
    		   	<p>Welcome to the Wine Club. We are proud to present our {this.state.mediumBodied} and {this.state.dryAndRich}.</p>
    		   </div>
	}
}

//We can define another component that will refer to the Wine component in its output.
class Favorites extends React.Component {
	render(){
	    return (
	      <div className="favorites">

	      	<h1>I'm the 'Main' component. I render the 'Wine' and 'Person' components.</h1>
	      	<h2>Santa Maria's Wine Company. Heading for the 'Wine' component.</h2>
	      	<Wine/>
	      	<h2>Comments about our guests. Heading for the 'Person' component</h2>
	      	<Person name = "Mary" opinion = "tempranillo 2015"/>	      	
	      </div>
      );
	}
}

//And yet another component, this time not using an  ES6 class. It will be used by the Wine Component.
//To reuse code between components we use the special {props.children} to pass arbitrary children elements to them.
function Person (props) {
	return (
		<div className="person">
			<h2>I'm the 'Person' component.</h2>
			<p>Hi, my name is {props.name} and I love {props.opinion}.</p>
			{props.children}
			<p>The sentence above was constructed with values given to me from the Favorites component using props.children</p>
		 </div>
	);
}

ReactDOM.render(
  <div className="beer">
  	<h1>ReactDOM.()</h1>
  	<p>It renders an element and all other elements contained within this root element. Like me!</p>
    <p>I'm another element. My favorite beer is {favBeer}, Mc Leod's brewery is located in {location}.</p>
    <p>{element}</p>
    <p>All elements redered until now are not components. Pay attention to how the following components are nested.</p>
    <Favorites />
    <h6>*I know this looks kind of bland but we'll fix that next.</h6>
  </div>,
  document.getElementById("app")
); 

