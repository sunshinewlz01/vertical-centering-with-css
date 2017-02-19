import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import './style.css';
import PageContainer from '../../common/components/PageContainer'
import Demo01 from './components/Demo01';
import Demo02 from './components/Demo02';
import Demo03 from './components/Demo03';
import Demo04 from './components/Demo04';
import Demo05 from './components/Demo05';
import Demo06 from './components/Demo06';
ReactDOM.render(
  (<Router history={hashHistory}>
      <Route path='/' component={Demo06}>
        <IndexRoute component={Demo03} />
        <Route path='demo03' component={Demo03} />
      </Route>
    </Router>
  ), document.getElementById('application')
);
