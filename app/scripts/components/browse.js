import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import UnicornList from './unicornList';

class Browse extends React.Component {
  render() {
    return (
      <section>
        <h1>Browse the Unicorns</h1>
        <Link to="new-unicorn">Create a new Unicorn!</Link>
        <UnicornList unicorns={this.props.unicorns} user={this.props.user}/>
      </section>
    );
  }
}

export default Browse;
