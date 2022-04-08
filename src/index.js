import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route 
          path="/"
          exact
          element={
              <App/>
        } 
        />
                
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);


