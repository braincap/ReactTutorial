var React = require('react');
var ReactDOM = require('react-dom');
// import routes from './config/routes';
// import { browserHistory } from 'react-router';
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
);