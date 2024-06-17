import "./style.css"
import { showReviewTotal, populateUser, addProperties } from './utils'
import { Permissions, Loyalty } from './enums'


const reviews: {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
  description?: string,
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: Loyalty.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: Loyalty.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: Loyalty.SILVER_USER,
        date: '27-03-2021',
        description: 'my stay was awful'
    },
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


const you: { 
  userName: { 
    firstName: string,
    lastName: string
  },
  isReturning: boolean,
  age: number,
  stayedAt: (string | number)[]
  permission: Permissions
 } = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: true,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23],
    permission: Permissions.ADMIN,
}

const properties: {
  image: string,
  title: string,
  price: number,
  location: {
    address1: string,
    city: string,
    postalcode: string,
    country: string,
  }
  contactDetails: [number, string],
  available: boolean
}[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Columbian Shack",
    price: 45,
    location: {
      address1: 'shack 37',
      city: "Bogata",
      postalcode: "45632",
      country: "Columbia"
    },
    contactDetails: [+1123495082908 ,'marywinkle@gmail.com'],
    available: true
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 34,
    location: {
      address1: 'no 23',
      city: "Gdansk",
      postalcode: "345632",
      country: "Poland"
    },
    contactDetails: [+1123495082908, 'garydavis@gmail.com'],
    available: true
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 23,
    location: {
      address1: 'flat 23',
      city: "London",
      postalcode: "34255",
      country: "UK"
    },
    contactDetails: [+1123495082908, 'andyluger@aol.com'],
    available: true
  }
]

populateUser(you.isReturning, you.userName.firstName)
properties.forEach(property => {
  addProperties(property.image, property.title, property.price, you.permission)
});


const footer = document.querySelector('.footer') as HTMLDivElement
let currentLocation: [location: string, time: string, temperature: number] = ["Chichester, NH", new Date().toTimeString(), 24]
footer.innerHTML = currentLocation.toString()
