import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Container from './container/container';
import Content from './conponent/content';
import Detail from './teacher/detail';
import { Router, Route, hashHistory,Redirect,IndexRedirect,IndexRoute } from 'react-router';


ReactDOM.render(
    <Router history={hashHistory}>
        <Redirect from="/" to="/teacher" />
        <Route path="/teacher" component={Container}>
            <IndexRoute component={Content}/>
            <Route path="index" component={Content}/>
            <Route path="detail" component={Detail}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
