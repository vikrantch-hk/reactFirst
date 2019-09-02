import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter : this.props.clicks
    };

    this.changevalue = this.changevalue.bind(this);
}
  
 changevalue = function(event,props) {
   event.preventDefault();
    this.setState({counter : this.state.counter+1});
    console.log(this.state.counter);
    }
  render(){
  return (
    <div>
    <button type = "button"  onClick={this.changevalue} value={this.state.counter}></button>
    <div>{this.state.counter}</div>
    
      this div has been clicked <h1></h1>
    </div>
  );
  }
}

export default App;
