import React, { Component } from 'react';
import ImgurPostElement from '../ImgurPostElement';

class ImgurPostElements extends Component {
  render() {
    return (
      <div >
        { this.props.items.map(item => (
          <ImgurPostElement item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default ImgurPostElements;
