import React from 'react';

class New extends React.Component {
  handleSubmit() {
    data = {
      name: this.refs.name.value,
      color: this.refs.color.value,
      power: this.refs.power.value
    }
    console.log(data);
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
