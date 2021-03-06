import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, ProgressBar, Alert } from 'react-bootstrap';
import { getImageResponse } from '../../actions/showImage';
import ImgurPostElement from '../../components/ImgurPostElement';
import Comments from '../Comments';

class ShowImage extends Component {
  componentWillMount() {
    if (this.props.item.id !== this.props.match.params.imageHash) {
      this.props.loadImage(this.props.match.params.imageHash);
    }
  }

  showLoader = () => {
    if (this.props.isLoading === true) {
      return <ProgressBar active now={100} />;
    } else if (Object.keys(this.props.error).length > 0) {
      return <Alert bsStyle="danger" ><h4>Coś poszło nie tak!</h4><p>Sprawdź wprowadzone dane i spróbuj ponownie</p></Alert>;
    }

    return (
      <div>
        <ImgurPostElement item={this.props.item} />
        <Comments isAlbum={this.props.item.is_album} id={this.props.item.id} />
      </div>
    );
  }

  render() {
    return (
      <Grid >
        <Row>
          <Col xs={8} xsOffset={2} >
            {this.showLoader()}
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.showImage,
});

const mapDispatchToProps = dispatch => ({
  loadImage: (hash) => { dispatch(getImageResponse(hash)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowImage);
