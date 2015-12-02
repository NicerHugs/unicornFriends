import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    let sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken) {
      $.ajaxSetup({
        headers: {
          "X-Parse-Session-Token": sessionToken
        }
      });
    } else {
      this.props.history.pushState(null, 'login');
    }

    this.state = {
      user: {},
      unicorns: []
    }

    this.handleUserData = this.handleUserData.bind(this);
    this.handleUnicornData = this.handleUnicornData.bind(this);
    this.handleNewUnicorn = this.handleNewUnicorn.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchUnicorns();
  }

  handleUserData(data) {
    this.setState({user: data})
  }

  handleUnicornData(data) {
    this.setState({unicorns: data.results})
  }

  handleNewUnicorn(e) {
    e.preventDefault();
    console.log('you wanna add a new Unicorn!');
  }

  fetchUnicorns() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/Unicorn',
      success: this.handleUnicornData
    });
  }

  fetchUserData() {
    $.ajax({
      url: 'https://api.parse.com/1/users/me',
      success: this.handleUserData
    });
  }

  render() {
    let childrenWithProps;
    childrenWithProps = React.Children.map(this.props.children, child => {
      let props = {user: this.state.user, unicorns: this.state.unicorns};
      console.log(this.props.route);
      if (this.props.route.pathName === 'new-unicorn') {
        console.log('hi');
        props.handleSubmit = this.handleNewUnicorn;
      }
      return React.cloneElement(child, props);
    });
    return (
      <div className="unicorn-friends">
        <header>
          <h1>Unicorn Friends!</h1>
        </header>
        <nav>
          <Link to="browse">Browse</Link>
          <Link to="my-unicorns">Profile</Link>
        </nav>
        {childrenWithProps}
      </div>
    )
  }
}

export default App;
