import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import actions from './../actions/actions';
import store from './../store';
import UserService from './../services/user';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    store.subscribe( () => {
      this.setState(store.getState())
    })
    if (localStorage.getItem('sessionToken')) {
      store.dispatch(actions.FETCH_SESSION());
      UserService.fetch().then( data => {
        store.dispatch(actions.RECEIVE_SESSION(data));
        localStorage.setItem('sessionToken', data.sessionToken);
        this.props.history.pushState(null, 'my-unicorns');
      });
    }
  }

  handleLogout() {
    store.dispatch(actions.REQUEST_DELETE_SESSION());
    UserService.logout().then( () => {
      localStorage.removeItem('sessionToken');
      store.dispatch(actions.RECEIVE_DELETE_SESSION());
      this.props.history.pushState(null, 'login');
    })
  }

  render() {
    let sessionBtns,
        profileBtn;
    if (this.state.session.sessionToken) {
      sessionBtns = <Link to="login" onClick={this.handleLogout}>Logout</Link>;
      profileBtn = <span><Link to="my-unicorns">Profile</Link></span>
    } else {
      sessionBtns = <span><Link to="login">Login</Link><Link to="signup">Sign up</Link></span>
    }
    let childrenWithProps = React.Children.map(this.props.children, child => {
      let props = {session: this.state.session, unicorns: this.state.entities.unicorns};
      return React.cloneElement(child, props);
    });
    return (
      <div className="unicorn-friends">
        <header>
          <h1>Unicorn Friends!</h1>
        </header>
        <nav>
          <Link to="browse">Browse</Link>
          {profileBtn}
          {sessionBtns}
        </nav>
        {childrenWithProps}
      </div>
    )
  }
}

export default App;
