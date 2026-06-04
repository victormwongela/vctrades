export interface Withdrawal {
  id: number;
  userId: number;
  amount: number;
  walletAddress: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}