const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(){
    var base = Number(sides[0].value);
    var height = Number(sides[1].value);
    // console.log(base, height);
    const finalArea = (1/2) * base * height; 
    // console.log(finalArea)
    outputEl.innerText = "The area of the triangle is " + finalArea;
}

areaBtn.addEventListener("click", calculateArea);