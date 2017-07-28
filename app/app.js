import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import TodoComponent from './components/todoComponent';
import TimeLineComponent from './components/timeLine';
import Routes from './routes';

class App extends Component {
  render() {
    return (
    	<div>
     		{Routes}
    	</div>
    )
  }
}



export default App