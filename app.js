
document.addEventListener("DOMContent", function () {
    
    document.getElementById("mode").addEventListener)("click", function () {
        alert("Button clicked");
    });

const hoverBox  = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "blue";
    hoverBox.innerText = "Mouse is over me";
});


hoverBox.addEventListener("mouseout", function () (
    hoverBox.style.backgroundColor = "gray";
    hoverBox.innerText = "Hover over me";
    
})
