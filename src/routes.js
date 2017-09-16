import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import persistState from 'redux-localstorage';
import reducers from './reducers';

import MainPage from './containers/MainPage';
import Imgur from './containers/Imgur';

const middleware = applyMiddleware(thunk);

const enhancer = compose(
  middleware,
  persistState(),
);


const store = createStore(reducers, enhancer);

const Routes = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path="/imgur" component={Imgur} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;
