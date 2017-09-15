import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import TopBar from '../TopBar';
import ListImages from '../ListImages';
// import { getGalleryResponse } from '../actions/mainPage';
// client id c18c3d4228441e1
// client secret 265356f00098b950b1c38b588abca52564c5118f
class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <TopBar />
        <div >
          <Switch>
            <Route exact path="/" component={ListImages} />
          </Switch>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   ...state.mainPage,
// });
//
// const mapDispatchToProps = dispatch => ({
//   loadImages: () => { dispatch(getGalleryResponse(0)); },
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default MainPage;
