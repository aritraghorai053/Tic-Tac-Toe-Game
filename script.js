// 1. Select all required HTML elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// 2. Game state variables
let turnO = true; // true -> Player O's turn, false -> Player X's turn
let count = 0;    // To keep track of total moves (for draw condition)

// 3. All 8 possible winning patterns on a 3x3 board
const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Top-left to bottom-right diagonal
    [2, 4, 6]  // Top-right to bottom-left diagonal
];

// 4. Function to reset/start a new game
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

// 5. Function to disable all boxes once game is over
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// 6. Function to enable and clear all boxes for a new game
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// 7. Function to display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// 8. Function to handle a draw/tie game
const gameDraw = () => {
    msg.innerText = `Game was a Draw!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// 9. Add click event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Check whose turn it is
        if (turnO) {
            // Player O
            box.innerText = "O";
            box.style.color = "#ef4444";
            turnO = false;
        } else {
            // Player X
            box.innerText = "X";
            box.style.color = "#0284c7";
            turnO = true;
        }

        // Disable clicked box so it cannot be clicked again
        box.disabled = true;
        count++;

        // Check if there is a winner
        let isWinner = checkWinner();

        // If all 9 boxes are filled and no winner, it's a draw
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

// 10. Check if any player matches a winning pattern
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // Ensure all 3 positions in the pattern are filled and match each other
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true; // Return true to indicate we found a winner
            }
        }
    }
    return false; // No winner found yet
};

// 11. Connect buttons to resetGame function
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);