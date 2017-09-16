import React, { Component } from 'react';
import CommentsList from '../CommentsList';
import './style.css';

class CommentElement extends Component {
  showChildren = () => {
    if (this.props.item.children.length > 0) {
      return <div className="comment-children"> <CommentsList items={this.props.item.children} /></div>;
    }

    return '';
  }
  render() {
    return (
      <div className="comment-element">
        <div className="comment-top">
          <span className="author">{this.props.item.author}</span>
        </div>
        <div className={`comment-body ${this.props.item.children.length === 0 ? 'no-border' : ''} `}>
          {this.props.item.comment}
          <div className="comment-rate">
            <span className="badge badge-success" >+ {this.props.item.ups}</span> &nbsp;
            <span className="badge badge-danger">- {this.props.item.downs} </span>
          </div>
        </div>
        {this.showChildren()}
        <div className="comment-bottom" />
      </div>
    );
  }
}

export default CommentElement;
