import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import thunk from 'thunk';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import reducer from './Store/Action/Reducer/CombineReducer';
import Home from './Home';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
  <Provider store ={store}>
    <App />
  </Provider>
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
