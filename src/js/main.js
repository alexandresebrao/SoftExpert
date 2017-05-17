import '../css/bootstrap.css';
import '../css/main.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/todos'
import App from './view.js'



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
