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