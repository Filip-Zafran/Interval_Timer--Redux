import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Settings extends React.Component {

constructor(props) {
    super(props);
  this.state = {
    trainingTimeMinutes: 0, trainingTimeSeconds: 0,
    breakTimeMinutes: 0, breakTimeSeconds: 0,
    repetitions: 0,
  };
  this.setTrainingTimeMinutes = this.setTrainingTimeMinutes.bind(this);
  this.setTrainingTimeSeconds = this.setTrainingTimeSeconds.bind(this);
  this.setBreakTimeMinutes = this.setBreakTimeMinutes.bind(this);
  this.setBreakTimeSeconds= this.setBreakTimeSeconds.bind(this);
   this.setRepetitions = this.setRepetitions.bind(this);
  }


  setTrainingTimeMinutes(event) {
    this.setState({ trainingTimeMinutes: parseInt(event.target.value) })
  }
  
  setTrainingTimeSeconds(event) {
    this.setState({ trainingTimeSeconds: parseInt(event.target.value) })
  }
  
    setBreakTimeMinutes(event) {
    this.setState({ breakTimeMinutes: parseInt(event.target.value) })
  }
  
  setBreakTimeSeconds(event) {
    this.setState({ breakTimeSeconds: parseInt(event.target.value) })
  }

  setRepetitions (event) {
    this.setState({ repetitions: parseInt(event.target.value) })
  }



  render () {
  return (
    <div>
      
      <label> Training Time 
       </label>
      
      <input type="number" value={this.state.trainingTimeMinutes} onChange={this.setTrainingTimeMinutes}/> : <input type="number" value={this.state.trainingTimeSeconds} onChange={this.setTrainingTimeSeconds}/> 
      
      <br />
      <br />
      
      
      <label> Break time
       </label>
      
      <input type="number" value={this.state.breakTimeMinutes} onChange={this.setBreakTimeMinutes}/> : <input type="number" value={this.state.breakTimeSeconds} onChange={this.setBreakTimeSeconds}/> 
      
      <br />
      <br />
      
      
      <label> Repetitions
       </label>
      
      <input type="number" value={this.state.repetitions} onChange={this.setRepetitions}/> 
 
      <br />

      <br />
      
          <button
          // TO DO:
              // add link to Timer Screen and create a Timer Screen Page
              // pass data to it

            
          >GO </button>

</div>

  );
}
}
export default Settings;
