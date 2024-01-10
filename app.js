let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let Container = document.querySelector(".container");

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

const resetGame = () => {
    turn0 = true;
    msgContainer.classList.add("hide");
    Container.classList.remove("hide");
    resetButton.classList.remove("hide");
    enableBoxes ();
    
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("yes clicked");
        if(turn0){
            box.innerText = "Sulo";
            turn0 = false;
        }else{
            box.innerText = "Binita";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    Container.classList.add("hide");
    resetButton.classList.add("hide");
    msgContainer.style.marginTop = "30vmin";
    disableBoxes();
};

const draw = () => {
    msg.innerText = "Draw, Play again.";
    msgContainer.classList.remove("hide");
    msgContainer.style.marginTop = "30vmin";
    Container.classList.add("hide");
    resetButton.classList.add("hide");

}


const checkWinner = () => {
    for ( let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val == pos3Val){
               console.log("winner",pos1Val);
               showWinner(pos1Val);
            }
        }  
        
    }

    if ([...boxes].every(box => box.innerText !== "")) {
        console.log("draw");
        draw();
    }
        
};

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
