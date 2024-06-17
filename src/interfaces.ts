import { Loyalty } from "./enums"

export interface Review {
  name: string,
  stars: number,
  loyaltyUser: Loyalty,
  date: string
  description?: string
}