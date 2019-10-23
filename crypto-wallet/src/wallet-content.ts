export interface walletItem {
    coin: string;  qty: number;
  }
  
  export const walletContent: walletItem[] = [
    { coin: "bitcoin", qty: 0.12 },
    { coin: "ethereum", qty: 1.03 },
    { coin: "litecoin", qty: 1.39 },
    { coin: "binance-coin", qty: 0.17 },
    { coin: "ripple", qty: 0.45 }
  ];
  
  export interface coin {
    id: string;
    symbol: string;
    name: string;
    priceUsd: number;
  }