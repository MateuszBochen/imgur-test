import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgurImageElement from '../ImgurImageElement';
import ImgurTagElements from '../ImgurTagElements';

class ImgurPostElement extends Component {
  crateLink = (title, id) => <Link to={`/image/${id}`}>{title}</Link>

  render() {
    return (
      <Panel header={this.crateLink(this.props.item.title, this.props.item.id)} >
        <ImgurImageElement images={this.props.item.images} />
        <ImgurTagElements tags={this.props.item.tags} />
        <div className="post-rate">
          <span className="badge badge-success" >+ {this.props.item.ups}</span> &nbsp;
          <span className="badge badge-danger">- {this.props.item.downs} </span>
        </div>
      </Panel>
    );
  }
}

export default ImgurPostElement;
