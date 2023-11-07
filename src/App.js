// src/App.js
import React from 'react';
import './App.css';
import WalletBalance from './WalletBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Metamask Wallet Balance</h1>
        <WalletBalance />
      </header>
    </div>
  );
}

export default App;
