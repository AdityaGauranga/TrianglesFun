const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculatesumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    // console.log(sumOfSquares);
    return sumOfSquares;
}
function calculateHypotenuse() {
    const sumOfSquares = calculatesumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypo = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypo
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);