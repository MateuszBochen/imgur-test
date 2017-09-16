import React, { Component } from 'react';
import CommentElement from '../CommentElement';

class CommentsList extends Component {
  render() {
    return (
      <div>
        { this.props.items.map(item => (
          <CommentElement item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default CommentsList;
