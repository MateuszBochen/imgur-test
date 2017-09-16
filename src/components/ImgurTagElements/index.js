import React, { Component } from 'react';

class ImgurTagElements extends Component {
  render() {
    return (
      <div>
        { this.props.tags.map(tag => (
          <span key={tag.name} className="badge badge-secondary">{tag.display_name}</span>
        ))}
      </div>
    );
  }
}

export default ImgurTagElements;
