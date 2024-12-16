// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"java script",password:"123"})
//         }else{
//             reject("error js went wrong ")
//         }
//     }, 1000);
// })

// async function costumer() {
//     const response = await promise
//     console.log(response)
// }

// costumer()

///////////////////////////////////////////////////
// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"java script",password:"123"})
//         }else{
//             reject("error js went wrong ")
//         }
//     }, 1000);
// })

// async function consumer() {
//  try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const data = response.json()
//  } catch (error) {
//     console.log("ERROR FOUND PLEASE CLEAR THE ERROR")
//  }

// }
// consumer()

////////////////////////////////////////////////

// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"java script",password:"123"})
//         }else{
//             reject("error js went wrong ")
//         }
//     }, 5000);
// })

// async function costumer() {
//    try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//    const data =  await response.json()
//    console.log(data);

// } catch (error) {
//     console.log("js went wrong")
//    }
// }

// costumer()

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((response) =>{
//     return response.json()
// }).then((data)=>{
//    console.log(data);
// }).catch((error)=>{
//     console.log(`js went wrong ${error}`);

// })

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((response)=>{
// return response.json()
// }).then((data)=>{
//     console.log(data);

// }).catch((error)=>{
// console.log(`ERROE: js not found`);
// })

/////////////////////////////////////////

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true
//     if (!error) {
//       resolve({ username: "praveen kumar", password: "123" });
//     } else {
//       reject("js went wrong")
//     }
//   }, 5000);
// });

// console.log(promise)

//////////////////////////////////////////////

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "praveen kumar", password: "123" });
//     } else {
//       reject("js went wrong");
//     }
//   }, 4000);
// });

// console.log(promise);


/////////////////////////////////////////////////////////////

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
// console.log(data);
// }).catch((error)=>{
//     console.log(`error found${error}`)
// })

////////////////////////////

// async function hello() {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data =  await response.json()
//     console.log(data);
    
//     } catch (error) {
//         console.log(`error found ${error}`);
//     }
// }

// hello()


////////////////////////////////

// function hello(a,b){
// return a + b;
// }

// console.log(hello( 2,5))

////////////////////////////////

// function doubleArray(arr) {
//     return arr.map(num => num * 2);
// }

// console.log(doubleArray([1, 2, 3, 4]));

////////////////////////////////

// let person = {
// name: "praveen kumar",
// age: "23",
// profession: "frontent developer"
// }

// function inheritPropertirs(p){
//     console.log(`${p.name} is a ${p.age} year old and he is a ${p.profession}`);
// }

// inheritPropertirs(person)


///////////////////////////////////////////////////


// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
 

// for (let i = 1; i <= 12; i++) {
//    if (i%3===0 && i%5===0) {
//     console.log("fizzbuzz"); 
//    }else if (i%3===0) {
//     console.log("fizz");
//    }else if (i%5===0) {
//     console.log("buzz");
//    }else{
//     console.log(i);
//    }
    
// }

// for (let i = 1; i <= 15; i++) {
//     if (i%3===0 && i%5===0) {
//        console.log("fizzbuzz");
//     }else if (i%3===0) {
//         console.log("fizz");
//     }else if (i%5===0) {
//         console.log("buzz");
//     }else{
//         console.log(i);
//     }
    
// }


/////////////////////////////////////

// function outerFunction(outerValue) {
//     return function innerFunction(innerValue) {
//         console.log(`Outer value: ${outerValue}, Inner value: ${innerValue}`);
//     }
// }

// let newFunc = outerFunction(5);
// newFunc(10); 

//////////////////////////////////////////////////

// function isPalindrome(str) {
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello"));// false

///////////get unique array /////////////////////
// function getUnique(arr) {
//     return [...new Set(arr)];
// }

// console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));

///////////////////////////////////////////
// const text = "hello everyone my name is praveen kumar"

// const split = text.split("  ");
// console.log(split);

////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5];

// // Map: double each number
// let doubled = numbers.map(num => num * 2);

// // Filter: get only even numbers
// let evenNumbers = numbers.filter(num => num % 2 === 0);

// // Reduce: sum all numbers
// let total = numbers.reduce((sum, num) => sum + num, 0);

// console.log(doubled, evenNumbers, total);


/////////////////////////////////////////////

// const person = {
//     name:"praven kumar",
//     age:123,
//     add:"chilkora"
// }

// const   {name,age,add} = person
// console.log(name);
// console.log(age)
// console.log(add);
// ;


//////////////////////////////////

// const fruits = ["apple", "banana", "orange", "grape"];
// const [first, second, ...rest] = fruits;

// console.log(first);  // Output: "apple"
// console.log(second); // Output: "banana"
// console.log(rest);   // Output: ["orange", "grape"]

/////////////////////////////////////////

// const fruit = ["apple","orange","banana","payaya"]
// const [first,second, ...rest] = fruit


// console.log(first);  // Output: "apple"
// console.log(second); // Output: "banana"
// console.log(rest);   // Output: ["orange", "grape"]

////////////////////////////////////////

const hello = {
    name:"praveen",
    age:12,
    city:"aligarh",
    country:"india"
}

const[name,age, ...otherInfo] = hello

console.log(name);
console.log(age);
console.log(otherInfo);















