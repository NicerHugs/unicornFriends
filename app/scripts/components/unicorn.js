import React from 'react';
import $ from 'jquery';

import UserService from './../services/user';
import store from './../store';
import actions from './../actions/actions';

class Unicorn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    UserService.addUnicornFriend(this.props.session.id, this.props.id).then(id => {
      store.dispatch(actions.RECEIVE_UNICORN_FRIEND(id))
    })

  }

  render() {
    let btn = this.props.type === 'add' ? <input type="button" onClick={this.handleClick} value="add to my unicorns"/> : undefined;
    return (
      <li className="unicorn">
      <img />
        <h2>{this.props.name}</h2>
        <p>{this.props.color}</p>
        <p>{this.props.power}</p>
        <p>{this.props.creator}</p>
        {btn}
      </li>
    );
  }
}

export default Unicorn;
