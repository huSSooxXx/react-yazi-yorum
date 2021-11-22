import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { reducer } from './Reducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
 
);