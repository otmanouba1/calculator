const container = document.querySelector('.container')
const output = document.querySelector('.total')
const checkBox = document.querySelector('.toggle')
const clcSeintifique = document.querySelector('.likeKeyword')
const container2 = document.querySelector('.container2')
let numberAndOperation = ''
let display = ''
const replaceFunction = (Match, fun, number) => `Math.${fun}(${number})`
// add event listener to click on the button
container.addEventListener('click', (event) => {
    let contentOfElement = event.target.textContent
  
    //values of things of math in js
    let replacement = {
        '÷': '/',
        '×': '*',
        '√': 'sqrt',
        'e': 'exp',
        '²': '**2',
        '³':'**3'
    }




    // filer the button ho clicked and tha math
    if (event.target.tagName == 'BUTTON') {

        // turn to sentifique calculator
        if (contentOfElement == null) {
            largerContainer()
        }

        //call calculation function
        if (contentOfElement == '=') {
            console.log(numberAndOperation)
            calculation()
        } else if (contentOfElement == 'ac') {
            numberAndOperation = ''
            output.value = ''
            contentOfElement = ''
            display = ''
        //display in the input
        } else {
            output.value += contentOfElement
            display = output.value
        }


        //replace terms in math to js 
        const exception = ['÷', '×', '√', 'e', '²','³'];
        if (exception.some(char => output.value.includes(char))) {
            display = output.value.replace(/÷|×|√|e|²|³/g, match => replacement[match])
        }
        numberAndOperation = display.replace(/[÷×]/g, match => replacement[match])
        numberAndOperation = numberAndOperation.replace(/(sin|cos|tan|log|sqrt|exp)(\d+)/g, replaceFunction)
        // console.log(numberAndOperation)


    }


})
calculation
function calculation() {
    // console.log((numberAndOperation));
    output.value = eval(numberAndOperation)

}
// turn container larger by editing classList
function largerContainer() {

    container.classList.toggle('large-container')
    container2.classList.toggle('keyword-container')
    clcSeintifique.classList.toggle('clc-scientifique')
}












// console.log(event.target.tagName )
// let elementClicked = event.target.closest('button')
// let contentOfElement= elementClicked.textContent