import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

constructor(props) {
    super(props);
  this.state = {
    trainingTimeMinutes: 0, trainingTimeSeconds: 0,
    breakTimeMinutes: 0, breakTimeSeconds: 0,
  repetitions : 0,};
  }

  render () {
  return (
    <div>
      
      <label> Training Time 
       </label>
      
      <input type="number" /> : <input type="number" /> 
      
      <br />
      <br />
      
      
      <label> Break time
       </label>
      
      <input type="number" /> : <input type="number" /> 
      
      <br />
      <br />
      
      
      <label> Repeatitions
       </label>
      
      <input type="number"/> 
 
      <br />

      <br />
      
<button>GO </button>

</div>

  );
}
}
export default App;
