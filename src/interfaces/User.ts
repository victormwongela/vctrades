export interface User {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  balance: number;
  profit: number;
  role: "user" | "admin";
  isVerified: boolean;
  referralCode: string;
  referredBy?: string;
  createdAt: string;
}