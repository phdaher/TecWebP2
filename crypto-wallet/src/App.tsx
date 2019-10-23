import React from 'react';
import './App.css';
import { Wallet } from "./wallet";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CRYPTO WALLET
        </p>
        <Wallet/>
      </header>
    </div>
  );
}

export default App;
