# 🎮 Tic Tac Toe Game

A simple, interactive, and responsive **Tic Tac Toe game** built using **HTML, CSS, and JavaScript**.
The game supports two players — **Player O** and **Player X** — and automatically detects winners and draws.

## ✨ Features

* 🎯 Classic 3×3 Tic Tac Toe board
* 👥 Two-player gameplay
* 🔄 Reset Game functionality
* 🆕 New Game functionality
* 🏆 Automatic winner detection
* 🤝 Automatic draw detection
* 🚫 Prevents players from selecting an already-filled box
* 🎨 Modern gradient UI design
* ✨ Hover and button animations
* 📱 Responsive design for different screen sizes

## 🛠️ Technologies Used

* **HTML5** — Structure of the game
* **CSS3** — Styling, layout, animations, and responsive design
* **JavaScript** — Game logic, player turns, winner detection, and reset functionality

## 📂 Project Structure

```text
Tic-Tac-Toe/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎮 How to Play

1. Open `index.html` in your web browser.
2. Player **O** starts the game.
3. Players take turns selecting an empty box.
4. Player **O** and Player **X** try to place three of their symbols in:

   * A horizontal row
   * A vertical column
   * A diagonal
5. The first player to get three matching symbols wins.
6. If all nine boxes are filled without a winner, the game ends in a draw.
7. Click **Reset Game** or **New Game** to start again.

## 🏆 Winning Patterns

The game checks all **8 possible winning combinations**:

```text
[0, 1, 2]   → Top row
[3, 4, 5]   → Middle row
[6, 7, 8]   → Bottom row

[0, 3, 6]   → Left column
[1, 4, 7]   → Middle column
[2, 5, 8]   → Right column

[0, 4, 8]   → Diagonal ↘
[2, 4, 6]   → Diagonal ↙
```

## 🧠 Game Logic

The JavaScript program manages the game using:

* `turnO` — Determines whose turn it is.
* `count` — Counts the number of moves.
* `winPatterns` — Stores all possible winning combinations.
* `checkWinner()` — Checks whether a player has won.
* `showWinner()` — Displays the winner.
* `gameDraw()` — Displays the draw message.
* `resetGame()` — Starts a new game.
* `disableBoxes()` — Disables the board after the game ends.
* `enableBoxes()` — Clears and enables the board for a new game.

## 🎨 UI Design

The interface uses:

* Deep blue gradient background
* White game cells
* Red color for **O**
* Blue color for **X**
* Rounded game boxes
* Hover animations
* Glowing action buttons
* Responsive sizing using `vmin`

## 🚀 How to Run

### Option 1 — Open Directly

Simply double-click:

```text
index.html
```

The game will open in your default web browser.

### Option 2 — VS Code

1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 📸 Screenshots

Add screenshots of your game here:

```markdown
![Tic Tac Toe Game](screenshots/game.png)
```

## 🔮 Future Improvements

Some features that can be added in the future:

* 🤖 Play against computer/AI
* 🏅 Scoreboard for Player X and Player O
* 🌙 Dark/Light mode
* 🔊 Sound effects
* 🎵 Background music
* 🧑 Player name input
* 📊 Match history
* 🎨 Multiple themes
* 📱 Improved mobile UI
* 🧠 Different AI difficulty levels

## 👨‍💻 Author

**Aritra Ghorai**

Built with ❤️ using **HTML, CSS & JavaScript**.

## 📄 License

This project is open-source and available for learning and personal use.
