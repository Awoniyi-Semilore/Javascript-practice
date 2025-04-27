var x;
var y;
var z;

x= 7;
y=8;
z=x + y;

var age = 8;

const firstName= "Awoniyi";
let nameOfLocalGovernment = 'Kosofe';
var name_of_local_government = "Ketu";

console.log(z);

let num1 = 7;
let num2 = '7';

if(num1 === num2){
    console.log('The datatype of number 1 and 2 are the same')
}else(
    console.log('The values are not the same')
);

let church;

{
    let church = "RCCG"
}

console.log(church)

const names = ['Semilore', 'Samuel', 'Ayomide', 'Ife']
console.log(names)

let t;       // Now x is undefined
t = 5;       // Now x is a Number
t = "John"; 
console.log()
let nums = 5e2
console.log(nums)


function multiplyNumbers(n1, n2){
    console.log(n1* n2)
}

multiplyNumbers(4,5)

function displaysFirstName(name){
    console.log(name)
}

displaysFirstName("Akin")

// const multiplyNumbers = (n1,n2) => {
//     console.log(n1*n2)
// }

// multiplyNumbers(4,5)

multiplyNumbers(9,12)

function sayMyName (){
    console.log("Ayomide")
}

sayMyName()
function exponentialNumbers(h1,h2){
    let result = h1 ** h2
    console.log(result)
}

exponentialNumbers(4,5)

let myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}

let mySelf = {
    surname: "Awoniyi",
    firstname: "Semilore",
    hobbies: ["reading", "playing", "watching tv"],
    school: "Unilag"
}
console.log(mySelf.hobbies)

let text = "HELLO WORLD";
console.log(text.charAt(7));


// const number1 = Number(prompt("Enter your first number"))
// const number2 = Number(prompt("Enter your second number"))

// const enterOperator = prompt("Enter operator")

// if(enterOperator == '+' ){
//     let result = number1 + number2
//     console.log(result)
// }else if (enterOperator == '-'){
//     let result = number1 - number2
//     console.log(result)
// }else if(enterOperator == '*'){
//     let result = number1 * number2
//     console.log(result)
// }else if (enterOperator == '/'){
//     let result = number1 / number2
//     console.log(result)
// }else{
//     console.log('Operator not recognized')
// }

// let guess = 4
// const userGuess = Number(prompt("Enter a number"))
// if (guess == userGuess){
//     console.log('you guessed right')
// }else{
//     console.log('your guess is wrong!')
// }

// let tasks = prompt("Enter your tasks, seperate each tasks with space")
// let task = tasks.split(" ")
// const tasksArray = [task]
// console.log(tasksArray)

// let userNumber = prompt("Enter any number")
// const numberRemainder = userNumber % 2
// if (numberRemainder == 0){
//     console.log('The inputed number is even')
// }else{
//     console.log('The inputed number is odd')
// }

// let minute = Number(prompt("Enter any number"))


// for (let i = minute; i >= 0; i--) {
//     console.log(i);
// }

const today = new Date()
let dateOnly = today.toDateString()
let year = today.getFullYear()

console.log(year)

// let userYear = Number(prompt("Enter your birth year"))
// const userAge = year - userYear
// console.log('You are currently ' + userAge + ' years old')

// let billAmount = prompt("Enter yout bill amount in figure only")
// let tipPercentage = prompt("Enter the tip percentage in figures only")
// if(!isNaN(billAmount) && !isNaN(tipPercentage) && tipPercentage >= 0 && billAmount >= 0){
//     const percentage = tipPercentage * 0.01
//     const tipAmount = Number(billAmount) * Number(percentage)
//     const totalBill = Number(tipAmount) + Number(billAmount)
//     console.log('your total bill is ' + totalBill + 'naira')
// }else{
//     console.log('invalid input, please enter a positive number.')
// }

let userInput = prompt("Enter '0' for Rock, '1' for paper or '2' for scissors")
if (!isNaN(userInput)){
    const sampleArray = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    console.log('You picked ' + sampleArray[userInput])
    console.log('Computer picked ' + sampleArray[randomNumber])
    if(userInput == randomNumber){
        console.log('Nobody won')
    }else if(userInput == 0 && randomNumber == 1){
        console.log('Computer won')
    }
    else if(userInput == 0 && randomNumber == 2){
        console.log('You won')
    }
    else if(userInput == 1 && randomNumber == 0){
        console.log('You won')
    }
    else if(userInput == 1 && randomNumber == 2){
        console.log('Computer won')
    }
    else if(userInput == 2 && randomNumber == 0){
        console.log('Computer won')
    }
    else if(userInput == 2 && randomNumber == 1){
        console.log('You won')
    }
}
else{
    console.log('only input number 0 or 1 or 2')
}
