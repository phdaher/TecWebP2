import React from 'react';
import './App.css';
import { Wallet } from "./wallet";
import { BuySell } from "./buy-sell";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CRYPTO WALLET
        </p>
        <BuySell/>
        <br/>
        <Wallet/>
      </header>
    </div>
  );
}

export default App;
