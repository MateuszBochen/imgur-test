import React, { Component } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import './style.css';

class SocialShare extends Component {
  crateLink = () => `${window.location.origin}${this.props.postUrl}`;

  createIcon = (name) => {
    const ICON = generateShareIcon(name);
    return <ICON size={32} round />;
  }

  render() {
    return (
      <div className="social-share" >
        <ShareButtons.FacebookShareButton
          url={this.crateLink()}
        >
          {this.createIcon('facebook')}
        </ShareButtons.FacebookShareButton>
        <ShareButtons.TwitterShareButton
          url={this.crateLink()}
        >
          {this.createIcon('twitter')}
        </ShareButtons.TwitterShareButton>
        <ShareButtons.PinterestShareButton
          url={this.crateLink()}
          media={this.props.image}
        >
          {this.createIcon('pinterest')}
        </ShareButtons.PinterestShareButton>
      </div>
    );
  }
}

export default SocialShare;
