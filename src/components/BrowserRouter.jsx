import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>,
  rootElement
);