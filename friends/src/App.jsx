import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Authenticate from './HOC/authenticate/authenticate';
import Login from './components/Login/loginModal';
import Friend from './components/Friend/friend';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Authenticate exact path="/" component={Friend} />
      </BrowserRouter>
    </div>
  );
}

export default App;
