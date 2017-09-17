import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { getCommentsResponse } from '../../actions/comments';
import CommentsList from '../../components/CommentsList';

class Comments extends Component {
  constructor(props) {
    super(props);
    if (this.props.id !== this.props.lastLoadedId) {
      this.props.loadComments(this.props.isAlbum, this.props.id);
    }
  }

  showLoader = () => {
    if (this.props.isLoading === true) {
      return <ProgressBar active now={100} />;
    }

    return <CommentsList items={this.props.items} />;
  }

  render() {
    return (
      <Row>
        <Col xs={12} >
          <h2>Komentarze</h2>
          {this.showLoader()}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  ...state.comments,
});

const mapDispatchToProps = dispatch => ({
  loadComments: (isAlbum, id) => { dispatch(getCommentsResponse(isAlbum, id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
