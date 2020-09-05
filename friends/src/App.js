import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p><Link to="/login">Log In</Link></p>
        <p><Link to="protected">Friends List</Link></p>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
