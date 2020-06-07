import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Logo from "./images/logo.png";
// transparent background 


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
    <div id="mainDiv" >
      
      <label id="trainingTimeLabel" > Training Time 
       </label>
           
      <div class="timerCells">
      <input type="number" class="inputCell" value={this.state.trainingTimeMinutes} onChange={this.setTrainingTimeMinutes} /> 
      <div class="semicolon">:</div> 
      <input type="number" class="inputCell" value={this.state.trainingTimeSeconds} onChange={this.setTrainingTimeSeconds} /> 
      </div>
        
      <br />
      
      
      <label> Break time
       </label>
               
           <div class="timerCells">
      <input type="number" class="inputCell" value={this.state.breakTimeMinutes} onChange={this.setBreakTimeMinutes} /> 
         <div class="semicolon">:</div> 
      <input type="number" class="inputCell"  value={this.state.breakTimeSeconds} onChange={this.setBreakTimeSeconds} /> 
      </div>

      <br />
     
      
      <label> REPETITIONS
       </label>
         
          <div class="timerCells">
      <input type="number" class="inputCell" value={this.state.repetitions} onChange={this.setRepetitions}/> 
 </div>
        
      <br />
         
      <div id="buttonDiv">
          <button 
          // TO DO:
              // add link to Timer Screen and create a Timer Screen Page
              // pass data to it
        >GO </button>
        </div>
      
      <br />

  {/* <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/> */}
      
      <div id="footer">
      <p style={{'font-size': '20px'}}> <b>Interval Training Timer</b> </p>
        <p2 style={{ 'font-size': '10px' }}><i>for the Berolina-Stralau Teams</i></p2>
        {/* <Logo></Logo> */}

</div>

</div>

  );
}
}
export default Settings;
