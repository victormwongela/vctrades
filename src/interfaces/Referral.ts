export interface Referral {
  id: number;
  userId: number;
  referredUserId: number;
  commission: number;
  createdAt: string;
}