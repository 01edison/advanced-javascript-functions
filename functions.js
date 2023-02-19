function isEven(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("odd");
  }
}

const characters = (str) => {
  console.log(str.length);
};

// characters("hello there. today is thursday");

function converter(str) {
  if (typeof num == "number") {
    console.log(typeof num);
  } else {
    console.log(typeof num);
    const converted = Number(num);
    console.log(converted);
    console.log(typeof converted);
  }
}

function words(str) {
  const words_arr = str.split(" ");
  console.log(words_arr);
  console.log(`there are ${words_arr.length} words`);
}

// words("the sun sets in the east");

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
// console.log(outer());

function bmiCalculator(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi < 18.5) {
    console.log("underweight");
  } else if (bmi > 18.5 && bmi < 24.9) {
    console.log("normal weight");
  } else {
    console.log("overweight");
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

const arr = ["john", "mary", "cynthia"];

function whoIsPaying(arr) {
  const n = arr.length;

  let who = Math.random() * n;

  who = Math.floor(who);
  return `${arr[who]} is going to pay.`;
}

// console.log(whoIsPaying(arr))

function dice() {
  let num = Math.random() * 6;

  num = Math.floor(num) + 1;
  console.log(num);
}

// dice();
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

const account = {
  name: "Jonathan",
  pin: "1111",
  accountBalance: 1000000,

  deposit: function (name, pin, amt) {
    if (this.pin == pin && this.name == name) {
      this.accountBalance += amt; // this.accountBalance  = this.accountBalance + amt
      console.log(`Your new balance is ${this.accountBalance}`);
    } else {
      console.log("invalid details");
    }
  },
  withdraw: function (name, pin, amt) {
    if (this.name == name && this.pin == pin) {
      if (this.accountBalance != 0 && amt <= this.accountBalance) {
        this.accountBalance -= amt;
        console.log(`You have withdrawn ${amt}`);
        console.log(`Your new balance is ${this.accountBalance}`);
      } else {
        console.log("Insuffucient funds");
      }
    } else {
      console.log("invalid details");
    }
  },
};

// account.deposit("Jonathan", "1111", 200000)

const person = {
  name: "Edison",
  relatives: [
    { name: "Ada", role: "mother" },
    { name: "Edison", role: "father" },
    { name: "Brian", role: "brother" },
    { name: "Paula", role: "sister" },
  ],
  previousJobs: ["sales", "hr", "receptionist"],
  age: 40,
  job: "developer",
  addRelative: function (nameVal, roleVal) {
    const relative = {
      name: nameVal,
      role: roleVal,
    };
    this.relatives.push(relative);
  },
};

// console.log(person.previousJobs[2])

// person.age = 50;
// console.log(person)

// person.relatives[2].role = "cousin"
// console.log(person)

// person.religion = "Christianity"
// console.log(person)

// delete person.name
// console.log(person)
// console.log(person)
// person.addRelative("john", "cousin")
// console.log(person)

const movieLibrary = {
  name: "",
  address: "",
  collection: [
    {
      name: "Action",
      movies: [
        { name: "Black panther", releaseYear: 2022 },
        { name: "Thor", releaseYear: 2019 },
      ],
    },
    {
      name: "Series",
      movies: [
        { name: "Euphoria", releaseYear: 2020 },
        { name: "Prison Break", releaseYear: 2005 },
      ],
    },
  ],
  addCollection: function (name) {
    const collection = {
      name,
      movies: [],
    };
    this.collection.push(collection);
  },
  addMovie: function (name, releaseYear, collectionName) {
    // for (let i = 0; i < this.collection.length; i++) {
    //   if (this.collection[i].name == collectionName) {
    //     const movie = {
    //       name,
    //       releaseYear,
    //     };
    //     this.collection[i].movies.push(movie);
    //   }
    // }

    const collection = this.collection.find(function (item) {
      return item.name == collectionName;
    });
    collection.movies.push({ name, releaseYear });
  },
};

movieLibrary.addCollection("Fiction");
console.log(movieLibrary);
movieLibrary.addMovie("Ant man", 2023, "Fiction");
console.log(movieLibrary);

movieLibrary.addMovie("tomb raider", 2020, "Action");
movieLibrary.addMovie("tomb raider", 2020, "Action");
// movieLibrary.addMovie("tomb raider", 2020, "Series")
// movieLibrary.addMovie("tomb raider", 2020, "Horror")

console.log(movieLibrary);

// FOR LOOP RECAP

const str1 = "Hello world";

// for (let i = 0; i < str1.length; i++) {
//     //code ..

//     console.log(str1[i])
// }
// for (let i = 0; i <= 20; i++) {
//     console.log(i)
// }

// const str2 = "javascriaaaaaaapt"
// const letter = "a"
// let count = 0;

// for (let i = 0; i < str2.length; i++) {

//     if (letter === str2[i]) {
//         count++
//     }
// }
// console.log(count)

// let count = 0

// for(let i = 1; i <= 10; i++){
//     count += i // count = count + i
// }

// for(let i = 0; i <10; i++){
//     console.log(i);
// }

// for (let i = 0; i <= 30; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// const fruits = [
//     { name: "Apple", color: "yellow" },
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "green" }
// ]

// for (let i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i].color)
//     if (fruits[i].color === "red") {
//         console.log("We found red")
//     } else {
//         console.log("This fruit is not red")
//     }
// }

// const collections = [
//     { name: "Action", movies: [{ name: "Black panther", releaseYear: 2022 }, { name: "Thor", releaseYear: 2019 }] },
//     { name: "Series", movies: [{ name: "Euphoria", releaseYear: 2020 }, { name: "Prison Break", releaseYear: 2005 }] }
// ]

// const collection = collections.find(function (item) {
//     return item.name == "Action"
// })
// console.log(collection)

// const nums = [2, 4, 6, 7]

// const doubled = nums.map((item) => {
//     return item * 2
// })

// console.log(doubled)

// const lessThan5 = nums.filter((item) => {
//     return item < 5
// })

// console.log(lessThan5)

//OOP (Object Oriented Programming)
// const person = {
//     name: "John",
//     age: 30,
//     gender: "male"
// }
// const mary = {

// }

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduceYourself() {
    return `Hello my name is ${this.name}. I am ${this.age} years old. I am a ${this.gender}`;
  }
}

const john = new Person("John", 30, "Male");
// const mary = new Person("Mary", 22, "Female")
// console.log(john)
// console.log(john.introduceYourself())
// console.log(mary)
// console.log(mary.introduceYourself())

// console.log(john.introduceYourself())
// console.log(mary.introduceYourself())

class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
    this.started = false;
    this.kmCovered = 0;
    this.speed = 0;
  }

  displayInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }

  start() {
    this.started = true;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

const car1 = new Car("Toyota", 2020);
// console.log(car1)

// car1.accelerate() //Toyota going at 10km/h
// car1.accelerate() //Toyota going at 20km/h
// car1.brake() //Toyota going at 15km/h

// console.log(car1.displayInfo())
// const car2 = new Car("Mercedes", 2005)
// console.log(car2)
// console.log(car2.displayInfo())

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return `${this.name} deposited $${amount}. Current Balance: $${this.balance}`;
  }
  withdraw(amount) {
    this.balance -= amount;
    return `${this.name} withdrew $${amount}. Current Balance: $${this.balance} `;
  }

  transfer(amount, accountName) {
    this.balance -= amount;
    accountName.balance += amount;
  }
}

// const jonathan = new BankAccount("Jonathan", 4000)
// console.log(jonathan.deposit(3000))
// console.log(jonathan.deposit(3000))

const mary = new BankAccount("Mary", 5000);
const joseph = new BankAccount("Joseph", 4000);
// console.log(joseph)
// jonathan.transfer(2000, mary) //Jonathan transferred $2000 to Mary. Jonathan's current balance: $8000. Mary's current balance: $7000
// jonathan.transfer(4000, joseph)
// // console.log(jonathan)
// // console.log(mary)
// // console.log(joseph)

// mary.transfer(3000, jonathan)

//INHERITANCE

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    return `My name is ${this.name}`;
  }

  sayAge() {
    return `I am ${this.age} years old.`;
  }
}

const parent1 = new Parent("Austin", 35);

// console.log(parent1)
console.log(parent1.sayName());

class Child extends Parent {
  constructor(name, age, friends) {
    super(name, age);
    this.friends = friends;
  }

  listFriends() {
    this.friends.forEach(function (item) {
      console.log(item);
    });
  }

  sayName() {
    return `${super.sayName()}. I have ${this.friends.length} friends`;
  }
}

const child = new Child("Feyi", 13, ["titi", "mary", "idowu"]);

console.log(child.sayName());
// child.listFriends()

class ElectricCar extends Car {
  constructor(make, year, batteryLvl, model) {
    super(make, year);
    this.batteryLvl = batteryLvl;
    this.model = model;
  }

  charge() {
    this.batteryLvl += 8;
    return `Battery charged to ${this.batteryLvl}`;
  }

  accelerate() {}
}

const electricCar1 = new ElectricCar("Tesla", 2020, 70, "Model X");
console.log(electricCar1.accelerate()); //Tesla going at 10km/h and battery level at 65%
//ASYNCHRONOUS JAVASCRIPT

// const p = document.querySelector("p");
// p.textContent = "Today is tuesday";
// alert("Text is set")

// p.style.color = "red"

// setTimeout(() => {
//   p.textContent = "My name is Edison";
// }, 5000);

// p.style.color = "red";

//AJAX (Asynchronous Javascript and XML)

//STRUCTURE OF AN API
//https://api.example.com/v1/users/?page=2

//https://api.example.com => BASE URL

//  /v1/users/ => ENDPOINT

// /?page=2  => QUERY

// https://www.boredapi.com/api/activity/

fetch("https://www.boredapi.com/api/activity/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// fetch("http://www.boredapi.com/api/activity?type=recreational&participants=4")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

function getTask(type, numParticipants = 1) {
  fetch(
    `http://www.boredapi.com/api/activity?type=${type}&participants=${numParticipants}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getTask("cooking", 2);

let type, numParticipants;

document.querySelector("select").addEventListener("change", (e) => {
  // console.log(e.target.value);
  type = e.target.value;
});

document.querySelector("form").addEventListener("change", (e) => {
  // console.log(e.target.value);
  numParticipants = e.target.value;
});

document.querySelector("button").addEventListener("click", () => {
  if (type == undefined || numParticipants == undefined) {
    console.log("Please select values");
  } else {
    getTask(type, numParticipants);
  }
});
