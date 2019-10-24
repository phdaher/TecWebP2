import React, { useState } from "react";
import { walletInitialContent, walletItem } from "./wallet-content";
import createPersistedState from "use-persisted-state";

const useWalletState = createPersistedState("crypto-wallet");

export function BuySell() {
  const [wallet, setWallet] = useWalletState(walletInitialContent);
  const [coin, setCoin] = useState("bitcoin");
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <select value={coin} onChange={e => setCoin(e.target.value)}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="ripple">XRP</option>
        <option value="bitcoin-cash">Bitcoin Cash</option>
        <option value="eos">EOS</option>
        <option value="stellar">Stellar</option>
        <option value="litecoin">Litecoin</option>
        <option value="tether">Tether</option>
        <option value="cardano">Cardano</option>
        <option value="monero">Monero</option>
        <option value="tron">TRON</option>
        <option value="binance-coin">Binance Coin</option>
        <option value="bitcoin-sv">Bitcoin SV</option>
      </select>
      <input
        value={quantity}
        type="number"
        name="quantity"
        min="0.00"
        max="5.00"
        onChange={e => setQuantity(Number(e.target.value))}
      ></input>
      <button
        onClick={() =>
          setWallet(wallet => {
            let newWallet = JSON.parse(JSON.stringify(wallet));
            let index = newWallet
              .map((wi: walletItem) => wi.coin)
              .indexOf(coin);
            if ((index == -1)) {
              newWallet.push({coin: coin, qty: Math.max(quantity,0)})
            } else {
              newWallet[index].qty = Math.max(
                0,
                newWallet[index].qty + quantity
              );
            }
            return newWallet;
          })
        }
      >
        Buy
      </button>
      <button
        onClick={() =>
            setWallet(wallet => {
              let newWallet = JSON.parse(JSON.stringify(wallet));
              let index = newWallet
                .map((wi: walletItem) => wi.coin)
                .indexOf(coin);
              if ((index == -1)) {
                newWallet.push({coin: coin, qty: Math.max(quantity,0)})
              } else {
                newWallet[index].qty = Math.max(
                  0,
                  newWallet[index].qty - quantity
                );
              }
              return newWallet;
            })
          }
        >
        Sell
      </button>
    </div>
  );
}