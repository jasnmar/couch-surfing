import "./style.css"
import { showReviewTotal, populateUser, addProperties, getTopTwoReviews } from './utils'
import { Permissions, Loyalty } from './enums'
import { Review, Property, User } from "./interfaces"
import { MainProperty } from "./classes"

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

const you: User = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: true,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23],
    permission: Permissions.ADMIN,
}

const properties: Property[] = [
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
  },
  {
    image: "images/Malia-Hotel.jpg",
    title: "Malia Hotel",
    price: 35,
    location: {
      address1: 'Room 4',
      city: "Malia",
      postalcode: "45334",
      country: "Malaysia"
    },
    contactDetails: [+60349822083, 'lee34@gmail.com'],
    available: false
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


let yourMainProperty = new MainProperty(reviews, properties[3].image, properties[3].title)

const mainImageContainer = document.querySelector('.main-image') as HTMLDivElement
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)