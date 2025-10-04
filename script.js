

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


const URL = "https://official-joke-api.appspot.com/jokes/random";

      const jokeElement = document.getElementById("joke");
      const jokeList = document.getElementById("jokeList");

const getJokes = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data[1].text);
}
 
function getJokes() {
  fetch(URL)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
      console.log(data[1].text);
      jokeElement.innerText = data[1].text;
    });
}

try {
  data.forEach((joke) => {
    const li = document.createElement("li");
    li.innerText = `${joke.setup} - ${joke.punchline}`;
    jokeList.appendChild(li);
  });
} catch (error) {
  console.error("Error fetching jokes:", error);
}
