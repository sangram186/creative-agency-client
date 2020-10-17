import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/MediaQueries/MediaQueries.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import CustomerPage from './component/CustomerPage/CustomerPage/CustomerPage';
import AdminPage from './component/AdminPage/AdminPage/AdminPage';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const useContent = createContext();
function App() {

  const [loginInfo, setLoginInfo] = useState({
    name: '',
    email: '',
    photo: '',
    isAdmin: '',
  })

  return (
    <useContent.Provider value={[loginInfo, setLoginInfo]}>
      <Router>
        <Switch>
          <PrivateRoute path="/customer">
            <CustomerPage />
          </PrivateRoute>

          <PrivateRoute path="/admin">
              <AdminPage />
            </PrivateRoute>

          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/customer'>
            <CustomerPage />
          </Route>
          <Route path='/admin'>
            <AdminPage />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </useContent.Provider>
  );
}

export default App;
