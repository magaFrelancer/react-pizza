import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore} from 'redux';

import './scss/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

function counter(state = 0, action) {
    if(action.type === 'INCREMENT') {
        return state + 1;
    }
    if(action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
}

const store = createStore(counter);
console.log(store.getState());

store.subscribe(()=> console.log('Changed', store.getState()));
store.dispatch({type : 'INCREMENT'});
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
   <Router>
       <App/>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
