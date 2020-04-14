import React from 'react';
import logo from './logo.svg';
import Content from './component/content'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Content/>
    </div>
  
  );
}

export default App;
