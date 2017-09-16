import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import ImgurImageElement from '../ImgurImageElement';
import ImgurTagElements from '../ImgurTagElements';

class ImgurPostElement extends Component {
  render() {
    return (
      <Panel header={this.props.item.title} >
        <ImgurImageElement images={this.props.item.images} />
        <ImgurTagElements tags={this.props.item.tags} />
      </Panel>
    );
  }
}

export default ImgurPostElement;
