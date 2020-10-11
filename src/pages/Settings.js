import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/logo.png';
import Plus from '../images/plus.png';
import Minus from '../images/minus.png';
import Timer from '../images/timer.png';
import TimerScreenStart from './TimerScreenStart';

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			trainingTimeMinutes: '00',
			trainingTimeSeconds: '00',
			breakTimeMinutes: '00',
			breakTimeSeconds: '00',
			repetitions: 0,
			sound: false
			// fontOpacity: 0.4,
		};
		this.setTrainingTimeMinutes = this.setTrainingTimeMinutes.bind(this);
		this.setTrainingTimeSeconds = this.setTrainingTimeSeconds.bind(this);
		this.setBreakTimeMinutes = this.setBreakTimeMinutes.bind(this);
		this.setBreakTimeSeconds = this.setBreakTimeSeconds.bind(this);
		this.setRepetitions = this.setRepetitions.bind(this);
	}

	setTrainingTimeMinutes(event) {
		const trainingTimeMinutes = String(parseInt(event.target.value, 10)).padStart(2, '0');

		this.setState({ trainingTimeMinutes });
		// same as without when same name
		// this.setState({ trainingTimeMinutes: trainingTimeMinutes });

		this.props.setTrainingTimeMinutes(trainingTimeMinutes);
		console.log('    this.props.setTrainingTimeMinutes', this.props.setTrainingTimeMinutes);
	}

	setTrainingTimeSeconds(event) {
		const trainingTimeSeconds = String(parseInt(event.target.value, 10)).padStart(2, '0');
		this.setState({ trainingTimeSeconds });
	}

	setBreakTimeMinutes(event) {
		const breakTimeMinutes = String(parseInt(event.target.value, 10)).padStart(2, '0');
		this.setState({ breakTimeMinutes });
	}

	setBreakTimeSeconds(event) {
		const breakTimeSeconds = String(parseInt(event.target.value, 10)).padStart(2, '0');
		this.setState({ breakTimeSeconds: parseInt(event.target.value) });
	}

	setRepetitions(event) {
		this.setState({ repetitions: parseInt(event.target.value) });
	}
	render() {
		return (
			// BACKHROUND IMAGE CHANGE i vrati BACKGROUND IMAGE KAJ JE IZBRISAO

			<div className="main-div" style={{ backgroundImage: Logo }}>
				<div id="header">
					<img id="timer-img" src={Timer} alt="timer symbol" />
					&nbsp; &nbsp;Interval Training Timer&nbsp;&nbsp;
					<img id="timer-img" src={Timer} alt="timer symbol" />
				</div>

				<hr className="horz-line " />

				<label id=""> TRAININGS TIME</label>

				<div className="timer-cells">
					<img id="minus-imgTT" src={Minus} alt="minus symbol" />

					<div className="inner-timer-cells">
						<input
							type="number"
							className="input-cell"
							maxLength="2"
							value={this.state.trainingTimeMinutes}
							onChange={this.setTrainingTimeMinutes}
						/>
						<div className="semicolon">:</div>
						<input
							type="number"
							className="input-cell"
							maxLength="2"
							value={this.state.trainingTimeSeconds}
							onChange={this.setTrainingTimeSeconds}
						/>
					</div>

					<img id="plus-imgTT" src={Plus} alt="plus symbol" />
				</div>
				<br />

				<label> BREAK</label>

				<div className="timer-cells">
					<img id="minus-imgTT" src={Minus} alt="minus symbol" />

					<div className="inner-timer-cells">
						<input
							type="number"
							className="input-cell"
							value={this.state.breakTimeMinutes}
							onChange={this.setBreakTimeMinutes}
						/>
						<div className="semicolon">:</div>
						<input
							type="number"
							className="input-cell"
							value={this.state.breakTimeSeconds}
							onChange={this.setBreakTimeSeconds}
						/>
					</div>

					<img id="plus-imgTT" src={Plus} alt="plus symbol" />
				</div>

				<br />

				<label> REPETITIONS</label>

				<div className="timer-cells">
					<img id="minus-imgTT" src={Minus} alt="minus symbol" />

					<div className="inner-timer-cells">
						<input
							type="number"
							className="input-cell"
							value={this.state.repetitions}
							onChange={this.setRepetitions}
						/>
					</div>

					<img id="plus-imgTT" src={Plus} alt="plus symbol" />
				</div>

				<br />

				<div id="button-div">
					<Link to="/TimerScreenStart" className="go-bttn">
						GO
					</Link>
				</div>
				<br />

				<div id="beep-settings">
					<h2>SOUND SETTINGS </h2>

					{/* 2 X CLASS I ID ?!?!?!?! */}
					<div className="beep-div">
						<label className="beep-label" className="beep-label-on" id="label-sound">
							{' '}
							<u>SOUND ON:</u>
						</label>
						<input
							id="check-box-sound"
							className="beep-checkbox"
							type="checkbox"
							onClick={(e) => this.setState({ sound: e.target.checked })}
						/>
						{/* fontOpacity: e.target.checked  */}
					</div>

					<div className="beep-div">
						<label className="beep-label" className="beep-label-on">
							{' '}
							&nbsp;&nbsp;HALF TIME MARK:{' '}
						</label>
						<input
							disabled={!this.state.sound}
							id="checkbox-half"
							className="beep-checkbox2"
							type="checkbox"
						/>
						{/* && !this.state.fontOpacity */}
					</div>

					<div className="beep-div">
						<label className="beep-label" className="beep-label-on">
							{' '}
							&nbsp;&nbsp;30sec MARK:{' '}
						</label>
						<input disabled={!this.state.sound} id="checkbox30" className="beep-checkbox" type="checkbox" />
					</div>

					<div className="beep-div">
						<label className="beep-label" className="beep-label-on">
							{' '}
							&nbsp;&nbsp;20sec MARK:{' '}
						</label>
						<input
							disabled={!this.state.sound}
							id="checkbox20"
							className="beep-checkbox2"
							type="checkbox"
						/>
					</div>

					<div className="beep-div">
						<label className="beep-label" className="beep-label-on">
							{' '}
							&nbsp;&nbsp;10sec MARK:{' '}
						</label>
						<input disabled={!this.state.sound} id="checkbox10" className="beep-checkbox" type="checkbox" />
					</div>

					<div className="beep-div">
						<label className="beep-label" className="beep-label-on">
							{' '}
							&nbsp;&nbsp;10sec COUNTDOWN:{' '}
						</label>
						<input
							disabled={!this.state.sound}
							id="checkboxCountdown"
							className="beepCheckbox2"
							type="checkbox"
						/>
					</div>

					<div className="beep-div">
						<label className="beep-label" className="beep-label-on">
							{' '}
							<i>&nbsp;&nbsp;MOTIVATION SPEACHES </i>{' '}
						</label>
						<input
							disabled={!this.state.sound}
							id="checkbox-motivational"
							className="beep-checkbox"
							type="checkbox"
						/>
					</div>
				</div>

				<br />

				<hr className="horz-line" />

				<div id="footer">© Berolina-Stralau Futsal Team 2020</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setTrainingTimeMinutes: (minutes) => dispatch({ type: 'SET_TRAINING_TIME_MINUTES', payload: minutes })
		// setBreakMinutes: (minutes) => dispatch({ type: 'SET_BREAK_MINUTES', payload: minutes }),
	};
};
export default connect(null, mapDispatchToProps)(Settings);
