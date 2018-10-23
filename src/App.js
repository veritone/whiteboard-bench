import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import PostReducer from './reducers';
import Posts from './Posts';

import './App.css';


const store = createStore(
  combineReducers({ posts: PostReducer }),
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Posts />
      </Provider>
    );
  }
}

export default App;
