const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumofAngles = angle1 + angle2 +angle3;
    // console.log(sumofAngles);
    return sumofAngles;
}

function isTriangle() {
    const sumofAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumofAngles === 180){
        outputEl.innerText = "Xumu Xumu, the angles form a triangle"; // innerText makes it output in the UI and puts it inside the html tag
    }
    else {
        outputEl.innerText = "The angles don't form a triangle, check your input please";
    }
    // console.log(inputs[0].value, inputs[1].value, inputs[2].value);
}

isTriangleBtn.addEventListener("click", isTriangle)