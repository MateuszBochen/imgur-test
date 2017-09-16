import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserTopPanel from '../UserTopPanel';
import ChangeSectionPanel from '../ChangeSectionPanel';
import './style.css';

class TopBar extends Component {
  render() {
    return (
      <Grid fluid className="topBar">
        <Row>
          <Col xs={12}>
            <ChangeSectionPanel />
            <UserTopPanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default TopBar;
