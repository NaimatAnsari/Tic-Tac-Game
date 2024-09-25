let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#Reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let message = document.querySelector('#msg');

let trunO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (trunO) {
            box.innerHTML = "O";
            box.innerHTML === "O"?box.style.color = "black": box.style.color = "darkcyan";
            trunO = false;
        } else {
            box.innerHTML = "X";
            box.innerHTML === "X"?box.style.color = "darkcyan": box.style.color = "black";
            trunO = true;

        }
        box.disabled = true;
        checkWinner();
    })
});

const showMsg = (winner) => {
    message.innerHTML = `Congratulations, Winner is "${winner}"`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showMsg(pos1Val);
        }
    }
  }
}

const disabledBoxes = () => {
    for (let gameBox of boxes) {
        gameBox.disabled = true;
    }
}

const enableBoxes = () => {
    for (let gameBox of boxes) {
        gameBox.disabled = false;
        gameBox.innerHTML = "";
    }
}

const resetGame = () => {
    trunO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);