export interface Deposit {
  id: number;
  userId: number;
  amount: number;
  paymentMethod: string;
  proof?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}