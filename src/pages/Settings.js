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



class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trainingTimeMinutes: '00', trainingTimeSeconds: '00',
      breakTimeMinutes: '00', breakTimeSeconds: '00',
      repetitions: 0,
      sound: false,
      // fontOpacity: 0.4,
    };
    this.setTrainingTimeMinutes = this.setTrainingTimeMinutes.bind(this);
    this.setTrainingTimeSeconds = this.setTrainingTimeSeconds.bind(this);
    this.setBreakTimeMinutes = this.setBreakTimeMinutes.bind(this);
    this.setBreakTimeSeconds = this.setBreakTimeSeconds.bind(this);
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
        
        <hr className="horzLine"/>
      
      <label id="trainingTimeLabel" > TRAINING TIME 
       </label>
      
    {/* // BACKGROUND PICTURE  */}
          <img
            className="logoImg"
            src={Logo}
            alt="berolina-stralau logo"
        />             
      
    
    
      <div className="timerCells">

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
        className="goButton">GO</Link>
                
        </div>
            <br />

       
      <div id="beepSettings">
          <h2>SOUND SETTINGS </h2>

          <div className="beepDiv">
            <label className="beepLabel" className="beepLabelOn"  id="labelSound" > <u>SOUND ON:</u></label>
            <input
              id="checkboxSound"
              className="beepCheckbox"
              type="checkbox"
              onClick={(e) => this.setState({ sound: e.target.checked})}
            />
            {/* fontOpacity: e.target.checked  */}
          </div>

             <div className="beepDiv">
          <label className="beepLabel" className="beepLabelOn" > &nbsp;&nbsp;HALF TIME MARK:      </label>
            <input disabled={!this.state.sound} id="checkboxHalf" className="beepCheckbox2" type="checkbox"></input>
         {/* && !this.state.fontOpacity */}
          </div>

              <div className="beepDiv">
          <label className="beepLabel" className="beepLabelOn"> &nbsp;&nbsp;30sec MARK:   </label>
              <input disabled={!this.state.sound} id="checkbox30"  className="beepCheckbox" type="checkbox"></input>
          </div>

              <div className="beepDiv">
          <label className="beepLabel" className="beepLabelOn"> &nbsp;&nbsp;20sec MARK:      </label>
              <input disabled={!this.state.sound} id="checkbox20"  className="beepCheckbox2" type="checkbox"></input>
          </div>

              <div className="beepDiv">
          <label className="beepLabel" className="beepLabelOn"> &nbsp;&nbsp;10sec MARK:     </label>
              <input disabled={!this.state.sound} id="checkbox10"  className="beepCheckbox" type="checkbox"></input>
                   </div>

              <div className="beepDiv">
          <label className="beepLabel" className="beepLabelOn"> &nbsp;&nbsp;10sec COUNTDOWN:      </label>
              <input disabled={!this.state.sound} id="checkboxCountdown" className="beepCheckbox2" type="checkbox"></input>
          </div>

                <div className="beepDiv">
          <label className="beepLabel" className="beepLabelOn"> <i>&nbsp;&nbsp;MOTIVATION SPEACHES </i>    </label>
              <input disabled={!this.state.sound} id="checkboxMotivational"   className="beepCheckbox" type="checkbox"></input>
          </div>
      
            </div>

            <br />
      
  <hr className="horzLine"/>

        <div id="footer">
           
             © Berolina-Stralau Futsal Team 2020
               
       </div>

</div>

  );
}
}
export default Settings;
