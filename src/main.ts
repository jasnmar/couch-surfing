import "./style.css"

// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement

function displayReviewCount(count: number, reviewer: string) {
  reviewTotalDisplay.textContent = 'review total: ' + count.toString() + ' last reviewed by: ' + reviewer
}

const reviews = [
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

displayReviewCount(reviews.length, reviews[1].name)
