

// // // document.addEventListener("DOMContent", function () {
    
// // //     document.getElementById("mode").addEventListener)("click", function () {
// // //         alert("Button clicked");
// // //     });

// // // const hoverBox  = document.getElementById("hoverBox");

// // // hoverBox.addEventListener("mouseover", function () {
// // //     hoverBox.style.backgroundColor = "blue";
// // //     hoverBox.innerText = "Mouse is over me";
// // // });


// // const box = document.getElementById("box");

// // box.addEventListener("mouseover", function () {
// //     box.style.transform = "scale(1.3)";
// // });

// // const hoverText = document.getElementById("hoverText");
// // const msg = document.getElementById("msg");

// // hoverText.addEventListener("mouseout", () => {
// //     msg.style.transform = "scale(1)";
// // });

// // const fadeText = document.getElementById("fadeText");

// // fadeText.addEventListener("mouseover", () => {
// //     fadeText.style.opacity = "0.5";
// // });

// // fadeText.addEventListener("mouseout", () => {
// //     fadeText.style.opacity = "1";
// // });

// // const user1 = {
// //     name: "John",
// //     role: "admin",
// //     isActive: true
// // };

// // // const user2 = {
// // //     name: "Alice",
// // //     role: "admin",
// // //     isActive: true
// // // };

// // // user1.__proto__ = user2;

// // class User {
// //     constructor(id, name, isActive, role=
// //          "User")  {
// //         this.id = id;
// //         this.name = name;
// //         this.isActive = isActive;
// //         this.role = role;


// //     }
// // };

// // const user3 = new User (1, "Bob", true); 

// // class Admin extends User {}

// // let admin1 = new Admin (2, "Charlie", true, "Admin");

// // class Person {
// //     constructor() {
// //         this.eat = "Eating...";
// // }
// //     sleep() {
// //         console.log("Sleeping...");
// //     }
// // };

// // class Developer extends Person {
// //     constructor(branch) {
// //         super();
// //         this.branch = branch;
// //     }
// // }

// // let developerObj = new Developer("frontend");


// // // let info = "Developer Branch"

// // // class User {
// // //     constructor(name, age) {
// // //         this.name = name;
// // //         this.age = age;
// // // }

// // // viewDetails() {
// // //     console.log(`Name: ${this.name}, Age: ${this.age}`);
// // //     }
// // // }

// // // class Member extends User {
// // //     constructor(name, age) {
// // //         super(name, age);
    
// // //     }
// // //     editDetails() {
// // //             info = "Member Branch";
// // //   }
// // // }



// // // let user2 = new User("David", 30);


// // // class User {
// // //     constructor(name) {
// // //         this.name = name;
// // //     }

// // //     sayHello() {
// // //         console.log(`Hello, ${this.name}`);
// // //   }
// // // }

// // // class Member extends User {
// // //     constructor(name, memberId) {
// // //         super(name);
// // //         this.memberId = memberId;
// // //     }

// // //     displayInfo() {
// // //         console.log(`Name: ${this.name}, Member ID: ${this.memberId}`);
// // //     }
// // // }

// // // let member1 = new Member("Eve", 101);

// function getInput (inputId,getNextId) { 
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//     console.log("inputId:", inputId) 
//     // if(getNextId) {
//     //     getNextId();
//     // }
//  }, 1000);

//     });
// }
 
// console.log("script started");
// getInput(1)
//     .then((res) => {
//   return getData(2);
// })
//   .then((res) => {
//         console.log("second input done");
//     })
//   .then((res) => {
//     console.log("third input done");
//   });

// async function fetchData() {
//   console.log("fetching data...");
// }

// //  const getPromise = () => {
// //   return new Promise((resolve, reject) => {
// //     console.log("promise started");
// //     resolve("promise resolved");
// //   });
// //  }

// //  let promiseResult = getPromise();
// //  promise.then ((res) => {
// //     console.log("promiseResult:", promiseResult);
// // });

// // promise.catch((error) => {
// //     console.log("Error")
// // });

// // let promise = new Promise ((resolve, reject) => {
// //   console.log("Promise started");
// //    reject("some error occurred");
// // }); 

// // function asyncFunc() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("async function resolved");
// //       resolve("success");
// //     }, 2000);
// //   });
// // }

// // let promise = asyncFunc();
// // promise.then((res) => {
// //     console.log("promise Result:", res);

// // });


// function addNumbers(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     },2000);
//   });
// }

// async function run() {
//   await addNumbers();
// };

// // let result = await addNumbers(5, 10);

// // console.log("Result:", result);

// run();



// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function execute() {
//   console.log("execution started");
//   await delay(2000);
//   console.log("execution ended after 2 seconds");
// }

// execute();


// async function fetchData() {
//   return { data: "Sample Data" };

// }

// async function displayData(data) {
//   console.log("Data:", data);
// }

// async function process() {
//   const data = await fetchData();
//   const processedData = await displayData(data);
//   console.log("Processed Data:", processedData);
// }

// process();

// const result = await addAfterDelay(2,8, 2000);

// await tryThreeTimes(failingFunction, 3);


// const URL = "https://official-joke-api.appspot.com/jokes/random";

//       const jokeElement = document.getElementById("joke");
//       const jokeList = document.getElementById("jokeList");

// const getJokes = async () => {
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data[1].text);
// }
 
// function getJokes() {
//   fetch(URL)
//     .then((response) => {
//     return response.json();
//     })
//     .then((data) => {
//       console.log(data[1].text);
//       jokeElement.innerText = data[1].text;
//     });
// }

// // try {
// //   data.forEach((joke) => {
// //     const li = document.createElement("li");
// //     li.innerText = `${joke.setup} - ${joke.punchline}`;
// //     jokeList.appendChild(li);
// //   });
// // } catch (error) {
// //   console.error("Error fetching jokes:", error);
// // }


// // function handleError(error) {
// //   console.error("Error fetching or displaying jokes:", error);
// //   jokeElement.innerText = "Oops! Couldn't load jokes. Please try again later.";
// // }


// function filterJokesByKeyword(jokes, keyword) {
//   const filtered = jokes.filter(joke =>
//     joke.setup.toLowerCase().includes(keyword.toLowerCase()) ||
//     joke.punchline.toLowerCase().includes(keyword.toLowerCase())
//   );
//   displayJokeList(filtered);
// }

// function searchJokes() {
//   const keyword = document.getElementById("keywordInput").value;
//   fetch(URL)
//     .then(response => response.json())
//     .then(data => filterJokesByKeyword(data, keyword))
//     .catch(handleError);
// }



// function refreshJokes() {
//   jokeElement.innerText = "Loading new jokes...";
//   getJokes();
// }


// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function showMessage() {
//   console.log("Waiting...");
//   await delay(2000);
//   console.log("Done after 2 seconds!");
// }

// showMessage();

// async function task1() {
//     return "Task 1 done"
// }

// async function task2() {
//     return "Task 2 done"
// }

// async function runAll() {
//     const result = await Promise.all([task1(),task2()])
//     console.log(result);
// }

// runAll()  
// async function numbers() {
//   let oddNumbers = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//       resolve("3,5,7");
//     }, 1000);
//   });

//   let evenNumbers = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2,4,6");
//     }, 1000);
//   });


//   let odd = await oddNumbers;
//   let even = await evenNumbers;

//   console.log("Odd:", odd);
//   console.log("Even:", even);
// }

// numbers();

let promise = new Promise(function(resolve,reject) {
    let sum = 4+4
  if(sum==8) {
    resolve("success")
  } else {
    reject("Wrong")
  }
})

try {
  console.log('start')

  subject;

 console.log('end');

} catch (err) {
  console.log('error has occured:'= err.stack);
} finally {
  console.log('run');
}

console.log('execution continues');

// let jsonSamples = [
//   '{}',
//   '{"name": "Lisa"}',
//   '{"age": 25}',
//   '{"name": "Lisa", "age": "twenty"}', 
//   '{"name": "Lisa", "age": 25}',
//   '{"name": "Tom", "age": -5}',
//   '{bad json}',
// ];

// for (let json of jsonSamples) {
//   try {
//     console.log("Parsing:", json);

//     let user = JSON.parse(json); 


//     if (!user.name || !user.age) {
//       throw new SyntaxError("Incomplete user data!");
//     }

  
//     if (typeof user.age !== "number") {
//       throw new TypeError("Age must be a number!");
//     }

  
//     if (user.age < 0 || user.age > 120) {
//       throw new RangeError("Age value is not realistic!");
//     }

//     console.log(" User data is valid:", user);
//   } catch (e) {
//     console.log("Error:", e.name + " - " + e.message);
//   }

//   console.log("---------------------");
// }


// document.getElementById("textInput").addEventListener("keydown", (e) => {
//   console.log("Event object:", e);
//   console.log("Key pressed:", e.key);
//   console.log("Was Shift pressed?", e.shiftKey);
// });


document.getElementById("input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert("You pressed Enter!");
  } else if (e.key === "ctrl") {
    alert("You pressed ctrl!");
  } else if (e.key === " ") {
    alert("You pressed Space!");
  }
});

let count = 0;
document.addEventListener("keydown", () => {
  count++;
  document.getElementById("count").textContent = count;
});


// let num = prompt("enter a number:")

// if (num % 2 === 0) {
//    alert(num + "is even");
// } else {
//   alert(number + "is odd");

// }


// let random = (Math.random() * 5) + 1; 
// let number = parseInt(random);      
// let guess = prompt("Guess a number between 1 and 5:");

// if (guess == number) {
//   alert("Correct!");
// } else {
//   alert("Wrong! It was " + number);
// }


// let num = prompt("enter a number:");

// if (num > 0) {
//   alert(num + "is positive");
// } else if (number < 0) {
//   alert(number + " is Negative");
// } else if (number == 0) {
//   alert("The number is Zero");
// } else {
//   alert("Please enter a valid number");
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const heading = document.getElementById("myHeading");

//   heading.addEventListener("mouseover", function() {
//     heading.style.color = "red";
//   });

//   heading.addEventListener("mouseout", function() {
//     heading.style.color = "black";
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let count = 0;
//   const button = document.getElementById("countBtn");
//   const counterText = document.getElementById("counter");

//   button.addEventListener("click", function () {
//     count++;
//     counterText.textContent = count;
//   });
// });


// function sayName() {
//     let name = document.getElementById("nameInput").value;
//     alert("Hello, " + name + "!");
//   }


//   let arr1 = [1, 2, 3];
//   let arr2 = [4, 5, 6];

//   function intersection(arr1, arr2) {
//   return arr1.filter(item => arr2.includes(item));
// }

// document.getElementById("btn").addEventListener("click", function() {
//   document.body.classList.toggle("dark-mode");
// });


// const showTextBtn = document.getElementById("showText");
// const textDiv = document.getElementById("text");

// showTextBtn.addEventListener("click", function() {
//     if (textDiv.style.display === "none") {
//         textDiv.style.display = "block";
//         button.innerText = "hide text";
//     } else {
//         textDiv.style.display = "none";
//         button.innerText = "show text";
//     }
// });

// let score = 72;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else if (score >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }


// let number = 7;

// if (number % 2 === 0) {
//   console.log(number + " is even");
// } else {
//   console.log(number + " is odd");
// }


// let age = 17;

// if (age < 18) {
//   console.log("cannot vote");
// } else { 
//   console.log("can vote");
// }

// let value = 45;

// if (value >= 1 && value <= 100) {
//   console.log("In range");
// } else {
//   console.log("Out of range");
// }


  // document.addEventListener("DOMContentLoaded", () => {
  //     let btnHello = document.querySelector("#btnHello");
  //     let btnWorld = document.querySelector("#btnWorld");
  //     let content = document.querySelector("#content");

  //     btnHello.addEventListener("click", () => {
  //       content.innerHTML = "<p>Hello! Welcome to my page </p>";
  //     });

  //     btnWorld.addEventListener("click", () => {
  //       content.innerHTML = "<p>World says hi </p>";
  //     });
  //   });

const paragraph = document.querySelector('p')
 paragraph.innerText = 'this is the updated paragraph text.'
paragraph.textContent = 'this is another way to update the paragraph text.'

const mul3 = (a, b, c) => {
  console.log(a * b * c);
};

const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};


const doubleArray = (arr) => arr.map(num => num * 2);

// const numbers = [1, 2, 3, 4, 5, 6];
// const evens = numbers.filter(num => num % 2 === 0);


const toUpperNames = names => names.map(name => name.toUpperCase());
const names = ["alice", "bob", "charlie"];


const sortAsc = arr => arr.sort((a, b) => a - b);

const minNum = arr => Math.min(...arr);

const greaterThanTen = arr => arr.filter(num => num > 10);

const stringLengths = arr => arr.map(str => str.length);

const allPositive = arr => arr.every(num => num > 0);

const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);


hello(goodbye);
// goodbye();


function hello(callback){
  console.log("Hello!");
  callback();
}

function drop(){
  console.log("Drop the call!");
}

function talk(){
  console.log("Talking...");
}


function goodbye(){
  console.log("Goodbye!");
}


function makePizza(callback) {
  console.log("making pizza");
  setTimeout(() => {
    console.log("pizzas ready!");
    callback(); 
  }, 2000);
}

function eatPizza() {
  console.log("eating the pizza!");
}

makePizza(eatPizza);


// let numbers = [1, 2, 3, 4, 5];

numbers.forEach(triple);
numbers.forEach(print);

function triple(num) {
  console.log(num * 3);
}


function print(num) {
  console.log(num);
}

let colors = ["red", "green", "blue"];

function displayColor(color) {
  console.log("Color:", color)
}

colors.forEach(displayColor);

let evenNumbers = [2, 4, 6, 8, 10];

evenNumbers.forEach(print);

// const numbers = [10, 25, 7, 42, 19];
// let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript")); 


// const numbers = [2, 5, 8, 10];
// let sum = 0;

// for (let num of numbers) {
//   sum += num;
// }

console.log("Sum:", sum); 

const name = prompt("What’s your name?");
alert("Hello, " + name + "!");


const password = "openai";
let input = prompt("Enter password:");

if (input === password) {
  alert("Access granted!");
} else {
  alert("Wrong password!");
}


// const numbers = [10, 20, 30, 40, 50];
const squares = numbers.map(square);
const cubes = numbers.map(cube);


function square(element) {
  return element * element;
}

console.log("cubes:");

function cube(element) {
  return element * element * element;
}

filtered = numbers.filter(isGreaterThan25);


let globalVar = "I’m global";
console.log(globalVar);

function test() {
  let inside = "I’m inside";
  console.log(inside); 
}
console.log(inside); //wont work


function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

let increment = outer();


   setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// function Timer() {
//   this.seconds = 0;
//   setInterval(function() {
//     this.seconds++;
//   }, 1000);
// }


// function Timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 1000);
// }

// function Timer() {
//   this.seconds = 0;

//   setInterval(function() {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 1000);
// }

// const t = new Timer();

// const counter = {
//   count: 0,
//   increment() {
//     this.count++;
//   }
// };

// function Person(name) {
//   this.name = name;
// }

// const user = new Person('Alice');
// console.log(user.name); 



const cat = {
  sound: 'Meow',
  speak() {
    console.log(this.sound);
  }
};