import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ARTICLES_DATA } from './constants';

ReactDOM.render(
  <App articles={ARTICLES_DATA} />,
  document.getElementById('root')
);
