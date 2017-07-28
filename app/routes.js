
import React from 'react';
/*eslint-enable no-unused-vars*/
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

// COMPONENT
import App from './app'
import TodoComponent from './components/todoComponent';
import TimeLineComponent from './components/timeLine';
import GantComponent from './components/visTimeline';

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute
        component={TimeLineComponent}
      />
      <Route
        path="todo"
        component={TodoComponent}
      />
      <Route
      	path="vsTimeline"
      	component = {GantComponent}
      />
    </Route>
  </Router>
);

export default Routes;