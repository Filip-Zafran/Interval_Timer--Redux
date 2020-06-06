import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Settings from './pages/Settings';


class App extends React.Component {


  render () {
    return (
    <Router>
    <Switch>
      
      <Route path="/timerScreen">
        

      </Route>
      
            <Route path="/">
        <Settings/>

      </Route>
      


        </Switch>
        </Router>
  );
}
}
export default App;
