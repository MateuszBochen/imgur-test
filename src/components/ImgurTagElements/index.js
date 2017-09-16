import React, { Component } from 'react';
import { Label } from 'react-bootstrap';

class ImgurTagElements extends Component {
  render() {
    return (
      <div>
        { this.props.tags.map((tag, index) => (
          <span><Label key={index} >{tag.display_name}</Label>&nbsp;</span>
        ))}
      </div>
    );
  }
}

export default ImgurTagElements;
