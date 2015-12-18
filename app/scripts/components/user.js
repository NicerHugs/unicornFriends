import React from 'react';
import $ from 'jquery';

import UnicornList from './unicornList';
import store from './../store';
import actions from './../actions/unicornActions';
import UnicornService from './../services/unicorns';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.fetchUnicorns = this.fetchUnicorns.bind(this);
  }

  fetchUnicorns(unLoadedUnicorns) {
    if (unLoadedUnicorns.length) {
      store.dispatch(actions.FETCH_UNICORNS());
      UnicornService.fetchByIds(unLoadedUnicorns).then(response => {
        console.log(response);
        store.dispatch(actions.RECEIVE_UNICORNS(response))
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.unicorns.isFetching) {
      let unicornIds;
      if (newProps.params.userId) {
        unicornIds = newProps.users[newProps.params.userId].unicornFriends;
      } else {
        unicornIds = newProps.session.unicornFriends || [];
      }
      let unLoadedUnicorns = unicornIds.filter( id => {
        return !newProps.unicorns[id]
      });
      this.fetchUnicorns(unLoadedUnicorns);
    }
  }

  componentDidMount() {
    if (!this.props.session.username) {
      console.log('no username!');
    }
    if (!this.props.unicorns.isFetching) {
      let unicornIds;
      if (this.props.params.userId) {
        unicornIds = this.props.users[this.props.params.userId].unicornFriends;
      } else {
        unicornIds = this.props.session.unicornFriends || [];
      }
      let unLoadedUnicorns = unicornIds.filter( id => {
        return !this.props.unicorns[id]
      });
      this.fetchUnicorns(unLoadedUnicorns);
    }
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
