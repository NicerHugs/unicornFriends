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
      console.log(unicornIds);
      let unLoadedUnicorns = unicornIds.filter( id => {
        console.log(id);
        return !this.props.unicorns[id]
      });
      if (unLoadedUnicorns.length) {
        console.log('there are unloaded unicorns', unLoadedUnicorns, 'fetching:', this.props.unicorns.isFetching);
        store.dispatch(actions.FETCH_UNICORNS());
        UnicornService.fetchByIds(unLoadedUnicorns).then(response => {
          console.log(response);
          store.dispatch(actions.RECEIVE_UNICORNS(response))
        });
      }
    }
  }

  componentWillReceiveProps(newProps) {
    // this.fetchNeededUnicorns(newProps.unicorns);
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
        <UnicornList session={this.props.session} unicorns={unicorns} />
      </div>
    )
  }
}

export default User;
