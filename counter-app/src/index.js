import React from 'react';
import ReactDOM from 'react-dom';
let parentNode = document.getElementById('root');


class Main extends React.Component{
  constructor(){
    super();
    this.state = {value:0}
  }

  render(){
    return (
      <div>
        <button onClick={()=> this.setState({value: this.state.value+1})}>Ok</button>
         <label>label is: {this.state.value}</label>
      </div>
     )
  }
}

ReactDOM.render(<Main/>, parentNode);

