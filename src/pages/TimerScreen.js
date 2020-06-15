import React from 'react';
import UIfx from 'uifx';
// https://www.npmjs.com/package/uifx
import Logo from "../images/logo.png";
import Timer from "../images/timer.png";
import Circle from "../images/circle.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class TimerScreen extends React.Component {


     componentDidMount() {
  this.myInterval = setInterval(() => {
    const { seconds, minutes } = this.state
    if (seconds > 0) {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }))
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(this.myInterval)
      } else {
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59
        }))
      }
    }
  }, 1000)
     }
  
      componentWillUnmount() {
        clearInterval(this.myInterval)
    }

  
state = {
  minutes: 0,
  seconds: 6,
  reps: 3
}

  render() {
      
    const { minutes, seconds, reps } = this.state
    
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

          

                   
          <div className="countdownClock">
            { minutes === 0 && seconds === 0
                    ? <div className="endTime"> Time is up! <br/>  00:00</div>
                    : <h3> {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
                }               
             </div>
         

          <img id="circleImg" src={Circle} />
          <div className="repetitionsCount"> <i>reps left: {reps}</i> </div>

       

            <div id="pauseDiv">
                                <Link to="/PauseScreen"
        className="goButton">PAUSE</Link>
                       </div>
          <br />
          
                    <div id="setingsDiv">
                                <Link to="/"
        >Settings</Link>
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
export default TimerScreen;