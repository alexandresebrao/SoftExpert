import '../css/bootstrap.css';
import '../css/main.css';
import 'react-hot-loader/patch';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/todos'
import App from './view.js'

if (module.hot) {
  module.hot.accept('./view.js', () => {
    const NextRootContainer = require('./view.js').default;
    ReactDOM.render(<App />,document.getElementById('root'));
  });
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
