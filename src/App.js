import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home.page'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { personReducer } from './reducers/person.reducer';


const reducers = combineReducers({ personReducer });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));


class App extends Component {
  render() {
    return (
      <div>
        <Home store={store}/>
      </div>
    );
  }
}

export default App;
