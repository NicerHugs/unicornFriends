import React from 'react';

import store from './../store';
import actions from './../actions/unicornActions';
import UnicornService from './../services/unicorns';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.refs.name.value,
      color: this.refs.color.value,
      power: this.refs.power.value,
      creator: this.props.session.id
    }
    store.dispatch(actions.REQUEST_NEW_UNICORN(data));
    UnicornService.saveNew(data).then(response => {
      store.dispatch(actions.RECEIVE_NEW_UNICORN(response))
      this.refs.name.value = '';
      this.refs.color.value = '';
      this.refs.power.value = '';
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Make a new unicorn!
        <input type="text" ref="name" placeholder="name"/>
        <input type="text" ref="color" placeholder="color"/>
        <input type="text" ref="power" placeholder="power"/>
        <input type="submit" value="submit"/>
      </form>
    )
  }
}

export default New;
