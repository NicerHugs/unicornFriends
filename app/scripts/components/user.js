import React from 'react';
import $ from 'jquery';

import UnicornList from './unicornList';

class User extends React.Component {
  render() {
    // let filteredUnicorns = this.props.unicorns.filter(unicorn => {
    //   return this.props.user.unicorns.indexOf(unicorn.objectId) > -1;
    // });
    return (
      <div>
        {this.props.session.username}
        <UnicornList unicorns={[]} />
      </div>
    )
  }
}

export default User;
