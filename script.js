

// // document.addEventListener("DOMContent", function () {
    
// //     document.getElementById("mode").addEventListener)("click", function () {
// //         alert("Button clicked");
// //     });

// // const hoverBox  = document.getElementById("hoverBox");

// // hoverBox.addEventListener("mouseover", function () {
// //     hoverBox.style.backgroundColor = "blue";
// //     hoverBox.innerText = "Mouse is over me";
// // });


// const box = document.getElementById("box");

// box.addEventListener("mouseover", function () {
//     box.style.transform = "scale(1.3)";
// });

// const hoverText = document.getElementById("hoverText");
// const msg = document.getElementById("msg");

// hoverText.addEventListener("mouseout", () => {
//     msg.style.transform = "scale(1)";
// });

// const fadeText = document.getElementById("fadeText");

// fadeText.addEventListener("mouseover", () => {
//     fadeText.style.opacity = "0.5";
// });

// fadeText.addEventListener("mouseout", () => {
//     fadeText.style.opacity = "1";
// });

// const user1 = {
//     name: "John",
//     role: "admin",
//     isActive: true
// };

// // const user2 = {
// //     name: "Alice",
// //     role: "admin",
// //     isActive: true
// // };

// // user1.__proto__ = user2;

// class User {
//     constructor(id, name, isActive, role=
//          "User")  {
//         this.id = id;
//         this.name = name;
//         this.isActive = isActive;
//         this.role = role;


//     }
// };

// const user3 = new User (1, "Bob", true); 

// class Admin extends User {}

// let admin1 = new Admin (2, "Charlie", true, "Admin");

// class Person {
//     constructor() {
//         this.eat = "Eating...";
// }
//     sleep() {
//         console.log("Sleeping...");
//     }
// };

// class Developer extends Person {
//     constructor(branch) {
//         super();
//         this.branch = branch;
//     }
// }

// let developerObj = new Developer("frontend");


// // let info = "Developer Branch"

// // class User {
// //     constructor(name, age) {
// //         this.name = name;
// //         this.age = age;
// // }

// // viewDetails() {
// //     console.log(`Name: ${this.name}, Age: ${this.age}`);
// //     }
// // }

// // class Member extends User {
// //     constructor(name, age) {
// //         super(name, age);
    
// //     }
// //     editDetails() {
// //             info = "Member Branch";
// //   }
// // }



// // let user2 = new User("David", 30);


// // class User {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     sayHello() {
// //         console.log(`Hello, ${this.name}`);
// //   }
// // }

// // class Member extends User {
// //     constructor(name, memberId) {
// //         super(name);
// //         this.memberId = memberId;
// //     }

// //     displayInfo() {
// //         console.log(`Name: ${this.name}, Member ID: ${this.memberId}`);
// //     }
// // }

// // let member1 = new Member("Eve", 101);

function getInput (inputId,getNextId) { 
    return new Promise((resolve, reject) => {
     setTimeout(() => {
    console.log("inputId:", inputId) 
    if(getNextId) {
        getNextId();
    }
 }, 1000);

    });
}

// getInput(1,() => {
//     getInput(2);
// });


 const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("promise started");
    resolve("promise resolved");
  });
 }

 let promiseResult = getPromise();
 promise.then (() => {
    console.log("promiseResult:", promiseResult);
});