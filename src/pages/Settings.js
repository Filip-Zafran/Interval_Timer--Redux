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
import Timer from "../images/timer.png";
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
    
    <div class="mainDiv" >

         <div id="header">
              <img
            id="timerImg"
                    src={Timer}
            alt="timer symbol"
          />
        
      &nbsp;
           &nbsp;Interval Training Timer&nbsp;&nbsp;
         
         
          <img
            id="timerImg"
                    src={Timer}
            alt="timer symbol"
          />
       </div>
        
        <hr class="horzLine"/>
      
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
            id="minusImgTT"
                    src={Minus}
            alt="minus symbol"
          />
          
                
        <div className="innerTimerCells">
      <input type="number" className="inputCell" value={this.state.trainingTimeMinutes} onChange={this.setTrainingTimeMinutes} /> 
      <div className="semicolon">:</div> 
      <input type="number" className="inputCell" value={this.state.trainingTimeSeconds} onChange={this.setTrainingTimeSeconds} /> 
        </div>
        
        <img
            id="plusImgTT"
                      src={Plus}
            alt="plus symbol"
          />
        
        </div> 
      <br/>
            


      <label> BREAK 
       </label>
                 
      <div className="timerCells">
        
   <img
            id="minusImgTT"
                    src={Minus}
            alt="minus symbol"
          />

         <div className="innerTimerCells">
      <input type="number" className="inputCell" value={this.state.breakTimeMinutes} onChange={this.setBreakTimeMinutes} /> 
         <div className="semicolon">:</div> 
      <input type="number" className="inputCell"  value={this.state.breakTimeSeconds} onChange={this.setBreakTimeSeconds} /> 
        </div>
        
  <img
            id="plusImgTT"
                      src={Plus}
            alt="plus symbol"
          />

      </div>

      <br />
     
      
      <label> REPETITIONS
       </label>
         
      <div className="timerCells">

          <img
            id="minusImgTT"
                    src={Minus}
            alt="minus symbol"
          />

        <div className="innerTimerCells">
      <input type="number" className="inputCell" value={this.state.repetitions} onChange={this.setRepetitions}/> 
</div>
          
 <img
            id="plusImgTT"
                      src={Plus}
            alt="plus symbol"
          />

      </div>
        
      <br />
         
      <div id="buttonDiv">
              
                  <Link to="/TimerScreen"
        id="goButton">GO</Link>
                
        </div>
            <br />

       
      <div id="beepSettings">
          <h2>SOUND SETTINGS </h2>

                    <div class="beepDiv">
        <label class="beepLabel"> SOUND ON:      </label>
            <input class="beepCheckbox" type="checkbox"></input>
          </div>

             <div class="beepDiv">
          <label class="beepLabel"> HALF TIME MARK:      </label>
              <input class="beepCheckbox" type="checkbox"></input>
          </div>

              <div class="beepDiv">
          <label class="beepLabel"> 30sec MARK:   </label>
              <input class="beepCheckbox" type="checkbox"></input>
          </div>

              <div class="beepDiv">
          <label class="beepLabel"> 20sec MARK:      </label>
              <input class="beepCheckbox" type="checkbox"></input>
          </div>

              <div class="beepDiv">
          <label class="beepLabel"> 10sec MARK:     </label>
              <input class="beepCheckbox" type="checkbox"></input>
          </div>

              <div class="beepDiv">
          <label class="beepLabel"> 10sec COUNTDOWN:      </label>
              <input class="beepCheckbox" type="checkbox"></input>
          </div>

                <div class="beepDiv">
          <label class="beepLabel"> MOTIVATION SHOUT:    </label>
              <input class="beepCheckbox" type="checkbox"></input>
          </div>
      
            </div>

            <br />
      
  <hr class="horzLine"/>

      <div id="footer">
             © Berolina-Futsal Team 2020
       </div>

</div>

  );
}
}
export default Settings;
