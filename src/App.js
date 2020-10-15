import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import CustomerPage from './component/CustomerPage/CustomerPage/CustomerPage';
import AdminPage from './component/AdminPage/AdminPage/AdminPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path='/customer'>
          <CustomerPage />
        </Route>
        <Route path='/admin'>
          <AdminPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
