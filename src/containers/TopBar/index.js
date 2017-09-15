import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserTopPanel from '../UserTopPanel';

class TopBar extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <UserTopPanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default TopBar;
