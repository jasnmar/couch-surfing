import "./style.css" 

// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers

const button = document.querySelector('.button') as HTMLButtonElement
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const screen = document.querySelector('.screen') as HTMLDivElement
 
function addNumbers(a: number,b: number) {
    const result: number = a + b
     screen.innerHTML = result.toString()   
}
 
button.addEventListener('click', () => addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))