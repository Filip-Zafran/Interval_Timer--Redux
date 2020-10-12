import React from 'react';
import UIfx from 'uifx';
import Logo from '../images/logo.png';
import Timer from '../images/timer.png';
import Circle from '../images/circle.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TimerScreenResume from './TimerScreenResume';

class BreakScreen extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	componentDidMount() {
		this.myInterval = setInterval(() => {
			const { seconds, minutes } = this.state;
			if (seconds > 0) {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1
				}));
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(this.myInterval);
				} else {
					this.setState(({ minutes }) => ({
						minutes: minutes - 1,
						seconds: 59
					}));
				}
			}
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	state = {
		minutes: this.props.breakTimeMinutes,
		seconds: 0
	};

	render() {
		const { minutes, seconds } = this.state;

		return (
			<div className="main-div">
				<div id="header">
					<img id="timer-img" src={Timer} alt="timer symbol" />
					&nbsp; &nbsp;Interval Training Timer&nbsp;&nbsp;
					<img id="timer-img" src={Timer} alt="timer symbol" />
				</div>

				<hr className="horz-line " />

				<img className="logo-img" src={Logo} alt="berolina-stralau logo" />

				{/* CHANGE CODE HERE */}
				<div className="countdown-clock">
					{minutes === 0 && seconds === 0 ? (
						<TimerScreenResume />
					) : (
						<div className="countdown-time">
							{' '}
							{minutes < 10 ? `${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</div>
					)}
				</div>

				<img id="circle-img" src={Circle} />

				<div id="pause-div">
					<Link to="/PauseScreen" className="go-bttn">
						PAUSE
					</Link>
				</div>
				<br />
				<div className="setings-div">
					<Link to="/TimerScreenStart" className="reset-bttn">
						RESET
					</Link>
				</div>
				<br />

				<div className="setings-div">
					<Link to="/" className="settings-bttn ">
						SETTINGS
					</Link>
				</div>
				<br />

				<hr className="horz-line " />

				<div id="footer">© Berolina-Stralau Futsal Team 2020</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		trainingTimeMinutes: state.trainingTimeMinutes
	};
};

export default connect(mapStateToProps)(BreakScreen);
