import React from 'react';
import $ from 'jquery';

class Unicorn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let data = {
      unicorns : {
        __op: "AddUnique",
        objects:[this.props.id]}
    }

    $.ajax({
      url: 'https://api.parse.com/1/users/' + this.props.user.objectId,
      type: 'PUT',
      data: JSON.stringify(data),
      success: this.props.handleUserUpdated
    });
  }

  render() {
    return (
      <li className="unicorn">
      <img />
        <h2>{this.props.name}</h2>
        <p>{this.props.color}</p>
        <p>{this.props.power}</p>
        <p>{this.props.creator}</p>
        <input type="button" onClick={this.handleClick} value="add to my unicorns"/>
      </li>
    );
  }
}

export default Unicorn;
