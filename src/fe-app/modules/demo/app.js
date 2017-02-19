import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import './style.css';
import DemoOne from './components/DemoOne';
ReactDOM.render(
  (<Router history={hashHistory}>
      <Route path='/' component={DemoOne}>
        <IndexRoute component={DemoOne} />
        <Route path='demo-one' component={DemoOne} />
      </Route>
    </Router>
  ), document.getElementById('application')
);
