export interface walletItem {
    coin: string;  qty: number;
  }
  
  export const walletInitialContent: walletItem[] = [
    { coin: "bitcoin", qty: 0},
    { coin: "ethereum", qty: 0 },
    { coin: "litecoin", qty: 0 },
    { coin: "binance-coin", qty: 0 },
    { coin: "ripple", qty: 0 }
  ];
  
  export interface coin {
    id: string;
    symbol: string;
    name: string;
    priceUsd: number;
  }