import React from 'react';

import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import App from './app/App';

import './index.css';

import config from './aws-exports'

Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
