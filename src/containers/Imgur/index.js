import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { getAuthorizationResponse } from '../../actions/imgur';
// client id c18c3d4228441e1
// client secret 265356f00098b950b1c38b588abca52564c5118f
class Imgur extends Component {
  constructor(props) {
    super(props);
    const parsed = queryString.parse(this.props.location.search);
    this.props.loginStart(parsed.code);
  }

  closeImgurWindow = () => {
    window.close();
    window.opener.location.reload();
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Button bsStyle="primary" onClick={this.closeImgurWindow} >Zalogowano</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.imgur,
});

const mapDispatchToProps = dispatch => ({
  loginStart: (code) => { dispatch(getAuthorizationResponse(code)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Imgur);
