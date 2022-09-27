import React from 'react';
import './App.css';
import Login from './component/Login';
import Logout from './component/Logout';

function App() {
  return (
    <div className="App">
    <h2>Google Login</h2>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
