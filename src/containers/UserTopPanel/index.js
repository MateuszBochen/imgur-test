import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';

class UserTopPanel extends Component {
  openImgurWindow = () => {
    window.open('https://api.imgur.com/oauth2/authorize?client_id=c18c3d4228441e1&response_type=code', '_blank', 'height=600,width=400');
  }

  loginButton = () => (
    <Button bsStyle="primary" onClick={this.openImgurWindow} >Zaloguj</Button>
  );

  userButton = () => (
    <Button bsStyle="primary" onClick={this.openImgurWindow} >{this.props.accountUsername}</Button>
  );

  showButtons = () => {
    const time = new Date().getTime() / 1000;
    if (this.props.expiresIn <= time) {
      return this.loginButton();
    }
    return this.userButton();
  };

  render() {
    return (
      <ButtonToolbar className="pull-right" >
        {this.showButtons()}
      </ButtonToolbar>
    );
  }
}

const mapStateToProps = state => ({
  ...state.imgur,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserTopPanel);
