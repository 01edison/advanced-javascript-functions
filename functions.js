function isEven(num){
    if(num %2 == 0){
        console.log("Even")
    }else{
        console.log("odd")
    }
}


const characters = (str)=>{console.log(str.length)}

characters("hello there. today is thursday")

function converter(str){
    if(typeof num == "number"){
        console.log(typeof num)
    }else{
        console.log(typeof num)
        const converted = Number(num)
        console.log(converted)
        console.log(typeof converted)
    }
}

function words(str){
    const words_arr = str.split(" ")
    console.log(words_arr)
    console.log(`there are ${words_arr.length} words`)
}

words("the sun sets in the east")

// SCOPE EXAMPLE 1
// let x = 10; // global scope

// function myFunction() {
//   let y = 5; // local scope
//   console.log(x + y);
// }

// console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined
// myFunction(); // 15

// SCOPE EXAMPLE 2
// let x = 10;
// function myFunction() {
//   x = 5;
//   console.log(x);
// }
// console.log(x);
// myFunction();
// console.log(x);

// SCOPE EXAMPLE 3
// let x = 10;
// function myFunction() {
//   x = 5;
// }
// console.log(x);
// myFunction();
// console.log(x);

// SCOPE EXAMPLE 4
// let x = 10;
// function myFunction() {
//   let x = 5;
//   function myInnerFunction() {
//     console.log(x);
//   }
//   myInnerFunction();
// }
// console.log(x);
// myFunction();

// SCOPE EXAMPLE 5
function outer() {
  let x = 5;
  function inner() {
    x = 10;
  }
  inner();
  return x;
}
console.log(outer());


function bmiCalculator(weight, height) {

    const bmi = weight / (height ** 2)

    if (bmi < 18.5) {
        console.log("underweight")
    } else if (bmi > 18.5 && bmi < 24.9) {
        console.log("normal weight")
    } else {
        console.log("overweight")
    }
}

// const weight = parseInt(prompt("What is your weight?"))
// const height = parseInt(prompt("What is your height?"))

// console.log(10 % 5 == 0)
// bmiCalculator(weight, height)

//https://mathsisfun.com/leap-years.html
// function isLeapYear(year) {
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                 console.log("leap year")
//             } else {
//                 console.log("not leap year")
//             }
//         } else {
//             console.log("leap year")
//         }
//     } else {
//         console.log("not leap year")
//     }
// }

// isLeapYear(2100)

const arr = ["john", "mary", "cynthia"]


function whoIsPaying(arr){
    const n = arr.length

    let who = Math.random() * n
    
    who = Math.floor(who)
    return `${arr[who]} is going to pay.`
}

// console.log(whoIsPaying(arr))

function dice(){
    let num = Math.random() * 6

    num = Math.floor(num) + 1
    console.log(num)
}

dice()
//DEFAULT PARAMETERS

// function add5(x, y = 5) {
//     return x + y
// }

// console.log(add5(3))


// function greeting(name, type = "hello", ) {
//     console.log(`${type} ${name}`)
// }

// greeting("Edison")

// const bookings = []

// // function createBooking(flightNum, numPassengers, price){

// // }

// const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
//     const booking = {
//         flightNum: flightNum,
//         numPassengers: numPassengers,
//         price: price
//     }
//     console.log(booking)
//     bookings.push(booking)
//     console.log(bookings)
//     console.log(`We now have ${bookings.length} bookings`)
// }

// createBooking("LH123")
// createBooking("LH124", 3)


// function mul5(x, y = 5, z = 7) {
//     return x * y * z;
// }

// console.log(mul5(6, 7, 10))

// function greeting(name="stranger"){
//     console.log("Hello "+ name)
// }

// greeting("edison")

// function concatenate(first, second="default"){
//     return  first + " " + second
// }
// concatenate("Hello") // "Hello default"
// concatenate("Hello", "world") // "Hello world"
// concatenate("Hello", "world") // "Hello world"
// console.log(concatenate()) // "Hello world"



// OBJECTS
// An object is a collection of properties and methods in key value pairs. Properties are like variables that
// store data while methods are functions that perform actions

// const car ={
//     make:"Toyota",
//     model:"Camry",
//     year: 2020,
//     started: false,
//     kmCovered: 0,
//     start: function (){
//         this.started = true
//     },
//     move: function(dist){
//         if(this.started == true){
//             this.kmCovered += dist  //this.kmCovered = this.kmCovered + dist
//         }else{
//             console.log("Car not started")
//         }
//     },
//     reverse: function (dist){
//         if (this.started == true) {
//             this.kmCovered = this.kmCovered -  dist
//         } else {
//             console.log("Car not started")
//         }
//     }
// }

// console.log(car)
// car.start()
// console.log(car)
// car.move(5)
// console.log(car)

// const employee = {
//     name: "John",
//     title: "Sales manager",
//     salary: 100000,
//     annualSalary: function () {
//         const annual = this.salary * 12
//         return annual
//     }
// }

// const result = employee.annualSalary()
// console.log(result)

const account ={
    accountBalance: 1000000,

    deposit: function(amt){}, 
    withdraw: function(amt){}
}