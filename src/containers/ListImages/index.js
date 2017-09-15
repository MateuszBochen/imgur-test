import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getGalleryResponse } from '../../actions/listImages';
import ImgurPostElement from '../../components/ImgurPostElement';
import './style.css';

class ListImages extends Component {
  constructor(props) {
    super(props);
    this.props.loadImages();
  }

  render() {
    return (
      <Grid >
        <Row>
          <Col xs={8} xsOffset={2} >
            { this.props.items.map(item => (
              <ImgurPostElement item={item} key={item.id} />
            ))}
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.listImages,
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => { dispatch(getGalleryResponse(0)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListImages);
