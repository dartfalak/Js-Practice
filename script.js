

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

const user1 = {
    name: "John",
    role: "admin",
    isActive: true
};

const user2 = {
    name: "Alice",
    role: "admin",
    isActive: true
};

user1.__proto__ = user2;

class User {
    constructor(id, name, isActive, role=
         "User")  {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.role = role;


    }
};

const user3 = new User (1, "Bob", true); 

class Admin extends User {}

let admin1 = new Admin (2, "Charlie", true, "Admin");