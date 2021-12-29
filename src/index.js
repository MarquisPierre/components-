import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import nameReducer from './redux/reducers'
// create an instance of a Redux store
// store == global state container for the App

// let store = createStore(nameReducer)


// Step 4: Rendering the component
ReactDOM.render(
   
    <App />
   
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
