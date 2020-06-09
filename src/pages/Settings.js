import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from "../images/logo.png";
import Plus from "../images/plus.png";
import Minus from "../images/minus.png";
import TimerScreen from "../pages/TimerScreen"


class Settings extends React.Component {

constructor(props) {
    super(props);
  this.state = {
    trainingTimeMinutes: '00', trainingTimeSeconds: '00',
    breakTimeMinutes: '00', breakTimeSeconds: '00',
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
    <div className="mainDiv" >

         <div id="header">
     Interval Training Timer
       </div>
        
        <hr className="horzLine"/>
      
      <label id="trainingTimeLabel" > TRAINING TIME 
       </label>
      
    {/* // BACKGROUND PICTURE  */}
          <img
            className="logoImg"
            style={{
              width: "100%",
              opacity: "0.07",
                    position: "absolute",
                  zIndex: "1"
                          }}
            src={Logo}
            alt="berolina-stralau logo"
        />             
      
    
    
      <div class="timerCells">

    

          <img
            className="minusImg"
            style={{
              width: "5%",
                            }}
            src={Minus}
            alt="minus symbol"
          />
          
       

     
    
        <div className="innerTimerCells">
      <input type="number" className="inputCell" value={this.state.trainingTimeMinutes} onChange={this.setTrainingTimeMinutes} /> 
      <div className="semicolon">:</div> 
      <input type="number" className="inputCell" value={this.state.trainingTimeSeconds} onChange={this.setTrainingTimeSeconds} /> 
        </div>
        
        <img
            className="plusImg"
            style={{
              width: "5%",
                            }}
            src={Plus}
            alt="plus symbol"
          />
        



        </div> 
      <br/>
            


      <label> BREAK 
       </label>
                 
      <div className="timerCells">
        
<div>
          1
        </div>

         <div className="innerTimerCells">
      <input type="number" className="inputCell" value={this.state.breakTimeMinutes} onChange={this.setBreakTimeMinutes} /> 
         <div className="semicolon">:</div> 
      <input type="number" className="inputCell"  value={this.state.breakTimeSeconds} onChange={this.setBreakTimeSeconds} /> 
        </div>
        


      </div>

      <br />
     
      
      <label> REPETITIONS
       </label>
         
      <div className="timerCells">
        
        <div>
          1
        </div>

        <div className="innerTimerCells">
      <input type="number" className="inputCell" value={this.state.repetitions} onChange={this.setRepetitions}/> 
</div>
          
        <div>
          3
        </div>

      </div>
        
      <br />
         
      <div id="buttonDiv">
       
                             {/* // TO DO:
              // add link to Timer Screen and create a Timer Screen Page
              // pass data to it */}
          
        <Link to="/TimerScreen.js"
        id="goButton">GO</Link>
                 
        </div>
      
      <br />
      
  <hr className="horzLine"/>
      
{/* BEEP SETTINGS / variable or fixed ?  */}

      <div id="footer">
             © Berolina-Futsal Team 2020
       </div>

</div>

  );
}
}
export default Settings;
