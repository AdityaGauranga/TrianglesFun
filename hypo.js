const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculatesumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    console.log(sumOfSquares);
}
function calculateHypotenuse() {
    calculatesumOfSquares(3,4);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);