import React, { Component } from 'react';
import Address from './Components/Address'
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Address List App">
          <Address>

          </Address>
        </header>
        
      </div>
    );
  }
}

export default App;
