import React from 'react';
import UIfx from 'uifx';
// https://www.npmjs.com/package/uifx
import Logo from "../images/logo.png";
import Circle from "../images/circle.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class TimerScreen extends React.Component {
  
state = {
  minutes: 3,
  seconds: 0,
  reps: 3
}

  render() {
      
  const { minutes, seconds, reps } = this.state

      return (
   


    <div className="mainDiv" >
      
               <img
            className="logoImg"
            style={{
              width: "100%",
              opacity: "0.07",
                    position: "absolute",
                  zIndex: "-1"
                          }}
            src={Logo}
            alt="berolina-stralau logo"
        />             

                   
          <div className="coundownClock">  { minutes < 10 ? `0${ minutes }` : minutes }:{ seconds < 10 ? `0${ seconds }` : seconds } </div>
         
          <img id="circleImg" src={Circle} />
          <div className="repetitionsCount"> <i>reps left: {reps}</i> </div>

       

            <div id="buttonDiv">
                                <Link to="/TimerScreen"
        className="goButton">PAUSE</Link>
                
        </div>
            <br />

        </div>

      );
    }
  
}
export default TimerScreen;