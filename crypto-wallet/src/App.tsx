import React from 'react';
import './App.css';
import { Wallet } from "./wallet";
import { BuySell } from "./buy-sell";
import logo from './crypto-wallet-logo.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="Logo" />
        <BuySell/>
        <br/>
        <Wallet/>
      </header>
    </div>
  );
}

export default App;
