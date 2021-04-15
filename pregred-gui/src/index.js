import React from 'react';
import Amplify, {API} from "aws-amplify";
import config from "./aws-exports";

import ReactDOM from 'react-dom';

import App from './app/App';

import './index.css';

Amplify.configure(config);
// Amplify.configure({
//   API: {
//     endpoints: [
//         {
//             name: "UTest7API",
//             endpoint: "https://t6e2noaphk.execute-api.ap-southeast-1.amazonaws.com/dev",
//             region: "ap-southeast-1"
//         }
//     ]
// }
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
