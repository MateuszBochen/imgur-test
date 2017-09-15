import React, { Component } from 'react';
import './style.css';

class ImgurImageElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    };

    this.buttonStyle = {
      top: this.calculateTop(),
    };
  }

  changeIndex = (max, plus) => {
    const imgIndex = this.state.imgIndex + plus >= max ? 0 : this.state.imgIndex + plus < 0 ? max - 1 : this.state.imgIndex + plus;

    this.setState({ imgIndex });
  }

  showImage = (images) => {
    if (!images) {
      return '';
    }

    return <img src={images[this.state.imgIndex].link} alt="" />;
  };

  showLeftArrow = (images) => {
    if (!images || images.length <= 1) {
      return '';
    }

    return <button onClick={() => { this.changeIndex(images.length, -1); }} style={this.buttonStyle} className="imgNavButn left" >Left</button>;
  }

  showRightArrow = (images) => {
    if (!images || images.length <= 1) {
      return '';
    }

    return <button onClick={() => { this.changeIndex(images.length, 1); }} style={this.buttonStyle} className="imgNavButn right">Right</button>;
  }

  calculateTop = () => {
    if (!this.props.images) {
      return '';
    }

    let min = 999999;
    for (let i = 0; i < this.props.images.length; i++) {
      if (this.props.images[i].height < min) {
        min = this.props.images[i].height;
      }
    }
    return min / 2;
  }

  render() {
    return (
      <div className="imgurImageContainer">
        {this.showImage(this.props.images)}
        {this.showLeftArrow(this.props.images)}
        {this.showRightArrow(this.props.images)}
      </div>
    );
  }
}

export default ImgurImageElement;
