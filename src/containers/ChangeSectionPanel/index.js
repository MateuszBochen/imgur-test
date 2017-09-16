import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getGalleryResponse } from '../../actions/listImages';

class ChangeSectionPanel extends Component {
  render() {
    return (
      <ButtonToolbar className="pull-left" >
        <ul className="nav nav-pills">
          <li className={`nav-item ${this.props.section === 'hot' ? 'active' : ''}`} >
            <Link to="/hot" className="nav-link active" >HOT</Link>
          </li>
          <li className={`nav-item ${this.props.section === 'top' ? 'active' : ''}`} >
            <Link to="/top" className="nav-link" >TOP</Link>
          </li>
        </ul>
      </ButtonToolbar>
    );
  }
}

const mapStateToProps = state => ({
  ...state.listImages,
});

const mapDispatchToProps = dispatch => ({
  loadImages: (page, section) => { dispatch(getGalleryResponse(page, section)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSectionPanel);
