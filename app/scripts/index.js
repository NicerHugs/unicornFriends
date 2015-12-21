import setup from './setup';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router'

import App from './components/app';
import Login from './components/login';
import Signup from './components/signup';
import User from './components/user';
import Browse from './components/browse';
import New from './components/new';
import NoMatch from './components/404';

ReactDom.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
      <Route path="my-unicorns" component={User}/>
      <Route path="browse" component={Browse}/>
      <Route path="new-unicorn" component={New}/>
      <Route path="users/:userId" component={User}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'))
