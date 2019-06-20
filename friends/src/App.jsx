import React from 'react';
import './App.css';
import authenticate from './HOC/authenticate/authenticate';
import Login from './components/Login/loginModal';

function App() {
  const Auth = authenticate(<h1>Hi!!!</h1>)(Login);
  return (
    <div className="App">
      <p>Hello world</p>
      <Auth />
    </div>
  );
}

export default App;
