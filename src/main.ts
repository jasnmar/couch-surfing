import "./style.css"
import { showReviewTotal, populateUser, addProperties } from './utils'
// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?


const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
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
 } = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: true,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]
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

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.userName.firstName)
properties.forEach(property => {
  addProperties(property.image, property.title)
});


const footer = document.querySelector('.footer') as HTMLDivElement
let currentLocation: [location: string, time: string, temperature: number] = ["Chichester, NH", new Date().toTimeString(), 24]
footer.innerHTML = currentLocation.toString()
