

// // // // document.addEventListener("DOMContent", function () {
    
// // // //     document.getElementById("mode").addEventListener)("click", function () {
// // // //         alert("Button clicked");
// // // //     });

// // // // const hoverBox  = document.getElementById("hoverBox");

// // // // hoverBox.addEventListener("mouseover", function () {
// // // //     hoverBox.style.backgroundColor = "blue";
// // // //     hoverBox.innerText = "Mouse is over me";
// // // // });


// // // const box = document.getElementById("box");

// // // box.addEventListener("mouseover", function () {
// // //     box.style.transform = "scale(1.3)";
// // // });

// // // const hoverText = document.getElementById("hoverText");
// // // const msg = document.getElementById("msg");

// // // hoverText.addEventListener("mouseout", () => {
// // //     msg.style.transform = "scale(1)";
// // // });

// // // const fadeText = document.getElementById("fadeText");

// // // fadeText.addEventListener("mouseover", () => {
// // //     fadeText.style.opacity = "0.5";
// // // });

// // // fadeText.addEventListener("mouseout", () => {
// // //     fadeText.style.opacity = "1";
// // // });

// // // const user1 = {
// // //     name: "John",
// // //     role: "admin",
// // //     isActive: true
// // // };

// // // // const user2 = {
// // // //     name: "Alice",
// // // //     role: "admin",
// // // //     isActive: true
// // // // };

// // // // user1.__proto__ = user2;

// // // class User {
// // //     constructor(id, name, isActive, role=
// // //          "User")  {
// // //         this.id = id;
// // //         this.name = name;
// // //         this.isActive = isActive;
// // //         this.role = role;


// // //     }
// // // };

// // // const user3 = new User (1, "Bob", true); 

// // // class Admin extends User {}

// // // let admin1 = new Admin (2, "Charlie", true, "Admin");

// // // class Person {
// // //     constructor() {
// // //         this.eat = "Eating...";
// // // }
// // //     sleep() {
// // //         console.log("Sleeping...");
// // //     }
// // // };

// // // class Developer extends Person {
// // //     constructor(branch) {
// // //         super();
// // //         this.branch = branch;
// // //     }
// // // }

// // // let developerObj = new Developer("frontend");


// // // // let info = "Developer Branch"

// // // // class User {
// // // //     constructor(name, age) {
// // // //         this.name = name;
// // // //         this.age = age;
// // // // }

// // // // viewDetails() {
// // // //     console.log(`Name: ${this.name}, Age: ${this.age}`);
// // // //     }
// // // // }

// // // // class Member extends User {
// // // //     constructor(name, age) {
// // // //         super(name, age);
    
// // // //     }
// // // //     editDetails() {
// // // //             info = "Member Branch";
// // // //   }
// // // // }



// // // // let user2 = new User("David", 30);


// // // // class User {
// // // //     constructor(name) {
// // // //         this.name = name;
// // // //     }

// // // //     sayHello() {
// // // //         console.log(`Hello, ${this.name}`);
// // // //   }
// // // // }

// // // // class Member extends User {
// // // //     constructor(name, memberId) {
// // // //         super(name);
// // // //         this.memberId = memberId;
// // // //     }

// // // //     displayInfo() {
// // // //         console.log(`Name: ${this.name}, Member ID: ${this.memberId}`);
// // // //     }
// // // // }

// // // // let member1 = new Member("Eve", 101);

// // function getInput (inputId,getNextId) { 
// //     return new Promise((resolve, reject) => {
// //      setTimeout(() => {
// //     console.log("inputId:", inputId) 
// //     // if(getNextId) {
// //     //     getNextId();
// //     // }
// //  }, 1000);

// //     });
// // }
 
// // console.log("script started");
// // getInput(1)
// //     .then((res) => {
// //   return getData(2);
// // })
// //   .then((res) => {
// //         console.log("second input done");
// //     })
// //   .then((res) => {
// //     console.log("third input done");
// //   });

// // async function fetchData() {
// //   console.log("fetching data...");
// // }

// // //  const getPromise = () => {
// // //   return new Promise((resolve, reject) => {
// // //     console.log("promise started");
// // //     resolve("promise resolved");
// // //   });
// // //  }

// // //  let promiseResult = getPromise();
// // //  promise.then ((res) => {
// // //     console.log("promiseResult:", promiseResult);
// // // });

// // // promise.catch((error) => {
// // //     console.log("Error")
// // // });

// // // let promise = new Promise ((resolve, reject) => {
// // //   console.log("Promise started");
// // //    reject("some error occurred");
// // // }); 

// // // function asyncFunc() {
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       console.log("async function resolved");
// // //       resolve("success");
// // //     }, 2000);
// // //   });
// // // }

// // // let promise = asyncFunc();
// // // promise.then((res) => {
// // //     console.log("promise Result:", res);

// // // });


// // function addNumbers(a, b) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve(a + b);
// //     },2000);
// //   });
// // }

// // async function run() {
// //   await addNumbers();
// // };

// // // let result = await addNumbers(5, 10);

// // // console.log("Result:", result);

// // run();



// // function delay(ms) {
// //   return new Promise((resolve) => setTimeout(resolve, ms));
// // }

// // async function execute() {
// //   console.log("execution started");
// //   await delay(2000);
// //   console.log("execution ended after 2 seconds");
// // }

// // execute();


// // async function fetchData() {
// //   return { data: "Sample Data" };

// // }

// // async function displayData(data) {
// //   console.log("Data:", data);
// // }

// // async function process() {
// //   const data = await fetchData();
// //   const processedData = await displayData(data);
// //   console.log("Processed Data:", processedData);
// // }

// // process();

// // const result = await addAfterDelay(2,8, 2000);

// // await tryThreeTimes(failingFunction, 3);


// // const URL = "https://official-joke-api.appspot.com/jokes/random";

// //       const jokeElement = document.getElementById("joke");
// //       const jokeList = document.getElementById("jokeList");

// // const getJokes = async () => {
// //   let response = await fetch(URL);
// //   console.log(response);
// //   let data = await response.json();
// //   console.log(data[1].text);
// // }
 
// // function getJokes() {
// //   fetch(URL)
// //     .then((response) => {
// //     return response.json();
// //     })
// //     .then((data) => {
// //       console.log(data[1].text);
// //       jokeElement.innerText = data[1].text;
// //     });
// // }

// // // try {
// // //   data.forEach((joke) => {
// // //     const li = document.createElement("li");
// // //     li.innerText = `${joke.setup} - ${joke.punchline}`;
// // //     jokeList.appendChild(li);
// // //   });
// // // } catch (error) {
// // //   console.error("Error fetching jokes:", error);
// // // }


// // // function handleError(error) {
// // //   console.error("Error fetching or displaying jokes:", error);
// // //   jokeElement.innerText = "Oops! Couldn't load jokes. Please try again later.";
// // // }


// // function filterJokesByKeyword(jokes, keyword) {
// //   const filtered = jokes.filter(joke =>
// //     joke.setup.toLowerCase().includes(keyword.toLowerCase()) ||
// //     joke.punchline.toLowerCase().includes(keyword.toLowerCase())
// //   );
// //   displayJokeList(filtered);
// // }

// // function searchJokes() {
// //   const keyword = document.getElementById("keywordInput").value;
// //   fetch(URL)
// //     .then(response => response.json())
// //     .then(data => filterJokesByKeyword(data, keyword))
// //     .catch(handleError);
// // }



// // function refreshJokes() {
// //   jokeElement.innerText = "Loading new jokes...";
// //   getJokes();
// // }


// // function delay(ms) {
// //   return new Promise(resolve => setTimeout(resolve, ms));
// // }

// // async function showMessage() {
// //   console.log("Waiting...");
// //   await delay(2000);
// //   console.log("Done after 2 seconds!");
// // }

// // showMessage();

// // async function task1() {
// //     return "Task 1 done"
// // }

// // async function task2() {
// //     return "Task 2 done"
// // }

// // async function runAll() {
// //     const result = await Promise.all([task1(),task2()])
// //     console.log(result);
// // }

// // runAll()  
// // async function numbers() {
// //   let oddNumbers = new Promise((resolve, reject) => { 
// //     setTimeout(() => {
// //       resolve("3,5,7");
// //     }, 1000);
// //   });

// //   let evenNumbers = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("2,4,6");
// //     }, 1000);
// //   });


// //   let odd = await oddNumbers;
// //   let even = await evenNumbers;

// //   console.log("Odd:", odd);
// //   console.log("Even:", even);
// // }

// // numbers();

// let promise = new Promise(function(resolve,reject) {
//     let sum = 4+4
//   if(sum==8) {
//     resolve("success")
//   } else {
//     reject("Wrong")
//   }
// })

// try {
//   console.log('start')

//   subject;

//  console.log('end');

// } catch (err) {
//   console.log('error has occured:'= err.stack);
// } finally {
//   console.log('run');
// }

// console.log('execution continues');

// // let jsonSamples = [
// //   '{}',
// //   '{"name": "Lisa"}',
// //   '{"age": 25}',
// //   '{"name": "Lisa", "age": "twenty"}', 
// //   '{"name": "Lisa", "age": 25}',
// //   '{"name": "Tom", "age": -5}',
// //   '{bad json}',
// // ];

// // for (let json of jsonSamples) {
// //   try {
// //     console.log("Parsing:", json);

// //     let user = JSON.parse(json); 


// //     if (!user.name || !user.age) {
// //       throw new SyntaxError("Incomplete user data!");
// //     }

  
// //     if (typeof user.age !== "number") {
// //       throw new TypeError("Age must be a number!");
// //     }

  
// //     if (user.age < 0 || user.age > 120) {
// //       throw new RangeError("Age value is not realistic!");
// //     }

// //     console.log(" User data is valid:", user);
// //   } catch (e) {
// //     console.log("Error:", e.name + " - " + e.message);
// //   }

// //   console.log("---------------------");
// // }


// // document.getElementById("textInput").addEventListener("keydown", (e) => {
// //   console.log("Event object:", e);
// //   console.log("Key pressed:", e.key);
// //   console.log("Was Shift pressed?", e.shiftKey);
// // });


// document.getElementById("input").addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     alert("You pressed Enter!");
//   } else if (e.key === "ctrl") {
//     alert("You pressed ctrl!");
//   } else if (e.key === " ") {
//     alert("You pressed Space!");
//   }
// });

// let count = 0;
// document.addEventListener("keydown", () => {
//   count++;
//   document.getElementById("count").textContent = count;
// });


// // let num = prompt("enter a number:")

// // if (num % 2 === 0) {
// //    alert(num + "is even");
// // } else {
// //   alert(number + "is odd");

// // }


// // let random = (Math.random() * 5) + 1; 
// // let number = parseInt(random);      
// // let guess = prompt("Guess a number between 1 and 5:");

// // if (guess == number) {
// //   alert("Correct!");
// // } else {
// //   alert("Wrong! It was " + number);
// // }


// // let num = prompt("enter a number:");

// // if (num > 0) {
// //   alert(num + "is positive");
// // } else if (number < 0) {
// //   alert(number + " is Negative");
// // } else if (number == 0) {
// //   alert("The number is Zero");
// // } else {
// //   alert("Please enter a valid number");
// // }

// // document.addEventListener("DOMContentLoaded", function() {
// //   const heading = document.getElementById("myHeading");

// //   heading.addEventListener("mouseover", function() {
// //     heading.style.color = "red";
// //   });

// //   heading.addEventListener("mouseout", function() {
// //     heading.style.color = "black";
// //   });
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   let count = 0;
// //   const button = document.getElementById("countBtn");
// //   const counterText = document.getElementById("counter");

// //   button.addEventListener("click", function () {
// //     count++;
// //     counterText.textContent = count;
// //   });
// // });


// // function sayName() {
// //     let name = document.getElementById("nameInput").value;
// //     alert("Hello, " + name + "!");
// //   }


// //   let arr1 = [1, 2, 3];
// //   let arr2 = [4, 5, 6];

// //   function intersection(arr1, arr2) {
// //   return arr1.filter(item => arr2.includes(item));
// // }

// // document.getElementById("btn").addEventListener("click", function() {
// //   document.body.classList.toggle("dark-mode");
// // });


// // const showTextBtn = document.getElementById("showText");
// // const textDiv = document.getElementById("text");

// // showTextBtn.addEventListener("click", function() {
// //     if (textDiv.style.display === "none") {
// //         textDiv.style.display = "block";
// //         button.innerText = "hide text";
// //     } else {
// //         textDiv.style.display = "none";
// //         button.innerText = "show text";
// //     }
// // });

// // let score = 72;

// // if (score >= 90) {
// //   console.log("Grade: A");
// // } else if (score >= 80) {
// //   console.log("Grade: B");
// // } else if (score >= 70) {
// //   console.log("Grade: C");
// // } else if (score >= 60) {
// //   console.log("Grade: D");
// // } else {
// //   console.log("Grade: F");
// // }


// // let number = 7;

// // if (number % 2 === 0) {
// //   console.log(number + " is even");
// // } else {
// //   console.log(number + " is odd");
// // }


// // let age = 17;

// // if (age < 18) {
// //   console.log("cannot vote");
// // } else { 
// //   console.log("can vote");
// // }

// // let value = 45;

// // if (value >= 1 && value <= 100) {
// //   console.log("In range");
// // } else {
// //   console.log("Out of range");
// // }


//   // document.addEventListener("DOMContentLoaded", () => {
//   //     let btnHello = document.querySelector("#btnHello");
//   //     let btnWorld = document.querySelector("#btnWorld");
//   //     let content = document.querySelector("#content");

//   //     btnHello.addEventListener("click", () => {
//   //       content.innerHTML = "<p>Hello! Welcome to my page </p>";
//   //     });

//   //     btnWorld.addEventListener("click", () => {
//   //       content.innerHTML = "<p>World says hi </p>";
//   //     });
//   //   });

// const paragraph = document.querySelector('p')
//  paragraph.innerText = 'this is the updated paragraph text.'
// paragraph.textContent = 'this is another way to update the paragraph text.'

// const mul3 = (a, b, c) => {
//   console.log(a * b * c);
// };

// const checkEvenOdd = (num) => {
//   if (num % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// };


// const doubleArray = (arr) => arr.map(num => num * 2);

// // const numbers = [1, 2, 3, 4, 5, 6];
// // const evens = numbers.filter(num => num % 2 === 0);


// const toUpperNames = names => names.map(name => name.toUpperCase());
// const names = ["alice", "bob", "charlie"];


// const sortAsc = arr => arr.sort((a, b) => a - b);

// const minNum = arr => Math.min(...arr);

// const greaterThanTen = arr => arr.filter(num => num > 10);

// const stringLengths = arr => arr.map(str => str.length);

// const allPositive = arr => arr.every(num => num > 0);

// const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);


// hello(goodbye);
// // goodbye();


// function hello(callback){
//   console.log("Hello!");
//   callback();
// }

// function drop(){
//   console.log("Drop the call!");
// }

// function talk(){
//   console.log("Talking...");
// }


// function goodbye(){
//   console.log("Goodbye!");
// }


// function makePizza(callback) {
//   console.log("making pizza");
//   setTimeout(() => {
//     console.log("pizzas ready!");
//     callback(); 
//   }, 2000);
// }

// function eatPizza() {
//   console.log("eating the pizza!");
// }

// makePizza(eatPizza);


// // let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(triple);
// numbers.forEach(print);

// function triple(num) {
//   console.log(num * 3);
// }


// function print(num) {
//   console.log(num);
// }

// let colors = ["red", "green", "blue"];

// function displayColor(color) {
//   console.log("Color:", color)
// }

// colors.forEach(displayColor);

// let evenNumbers = [2, 4, 6, 8, 10];

// evenNumbers.forEach(print);

// // const numbers = [10, 25, 7, 42, 19];
// // let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("JavaScript")); 


// // const numbers = [2, 5, 8, 10];
// // let sum = 0;

// // for (let num of numbers) {
// //   sum += num;
// // }

// console.log("sum:", sum); 

// const name = prompt("what’s your name?");
// alert("hello, " + name + "!");


// const password = "openai";
// let input = prompt("enter password:");

// if (input === password) {
//   alert("access granted!");
// } else {
//   alert("wrong password!");
// }


// // const numbers = [10, 20, 30, 40, 50];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);


// function square(element) {
//   return element * element;
// }

// console.log("cubes:");

// function cube(element) {
//   return element * element * element;
// }

// filtered = numbers.filter(isGreaterThan25);


// let globalVar = "I’m global";
// console.log(globalVar);

// function test() {
//   let inside = "I’m inside";
//   console.log(inside); 
// }
// console.log(inside); //wont work


// function outer() {
//   let counter = 0;

//   function inner() {
//     counter++;
//     console.log(counter);
//   }

//   return inner;
// }

// let increment = outer();


//    setTimeout(function() {
//   console.log("This runs after 2 seconds");
// }, 2000);



// // function Timer() {
// //   this.seconds = 0;
// //   setInterval(function() {
// //     this.seconds++;
// //   }, 1000);
// // }


// // function Timer() {
// //   this.seconds = 0;
// //   setInterval(() => {
// //     this.seconds++;
// //     console.log(this.seconds);
// //   }, 1000);
// // }

// // function Timer() {
// //   this.seconds = 0;

// //   setInterval(function() {
// //     this.seconds++;
// //     console.log(this.seconds);
// //   }, 1000);
// // }

// // const t = new Timer();

// // const counter = {
// //   count: 0,
// //   increment() {
// //     this.count++;
// //   }
// // };

// // function Person(name) {
// //   this.name = name;
// // }

// // const user = new Person('Alice');
// // console.log(user.name); 



// const cat = {
//   sound: 'Meow',
//   speak() {
//     console.log(this.sound);
//   }
// };

// const person = {
//   greet() {
//     console.log("Hello!");
//   },
// };

// const user = Object.create(person);
// user.name = "Alice";

// user.greet();

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a sound`);
// };

// // const dog = new Animal("Rex");
// // dog.speak(); 

// // const vehicle = {
// //   move() { console.log("Moving..."); }
// // };

// // const car = Object.create(vehicle);
// // car.drive = function() {
// //   console.log("Driving...");
// // };

// // car.drive();
// // car.move();



// const shape = {
//   area() {
//     console.log("area not defined.");
//   }
// };

// const circle = Object.create(shape);
// circle.radius = 5;
// circle.area = function() {
//   return Math.PI * this.radius ** 2;
// };

// console.log(circle.area().toFixed(2));

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }


// Person.prototype.greet = function() {
//   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
// };

// Person.prototype.haveBirthday = function() {
//   this.age++;
//   console.log(`${this.name} is now ${this.age}!`);
// };

// const user1 = new Person("alice", 21);
// const user2 = new Person("john", 22);

// user1.greet();
// user2.haveBirthday();


// // let num = String(20)
// // console.log(typeof num);

// // let val 
// // console.log(typeof val);
// // val = 10
// // console.log(typeof val);

// // val = 2 + "3"
// // console.log(typeof val);
// // val = "5" - 2
// // console.log(typeof val);
// // val = +"15" + 5
// // console.log(typeof val);



// // function greet(greeting) {
// //   console.log(`${greeting}, I’m ${this.name}`);
// // }

// // // const person = { name: "Bob" };

// // greet.call(person, "Hello"); 

// // function greet(greeting) {
// //   console.log(`${greeting}, I’m ${this.name}`);
// // }

// // const person = { name: "Bob" };

// // greet.call(person, "Hello"); 

// // const user1 = { name: "Alice" };
// // const user2 = { name: "Bob" };

// // function introduce() {
// //   console.log(`Hi, I’m ${this.name}`);
// // }

// // introduce.call(user1);
// // introduce.call(user2);

// // function sum(a, b, c) {
// //     return a + b + c;
// // }

// // console.log(num)

// // const person = {
// //   name: "chloe",
// //   greet() {
// //     console.log("Hello, " + this.name);
// //   }
// // };

// // person.greet(); 

// // const obj = {
// //   value: 100,
// //   show: function() {
// //     const arrow = () => console.log(this.value);
// //     arrow();
// //   }
// // };

// // obj.show(); 

// // // const counter = {
// // //   count: 0,
// // //   start: function() {
// // //     setTimeout(function() {
// // //       console.log(this.count);
// // //     }, 1000);
// // //   }
// // // };

// // // counter.start();

// // // function outer() {
// // //   let count = 0;

// // //   function inner() {
// // //     count++;
// // //     console.log(count);
// // //   }

// // //   return inner;
// // // }

// // // const counter = outer();
// // // counter(); 
// // // counter(); 


// // // function outer() {
// // //   let name = "Alice";
// // // }

// // // function inner() {
// // //   console.log(name);
// // // }

// // // outer();
// // // inner();


// // // function createBankAccount() {
// // //   let balance = 1000; 

// // //   return {
// // //     deposit(amount) {
// // //       balance += amount;
// // //       console.log("Balance:", balance);
// // //     },
// // //     withdraw(amount) {
// // //       balance -= amount;
// // //       console.log("Balance:", balance);
// // //     }
// // //   };
// // // }

// // // const account = createBankAccount();
// // // account.deposit(500);  
// // // account.withdraw(300); 

// // // function outer() {
// // //   let outerVar = "I'm outside!";

// // //   function inner() {
// // //     console.log(outerVar);
// // //   }

// // //   inner();
// // // }

// // // outer();

// // function test() {
// //   console.log(num);
// //   let num = 20;
// // }

// // test();

// // print()

// // function display() {
// //   console.log(number);
// //   let number = 50;
// // }


// // {
// //   console.log(a);
// //   let a = 10;
// //   const b = 20;

// // }


// // function example() {
// //   console.log(num); 
// //   {
// //     let num = 7;
// //   }
// // }
// // example();


// // const numbers = [10, 20, 30, 40];

// // const [first, , third] = numbers;

// // console.log(first);
// // console.log(third); 

// // function showUser({ name, age }) {
// //   console.log(`${name} is ${age} years old`);
// // }

// // const user = { name: "joe", age: 20 };
// // showUser(user);


// const users = [
//   { name: "alice", age: 22 },
//   { name: "levi", age: 20 }
// ];

// const [ { name: firstUser }, { age: secondUserAge } ] = users;

// console.log(firstUser); 
// console.log(secondUserAge); 

// function showDetails({ name = "guest", age = 18 } = {}) {
//   console.log(`${name} is ${age} years old`);
// }

// showDetails({ name: "gabriel" }); 
// showDetails();                 


// function displayUser({ name: fullName, city: homeTown }) {
//   console.log(`${fullName} lives in ${homeTown}`);
// }

// const person = { name: "alice", country: "usa", city: "new york" };
// displayUser(person);

// const car = { brand: "toyota" };

// const { brand: carBrand, model: carModel = "corolla" } = car;

// console.log(carBrand); 
// console.log(carModel);

// const settings = {
//   user: {
//     info: { name: "liana", age: 28 },
//     preferences: {}
//   }
// };

// const {
//   user: {
//     info: { name: fullName, age: years = 18 },
//     preferences: { theme = "light" }
//   }
// } = settings;

// console.log(fullName); 
// console.log(years);   
// console.log(theme);    

// const employee = { id: 101, name: "sebastian", salary: 50000 };

// const { name: employeeName, salary } = employee;

// console.log(employeeName);
// console.log(salary);       


// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log("Max:", maximum);

// function arrconcat(...arrays) {
//   console.log([].concat(...arrays));
// }

// const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // const arr3 = [7, 8, 9];

// // arrconcat(arr1, arr2, arr3);


// async function greet() {
//   return "hello";
// }

// greet().then((res) => {
//   console.log(res);
// });


// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("data received!"), 2000);
//   });
// }

// async function getData() {
//   console.log("fetching");
//   const result = await fetchData(); 
//   console.log(result)
//   console.log("done!");
// }

// getData();


// async function fetchUser() {
//   return { name: "maria", age: 25 };
// }

// async function displayUser() {
//   const user = await fetchUser();
//   console.log("User:", user);
// }

// async function processNumbers() {
//   const numbers = await fetchNumbers();
//   const doubled = numbers.map(num => num * 2);
//   console.log("squared numbers:", doubled);
// }

// function processData(data, callback) {
//   console.log("processing:", data);
//   callback();
// }

// // processData("user data", () => {
// //   console.log("callback executed");
// // });


// function calculate(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }

// calculate(5, 7, (res) => {
//   console.log("Result:", res);
// });


// function counter() {
//   let count = 0;
  
//   return function() {
//     count++;
//     return count;
//   };
// }

// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());


// console.log("start");

// setTimeout(() => {
//   console.log("step 1 done");

//   setTimeout(() => {
//     console.log("step 2 done");

//     setTimeout(() => {
//       console.log("step 3 done");
//     }, 1000);

//   }, 1000);

// }, 1000);


// function processArray(arr, callback) {
//   let newArr = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i]));
//   }
  
//   return newArr;
// }

// let output = processArray([1, 2, 3], (num) => num * 2);

// console.log(output); 

// function fetchData(id, callback) {

//   setTimeout(() => {
//     console.log("data fetched for id:", id);
//     callback();
//   }, 1000);
// }

// fetchData(1, () => {
//   console.log("callback after data fetch");
// });



// function outer() {
//   let message = "hello from outer";
//   function inner() {
//     console.log(message);
//   }
//   return inner;
// }

// let innerFunc = outer();
// innerFunc();


function asyncFunc() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log("async function resolved");
    resolve("success");
        }, 2000);
    });
}

// let promise = asyncFunc();
// promise.then((res) => {
//     console.log("promise result:", res);
// });




async function run() {
    let result = await asyncawaitFunc();
    console.log("result:", result);
}


run();


async function asyncawaitFunc() {
    return ("success");
}


async function fetchData() {
    return { data: "sample data" };
}

async function displayData(data) {
    console.log("data:", data);
}

async function process() {
    const data = await fetchData();
    const processedData = await displayData(data);
    console.log("processed data:", processedData);
}

process();



function addAfterDelay(a, b, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, delay);
    });
}

async function tryThreeTimes(asyncFunc, maxAttempts) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
         let result = await asyncFunc();
            console.log("attempt", attempt, "succeeded with result:", result);
            return result;
        } catch (error) {
            console.log("attempt", attempt, "failed:", error);
            if (attempt === maxAttempts) {
                throw new Error("all attempts failed")
            }
        }
    }
}

 


function failingFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("function failed");
        }, 1000);
    });
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 

function execute() {
    console.log("execution started");
    delay(2000).then(() => {
        console.log("execution finished after 2 sec");
    });
}
 

execute();

async function showMessage() {
    console.log("waiting");
    await delay(2000);
    console.log("done after 2 sec!");

}


showMessage();



async function runAll() {
    const result = await Promise.all([task1(), task2()]);
    console.log(result);
}

runAll();

async function numbers() {
    let oddNumbers = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3,5,7");
        }, 1000);
    });
    let evenNumbers = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2,4,6");
        }, 1000);
    });
    let odd = await oddNumbers;
    let even = await evenNumbers;
    console.log("Odd:", odd);
    console.log("Even:", even);
}

numbers();


let promise = new Promise(function(resolve, reject) {
    let sum = 4 + 4;
    if (sum == 8) {
        resolve("success");
    } else {
        reject("Wrong");
    }
});
promise.then((res) => {
    console.log("Result:", res);
}).catch((err) => {
    console.log("Error:", err);
});





function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`hi, I'm ${this.name} and I'm ${this.age} years old.`);
};


Person.prototype.haveBirthday = function() {
    this.age++;
    console.log(`${this.name} is now ${this.age}!`);
};



// const user
// 1 = new Person("alice", 21);
// const user2 = new Person("john", 22);
// user1.greet();
// user2.haveBirthday();

 
// Array.prototype.last = function() {
//     return this[this.length - 1];
// };

// const arr = [10, 20, 30];
// console.log(arr.last());


const vehicle = {
    drive() {
        console.log("driving");
    }
};
const car = {
    brand: "Toyota"
};

Object.setPrototypeOf(car, vehicle);
car.drive();


function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}


const t = new Timer();


function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating");
};

function Dog(name) {
  Animal.call(this, name); 
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(this.name + " says woof");
};

const d = new Dog("max");
d.eat();  
d.bark(); 



function User() {}
User.prototype.role = "guest";

const u = new User();

u.role = "admin";
console.log(u.role);

delete u.role;
console.log(u.role); 


function A() {}
A.prototype.x = 10;

// const obj = new A();

console.log(obj.x);             
console.log(obj.hasOwnProperty('x')); 
console.log('x' in obj);

function A() {}
A.prototype.x = 1;

function B() {}
B.prototype = new A();
B.prototype.y = 2;

// const obj = new B();

console.log(obj.x); 
console.log(obj.y); 
console.log(obj.z);


String.prototype.reverse = function() {
    return 
this.split("").reverse().join("");
};

console.log("hello".reverse())


Object.prototype.describe = function() {
    return "this is an object";
};

const obj = { a: 1, b: 2 };
console.log(obj.describe());

Array.prototype.first = function() {
    return this[0];
};


const arr = [5, 10, 15];
console.log(arr.first());


Array.prototype.sum = function() {
    return this.reduce((total, num) => total + num, 0);
};


const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum());


Array.prototype.customMap = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};


console.log([1,2,3].customMap(num => num * 2)
);


(function (name, age) {
    console.log(`name: ${name}, age: ${age}`);
})("adam", 25);

// const counter = (function () {
//     let count = 0;

//     return {
//         inc: () => ++count,
//         dec: () => --count,
//         get: () => count
//     };
// })();

console.log(counter.inc());
console.log(counter.get());
console.log(counter.dec());


const person = (function() {
    let name = "default";
    return {
        setName: (newName) => { name = newName; },
        getName: () => name
    };
})();


person.setName("jack");
console.log(person.getName());


const settings = (function(mode,theme)
 {
    return {
    mode : mode,
    theme : theme,
    };
})("dark","red");

console.log(settings.mode);


let counter = (function() {
    let count = start;
    return function() {
        count++;
        return count;
    };
})(10);

console.log(counter());
console.log(counter());



const calculator = (function() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    };
})();

console.log(calculator.add(2, 6));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(20, 4));

const bankAccount = (function() {
    let balance = 0;
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
})();

console.log(bankAccount.deposit(800));
console.log(bankAccount.getBalance());


(async function() {
    console.log("fetching data");
await getData(1);
    console.log("fetching data 2");
    await getData(2);
    console.log("all data fetched");
  }
)();


(function() {
    console.log("runs immediately");
    var y = 13;
})();

console.log(y);


(function() {
    let name = "private";
    console.log("inside IIFE:", name);
})();

console.log("outside IIFE:", name);


const result = (function(marks,total) {
    const percentage = (marks / total) * 100;
 if (percentage >= 90) { return "grade A"; };
 if (percentage >= 70) { return "grade B"; };
 if (percentage >= 50) { return "grade C"; };
    return "grade F";
})(230, 500);

console.log(result);


const scoreboard = (function() {
    let score = 0;
function addPoints(points) {
        score += points;
        return score;
    }

    function reset() {
        score = 0;
        return score;
    }
            
    return {
        addPoints,
        reset
    };
})();

console.log(scoreboard.addPoints(8));
console.log(scoreboard.addPoints(5));
console.log(scoreboard.reset());


(function() {
    let name = "IIFE example";
    console.log("inside IIFE:", name);
})();

console.log("outside IIFE:", name);

const validator = (function() {
    function isEmail(email) {
        return email.includes("@");
    }
   return { isEmail };
})();

console.log(validator.isEmail(""));
console.log(validator.isEmail("falak@gmail.com"));

const taskTracker = (function() {
    let tasks = [];
 return {
    addTask(task) {
        tasks.push(task);
        console.log(`task "${task}" added.`);
    },
    removeTask(task) {
        tasks = tasks.filter(t => t !== task);
        console.log(`task "${task}" removed.`);
    },
    listTasks() {
        console.log("tasks:", tasks);
        tasks.forEach(t => console.log("- " + t));
      }
    };
})();

taskTracker.addTask("buy groceries");
taskTracker.addTask("walk the dog");
taskTracker.addTask("do the laundry");
taskTracker.listTasks();
taskTracker.removeTask("walk the dog");
taskTracker.listTasks();


(function() {
    let calculate = function(a, b) {
        return a + b;
    };

 console.log("sum:", calculate(4, 8));

})();

console.log(typeof calculate);
