import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Settings from './pages/Settings';
import TimerScreenStart from './pages/TimerScreenStart';
import TimerScreenResume from './pages/TimerScreenResume';
import BreakScreen from './pages/BreakScreen';
import PauseScreen from './pages/PauseScreen';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/TimerScreenStart">
						<TimerScreenStart />
					</Route>

					<Route path="/TimerScreenResume">
						<TimerScreenResume />
					</Route>

					<Route path="/BreakScreen">
						<BreakScreen />
					</Route>

					<Route path="/PauseScreen">
						<PauseScreen />
					</Route>

					<Route path="/">
						<Settings />
					</Route>
				</Switch>
			</Router>
		);
	}
}
export default App;
