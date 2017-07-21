import React from 'react';
import ReactDOM from 'react-dom';
let parentNode = document.getElementById('root');


class Main extends React.Component{
  constructor(){
    super();
    this.state = {counter:0}
  }

  render(){
    return (
      <div>
        <button onClick={()=> this.setState({counter: this.state.counter+1})}>Ok</button>
         <label>label is: {this.state.counter}</label>
      </div>
     )
  }
}

ReactDOM.render(<Main/>, parentNode);

