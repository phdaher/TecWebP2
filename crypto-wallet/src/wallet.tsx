import React, { useState, useEffect } from "react";
import { coin, walletItem, walletContent } from "./wallet-content";

export function Wallet() {
  const [coinList, setCoinList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json"
      })
    })
      .then(res => res.json())
      .then(response => {
        setCoinList(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  });

  return (
    <div>
      {isLoading && <p>Loading</p>}
      <table className="Wallet-table">
        <tr>
          <th>|...Symbol...|</th>
          <th>|....Coin....|</th>
          <th>|....Rate (US$)....|</th>
          <th>|....Qty....|</th>
          <th>|....Value (US$)....|</th>
        </tr>
        {walletContent.map((item: walletItem, index) => (
          <tr>
            <td>{getCoinByName(coinList, item.coin).symbol}</td>
            <td>{getCoinByName(coinList, item.coin).name}</td>
            <td>{round2dec(getCoinByName(coinList, item.coin).priceUsd)}</td>
            <td>{item.qty}</td>
            <td>
              {round2dec(
                getCoinByName(coinList, item.coin).priceUsd * item.qty
              )}
            </td>
          </tr>
        ))}
        <tr>
          <th>TOTAL</th>
          <th></th>
          <th></th>
          <th></th>
          <th>{round2dec(getTotal(coinList, walletContent))}</th>
        </tr>
      </table>
      <div>Time:</div>
    </div>
  );
}

function getCoinByName(coinList: any, coinName: string): coin {
  if (coinList) {
    return coinList.filter((item: { id: string }) => item.id === coinName)[0];
  } else {
    return { id: "", symbol: "", name: "", priceUsd: 0 };
  }
}

function round2dec(x: number): number {
  return Math.round(x * 100) / 100;
}

function getTotal(coinList: any, wc: walletItem[]): number {
  if (coinList) {
    let sum = 0;
    wc.forEach(function(wi) {
      sum += round2dec(getCoinByName(coinList, wi.coin).priceUsd * wi.qty);
    });
    return sum;
  } else {
    return 0;
  }
}