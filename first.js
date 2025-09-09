
// let a = 5;
// let b = 2;
// let c = a + b;
// console.log("a+b=", a+b);


// let age=26

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// } 

// let num=20;

// if (num%2==0) {
//     console.log (num,"The number is even.");
// } else {
//     console.log ("The number is odd.")
// }


let number=30;
if (number%3==15) {
    console.log ("the nmuber is odd");

}

// let game="football";
// let player="Ronaldo";

// if (game=== "football")
// {player="Ronaldo";
// } else if (game ==="cricket") {
//     player="Sachin"; 
// } else if (game ==="hockey") {
//     player="Dhyan"
// } else {
//     player="Undefined";
// }

// console.log("The player is", player);

// let age=18;
// age >= 18 ? console.log ("Adult.") : console.log ("Minor.");


// for (let i=1; i <=10; i++) {
//     console.log ("i = " , i);
// }

  
// console.log ("loop has ended");

// let i=1;
// do {
//     console.log ("i = ", i)
//     i++;
// } while (i <=10)

// let str="Hello World!";
// for (let i of str) {
//     console.log("i=",i);
// }

// for (let num=0; num <= 100 ; num++) {
//     if (num%2!==0) {
//         console.log (num, "is odd.");
//     }
    
// }



//  let gameNum = 100;

//   let userNum=prompt ("Guess the number :");

//  while (userNum != gameNum) {
//     userNum=prompt ("Wrong guess. Try again :");  }

//  console.log ("You have guessed the correct number.");

//  let str1 = "algorithm";
//  let str2 = "hello world!";

//  console.log (str2[6]);


//  let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);


const laptop = {
  brand: "Dell",
  model: "XPS 13",
  year: 2023,
  price: 1290
};

const summary = `
Laptop Details:
Brand: ${laptop.brand}
Model: ${laptop.model}
Year: ${laptop.year}
Price: $${laptop.price}
`;

console.log(summary);


const a = 5;
const b = 9;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);

const str = "Hello, world!";


console.log(str.toUpperCase());

console.log(str.toLowerCase()); 

console.log(str.slice(0, 5));

console.log(str.replace("world", "JavaScript")); 

console.log(str.includes("world")); 

console.log("  hello  ".trim()); 

console.log (str.charAt(4));

console.log(str[0])



// let fullName = prompt("Enter your full name: ");

// let username = "@" + fullName + fullName.length;
// console.log(username);


 let characters = ["ethan", "bob" , "orion", "sam", "kai"];
// console.log(characters);

// for (let i=0; i<characters.length; ){
//   console.log(characters[i]);
// }

for (let character of  characters) {
  console.log(characters.toUpperCase)
}



let marks = [85, 92, 78, 90, 88];

// let sum = 0;

for (let val of marks) {
  sum += val;
}

let avg = sum / marks.length;
console.log("Average marks:", avg);

let items = [130, 200, 150, 300, 250];

let i = 0;

for (let val of items) {
//   console.log("Item", i, "costs", val);
  let offer = val/10;
  items[i= items[i] - offer];
  console.log("After 10% discount, Item", i, "costs", items[i]);
  i++;
}

let colors = ["red", "green", "blue", "yellow"];

// colors.pop()
console.log(colors);
console.log(colors.toString());

let oddNumbers = [1,3,5,7,9];
let multiplesOfFive = [5,10,15,20,25];

let numbers = oddNumbers.concat(multiplesOfFive);
console.log(numbers);

oddNumbers.shift(1);
console.log(oddNumbers);

console.log(oddNumbers.slice(1,3));

oddNumbers.splice(1,2,11,13);


function sum(a,b) {
  return a+b;
}

