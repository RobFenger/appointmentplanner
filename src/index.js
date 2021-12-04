import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

//to get all the React-files rendered onto the final page
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
