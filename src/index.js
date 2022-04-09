import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores/store'
import Paketler from './pages/Paketler'
import Odeme from './pages/Odeme'
import Tamamlandi from './pages/Tamamlandi'

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
        <Route 
          path="/paketler"
          exact
          element={
              <Paketler/>
        } 
        />
        <Route 
          path="/odeme"
          exact
          element={
              <Odeme/>
        } 
        />
        <Route 
          path="/tamamlandi"
          exact
          element={
              <Tamamlandi/>
        } 
        />



                
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);


