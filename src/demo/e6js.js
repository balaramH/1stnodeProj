//p7 spreaded opener
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1]; // Change this line

// console.log(arr2);

// ...p8=Use Destructuring Assignment to Extract Values from Objects
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };  
//   // Only change code below this line
//     // const today = HIGH_TEMPERATURES.today;
//   // const tomorrow = HIGH_TEMPERATURES.tomorrow;
//   const{today, tomorrow }= HIGH_TEMPERATURES;


// ............p9.....Use Destructuring Assignment to Assign Variables from Objects
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
//   // Only change code below this line
//     // const highToday = HIGH_TEMPERATURES.today;
//   // const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
//   const {today:highToday,tomorrow:highTomorrow} = HIGH_TEMPERATURES; 
//   // Only change code above this line



//.....p10.....Use Destructuring Assignment to Assign Variables from Nested Objects
// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
//   // Only change code below this line
//     // const lowToday = LOCAL_FORECAST.today.low;
//   // const highToday = LOCAL_FORECAST.today.high;
//   const {today:{low:lowToday,high:highToday}} = LOCAL_FORECAST;
//   // Only change code above this line


// ...........p11....Use Destructuring Assignment to Assign Variables from ArraysUse Destructuring Assignment to Assign Variables from Arrays
// let a = 8, b = 6;
// let temp=a;
// a=b;
// b=temp;
// console.log(a,b);
// Only change code below this line
// [a,b]=[b,a];
// console.log(a,b);



// ........p12......Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a,b,...arr] = list; // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);



// .......p13... to Pass an Object as a Function's Parameters
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };

//   // Only change code below this line
//   const half =({ max, min }) => (max + min) /2
//   // Only change code above this line


// ..........p14...Create Strings using Template Literals
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//       "use strict";
//     // Only change code below this line
//      const failureItems = [];
//     for (let i = 0; i < arr.length; i++) {
//       failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//     }
//     // Only change code above this line

//     return failureItems;
//   }

//   const failuresList = makeList(result.failure);



// ........p15.....Write Concise Object Literal Declarations Using Object Property Shorthand
// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return {
//      name,
//       age,
//       gender
//     };
//     // Only change code above this line
//   };
//   const x=createPerson("Zodiac Hasbro", 56, "male");
//   console.log(x);


//------p16...Write Concise Declarative Functions with ES6
// Only change code below this line
// const bicycle = {
//     gear: 2,
//     // setGear: function(newGear) {
//     setGear(bicycle) {
//       this.gear = bicycle;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(48);
//   console.log(bicycle.gear);


// ......p17...Use class Syntax to Define a Constructor Function
// Only change code below this line
// class Vegetable  {
//     constructor(name ) {
//       this.name  = name ;
//     }
//   }
//   // Only change code above this line

//   const carrot = new Vegetable('carrot');
//   console.log(carrot.name); // Should display 'carrot'


//....p18....Use getters and setters to Control Access to an Object
// Only change code below this line
// class Thermostat {
//     constructor(fahrenheit) {
//       this.F = fahrenheit;
//     }
//     // getter
//     get temperature() {
//       return (5 / 9) * (this.F - 32) ;
//     }
//     // setter
//     set temperature(C) {
//       this.F = (C * 9.0) / 5 + 32;
//     }
//   }
//   // Only change code above this line

//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in Celsius
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius


// ........p19.....Create a Module Script
// {/* <html>
//   <body>
//     {/* <!-- Only change code below this line --> */}
// <script type="module" src="index.js"></script>
//     {/* <!-- Only change code above this line --> */}
//   </body>
// </html> */}


// ......p20.....Use export to Share a Code Block
// const uppercaseString = (string) => {
//     return string.toUpperCase();
//   };

//   const lowercaseString = (string) => {
//     return string.toLowerCase()
//   };
//   export { uppercaseString, lowercaseString };



//.....p21....Reuse JavaScript Code Using import
// import { uppercaseString, lowercaseString } from './string_functions.js'; 
// // Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");
// console.log(uppercaseString,lowercaseString);


//......p22........Use * to Import Everything from a File
// import * as stringFunctions from "./string_functions.js";
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");


// ......p23...Create an Export Fallback with export default
// export default function subtract(x, y) {
//   return x - y;
// };
// export default function(x, y) {
//     return x - y;
//   }



//....p24...Import a Default Export
// import subtract from "./math_functions.js"; 
// // Only change code above this line

// subtract(7,4);

//......p25....Create a JavaScript Promise
// const makeServerRequest = new Promise((resolve, reject) => {

// });


//.....p26....Complete a Promise with resolve and reject

// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer represents a response from a server
//     let responseFromServer;

//     if(responseFromServer) {
//    resolve("We got the data");
//       // Change this line
//     } else {  
//          reject("Data not received");
//       // Change this line
//     }
//   });


//......p27.....Handle a Fulfilled Promise with then
// const makeServerRequest = new Promise((resolve, reject) => {

//     // responseFromServer is set to true to represent a successful response from a server
//     let responseFromServer = true;

//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
//   makeServerRequest.then(result => {
//     console.log(result);
//   });
//   //note: this program only change the var name makeServerRequestn to makeServerRequest



//......p28....Handle a Rejected Promise with catch
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;

//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });

//   makeServerRequest.then(result => {
//     console.log(result);
//   });
//   makeServerRequest.catch(error => {
//     console.log(error);
//   });
//Hi i am balaram here