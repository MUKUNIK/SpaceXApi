import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import * as serviceWorker from './serviceWorker';
import App, { Missions, Launchpads, Payload} from './App';

ReactDOM.render(
	(   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
      <Route path = "Missions" component = {Missions}/>
      <Route path = "Launchpads" component = {Launchpads}/>
      <Route path = "Payload" component = {Payload}/>
      </Route>
   </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
