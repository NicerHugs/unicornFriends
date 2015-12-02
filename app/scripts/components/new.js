import React from 'react';

class New extends React.Component {
  handleSubmit() {}
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
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
