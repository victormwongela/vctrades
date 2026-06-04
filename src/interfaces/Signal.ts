export interface Signal {
  id: number;
  pair: string;
  direction: "BUY" | "SELL";
  entryPrice: number;
  stopLoss: number;
  takeProfit: number;
  createdAt: string;
}