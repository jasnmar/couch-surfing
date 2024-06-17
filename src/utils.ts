const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement
const propertyDiv = document.querySelector('.properties') as HTMLDivElement

export function showReviewTotal(count: number, reviewer: string, loyalty: boolean) {
  reviewTotalDisplay.textContent = 'review total: ' + count.toString() + ' last reviewed by: ' + reviewer + (loyalty ? "⭐":"")
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function addProperties(image: string, title: string) {
  propertyDiv.innerHTML += `<div class="card"><img src=${image}><p>${title}</p></div>`
}