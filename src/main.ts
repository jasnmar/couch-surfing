import "./style.css"
import { showReviewTotal, populateUser, addProperties, getTopTwoReviews } from './utils'
import { Permissions, Loyalty } from './enums'
import { Country, Price } from "./types"
import { Review } from "./interfaces"


const footer = document.querySelector('.footer') as HTMLDivElement
const reviewContainer = document.querySelector('.reviews') as HTMLHeadingElement
const container = document.querySelector('.container') as HTMLDivElement
const button = document.querySelector('button') as HTMLButtonElement



const reviews: Review[]
 = [
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
  price: Price,
  location: {
    address1: string,
    city: string,
    postalcode: string,
    country: Country,
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
    price: 30,
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
    price: 25,
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

let count = 0
function addReviews(array: Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))


let currentLocation: [location: string, time: string, temperature: number] = ["Chichester, NH", new Date().toTimeString(), 24]
footer.innerHTML = currentLocation.toString()

// class Car {
//   make: string
//   year: number
//   color: string
//   constructor(make: string, year: number, color: string) {
//     this.make = make
//     this.year = year
//     this.color = color
//   }
// }


// 1. Add a Class that will let us create a main image, it should allow us to 
// store the reviews, the src and title.

class MainImage {
  reviews: Review[]
  src: string
  title: string
  constructor(reviews: Review[], src: string, title: string) {
    this.reviews = reviews
    this.src = src
    this.title = title
  }
}