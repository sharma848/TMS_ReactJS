import React, { Component } from 'react';
import '../assets/style/css/style.css';
import Login from './login/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
