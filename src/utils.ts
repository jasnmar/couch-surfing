import { Loyalty } from "./enums"
import { Review } from "./interfaces"
import { Permissions } from "./enums"

const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement
const propertyDiv = document.querySelector('.properties') as HTMLDivElement

//let isLoggedIn: boolean

export function showReviewTotal(count: number, reviewer: string, loyalty: Loyalty) : void {
  reviewTotalDisplay.textContent = count.toString() + ' review' + makeMultiple(count) + ' | last reviewed by: ' + reviewer + (loyalty === Loyalty.GOLD_USER ? "⭐":"")
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

//let authorityStatus : boolean | Permissions


//isLoggedIn = true
export function addProperties(image: string, title: string, price: number, permission: Permissions) {
  const card = document.createElement("div")
  card.classList.add("card")
  card.innerHTML=title
  const cardImage = document.createElement("img")
  cardImage.setAttribute("src", image)
  card.appendChild(cardImage)
  propertyDiv.appendChild(card)
  showDetails(permission, card, price)
}

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
  if (authorityStatus) {
      const priceDisplay = document.createElement('div')
      priceDisplay.innerHTML = price.toString() + '/night'
      element.appendChild(priceDisplay)
  }
}

// function add( firstValue: number, secondValue: number) :number {
//   return firstValue + secondValue
// }

export function makeMultiple(value: number) : string {
  if (value > 1 || value == 0) {
      return 's'
  } else return ''
}

export function getTopTwoReviews(reviews: Review[]): 
  Review[] 
  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}