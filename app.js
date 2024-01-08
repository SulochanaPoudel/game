let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("yes clicked");
        if(turn0){
            box.innerText = "o";
            turn0 = false;
        }else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        // checkWinner();
    });
});

// function checkWinner{
    
// }
