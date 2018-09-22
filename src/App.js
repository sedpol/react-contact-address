import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Address List App">
          <Layout />
        </header>
      </div>
    );
  }
}

export default App;
