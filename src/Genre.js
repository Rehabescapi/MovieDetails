import React from 'react';

var Genre = React.createClass({
  render() {
    return (
      <p className="genre">{this.props.genre}</p>
    )
  }
});

export default Genre;
