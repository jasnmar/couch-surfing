import { Loyalty, Permissions } from "./enums"
import { Price, Country } from "./types"

export interface Review {
  name: string,
  stars: number,
  loyaltyUser: Loyalty,
  date: string
  description?: string
}

export interface Property {
  image: any,
  title: string,
  price: Price,
  location: {
    address1: string,
    city: string,
    postalcode: string,
    country: Country,
  }
  contactDetails: [number, string],
  available: boolean
}

export interface User {
  userName: { 
    firstName: string,
    lastName: string
  },
  isReturning: boolean,
  age: number,
  stayedAt: (string | number)[]
  permission: Permissions
}