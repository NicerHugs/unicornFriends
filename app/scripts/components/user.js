import React from 'react';
import $ from 'jquery';

import UnicornList from './unicornList';
import store from './../store';
import actions from './../actions/unicornActions';
import UnicornService from './../services/unicorns';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.fetchNeededUnicorns = this.fetchNeededUnicorns.bind(this);
  }

  fetchNeededUnicorns(unicorns) {
    if (!unicorns.isFetching) {
      let unicornIds;
      if (this.props.params.userId) {
        unicornIds = unicorns.users[this.props.params.userId].unicornFriends;
      } else {
        unicornIds = this.props.session.unicornFriends || [];
      }
      let unLoadedUnicorns = unicornIds.filter( id => {
        return !this.props.unicorns[id]
      });
      if (unLoadedUnicorns.length) {
        store.dispatch(actions.FETCH_UNICORNS());
        UnicornService.fetchByIds(unLoadedUnicorns).then(response => {
          store.dispatch(actions.RECEIVE_UNICORNS(response))
        });
      }
    }
  }

  componentWillReceiveProps(newProps) {
    this.fetchNeededUnicorns(newProps.unicorns);
  }

  componentDidMount() {
    this.fetchNeededUnicorns(this.props.unicorns);
  }

  render() {
    let unicornIds = this.props.session.unicornFriends || [];
    let unicorns = unicornIds.map(id => {
      return this.props.unicorns[id];
    }).filter( unicorn => {
      return unicorn
    });
    return (
      <div>
        {this.props.session.username}
        <UnicornList session={this.props.session} unicorns={unicorns} users={this.props.users}/>
      </div>
    )
  }
}

export default User;
