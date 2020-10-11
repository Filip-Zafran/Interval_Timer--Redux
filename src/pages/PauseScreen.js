import React from 'react';
import Logo from '../images/logo.png';
import Timer from '../images/timer.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class PauseScreen extends React.Component {
	render() {
		return (
			<div className="main-div">
				<div id="header">
					<img id="timer-img" src={Timer} alt="timer symbol" />
					&nbsp; &nbsp;Interval Training Timer&nbsp;&nbsp;
					<img id="timer-img" src={Timer} alt="timer symbol" />
				</div>

				<hr className="horz-line " />

				<img className="logo-imgg" src={Logo} alt="berolina-stralau logo" />

				<div id="button-div">
					<Link to="/PauseScreen" id="reset-button-blue ">
						RESUME
					</Link>
				</div>

				<br />

				<div id="button-div">
					<Link to="/TimerScreenStart" className="go-bttn">
						RESET
					</Link>
				</div>
				<br />

				<hr className="horz-line " />

				<div id="footer">© Berolina-Stralau Futsal Team 2020</div>
			</div>
		);
	}
}
export default PauseScreen;
