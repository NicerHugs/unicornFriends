import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import UnicornList from './unicornList';
import UnicornService from './../services/unicorns';
import store from './../store';
import actions from './../actions/unicornActions';

class Browse extends React.Component {
  componentDidMount() {
    store.dispatch(actions.FETCH_UNICORNS());
    UnicornService.fetchAll().then(data => {
      store.dispatch(actions.RECEIVE_UNICORNS(data));
    });
  }
  render() {
    let unicorns = [];
    let type = this.props.session.sessionToken ? "add" : undefined;
    for (let unicorn in this.props.unicorns) {
      unicorns.push(this.props.unicorns[unicorn]);
    }
    let unicornData = unicorns.filter(unicorn => {return unicorn.id})
    return (
      <section>
        <h1>Browse the Unicorns</h1>
        <Link to="new-unicorn">Create a new Unicorn!</Link>
        <UnicornList unicorns={unicornData} type={type} session={this.props.session}/>
      </section>
    );
  }
}

export default Browse;
