import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, ProgressBar, Alert } from 'react-bootstrap';
import { getGalleryResponse, getMoreGalleryResponse, changePage } from '../../actions/listImages';
import ImgurPostElements from '../../components/ImgurPostElements';
import getCurrentItems from '../../selectors/imgur';
import './style.css';

class ListImages extends Component {
  componentWillMount() {
    this.props.loadImages(0, this.props.match.params.section || 'hot');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.pageHeight = document.documentElement.clientHeight;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.match.params.section && nextProps.match.params.section !== this.props.match.params.section) {
      this.props.loadImages(0, nextProps.match.params.section);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const height = document.getElementById('posts-container').clientHeight;
    const scrollHeight = (event.srcElement.body.scrollTop + this.pageHeight) - 20;
    if (this.props.isLoading === false && scrollHeight >= height) {
      this.props.changePage(this.props.page + 1);

      // preload - load more image before user scroll to the end
      if (this.props.page * this.props.perPage >= this.props.items.length - this.props.perPage) {
        this.props.loadMoreImages(this.props.imgurPage, this.props.section);
      }
    }
  }

  showLoader = () => {
    if (this.props.isLoading === true) {
      return <ProgressBar active now={100} />;
    } else if (Object.keys(this.props.error).length > 0) {
      return <Alert bsStyle="danger" ><h4>Coś poszło nie tak!</h4><p>Sprawdź wprowadzone dane i spróbuj ponownie</p></Alert>;
    }

    return '';
  }

  render() {
    return (
      <Grid >
        <Row>
          <Col xs={8} xsOffset={2} id="posts-container">
            <ImgurPostElements items={this.props.currentItems} />
            {this.showLoader()}
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.listImages,
  currentItems: getCurrentItems(state.listImages),
});

const mapDispatchToProps = dispatch => ({
  loadImages: (page, section) => { dispatch(getGalleryResponse(page, section)); },
  loadMoreImages: (page, section) => { dispatch(getMoreGalleryResponse(page, section)); },
  changePage: (page) => { dispatch(changePage(page)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListImages);
