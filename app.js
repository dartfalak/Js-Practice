

// document.addEventListener("DOMContent", function () {
    
//     document.getElementById("mode").addEventListener)("click", function () {
//         alert("Button clicked");
//     });

// const hoverBox  = document.getElementById("hoverBox");

// hoverBox.addEventListener("mouseover", function () {
//     hoverBox.style.backgroundColor = "blue";
//     hoverBox.innerText = "Mouse is over me";
// });


const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.transform = "scale(1.3)";
});

const hoverText = document.getElementById("hoverText");
const msg = document.getElementById("msg");

hoverText.addEventListener("mouseout", () => {
    msg.style.transform = "scale(1)";
});

