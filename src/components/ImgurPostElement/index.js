import React, { Component } from 'react';
import ImgurImageElement from '../ImgurImageElement';

class ImgurPostElement extends Component {
  render() {
    return (
      <div >
        <div >{this.props.item.title}</div>
        <ImgurImageElement images={this.props.item.images} />
        <hr />
        <hr />
      </div>
    );
  }
}

export default ImgurPostElement;
