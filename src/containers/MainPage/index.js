import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import TopBar from '../TopBar';
import ListImages from '../ListImages';
import ShowImage from '../ShowImage';
import './style.css';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <TopBar />
        <div >
          <Switch>
            <Route exact path="/image/:imageHash" component={ShowImage} />
            <Route exact path="/:section?" component={ListImages} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainPage;
