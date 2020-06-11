import React from 'react';
import Logo from "../images/logo.png";
import Timer from "../images/timer.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class PauseScreen extends React.Component {

  render() {
      
   
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

               <img
            className="logoImg"
            src={Logo}
            alt="berolina-stralau logo"
        />             

                   

            <div id="buttonDiv">
                                <Link to="/PauseScreen"
                      id="resetButtonBlue" >RESUME</Link>
                   </div>
                  
<br/>

                    <div id="buttonDiv">
                                <Link to="/TimerScreen"
       className="goButton">RESET</Link>
                
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
export default PauseScreen;