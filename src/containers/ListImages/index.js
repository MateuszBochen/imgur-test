import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getGalleryResponse, changePage } from '../../actions/listImages';
import ImgurPostElements from '../../components/ImgurPostElements';
import getCurrentItems from '../../selectors/imgur';
import './style.css';

class ListImages extends Component {
  constructor(props) {
    super(props);
    this.props.loadImages(0);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.pageHeight = document.documentElement.clientHeight;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const height = document.getElementById('posts-container').clientHeight;
    const scrollHeight = (event.srcElement.body.scrollTop + this.pageHeight) - 20;
    if (this.props.isLoading === false && scrollHeight >= height) {
      // this.page = this.page + 1;

      console.log('chce ladowac nowe', height);
      this.props.changePage(this.props.page + 1);

      // preload
      if (this.props.page * this.props.perPage >= this.props.items.length - this.props.perPage) {
        console.log('zaladuj nowe z api', this.props.imgurPage);
        this.props.loadImages(this.props.imgurPage);
      }

    }
  }

  showLoader = () => {
    if (this.props.isLoading === true) {
      return <p>Loading</p>;
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
  loadImages: (page) => { dispatch(getGalleryResponse(page)); },
  changePage: (page) => { dispatch(changePage(page)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListImages);
