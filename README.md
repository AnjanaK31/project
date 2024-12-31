# GAME PORTAL
#### Video Demo:  https://www.youtube.com/watch?v=akAvQnJCHoA
#### Description:
# Game Portal

This project is a collection of three interactive, web-based games designed to provide users with an engaging and entertaining experience. The games include **Minesweeper**, **Sudoku**, and **Tic Tac Toe (XO)**. Each game has been carefully implemented using HTML, CSS, and JavaScript to deliver smooth gameplay, a visually appealing user interface, and responsive design. The focus of this project is to create lightweight, browser-compatible games that are fun and accessible to all.
---

## Features

### I) Minesweeper:
- **Gameplay**: The classic Minesweeper game is built on an **8x8 grid** with 10 randomly placed mines. Your goal is to uncover all non-mine cells without clicking on a mine.
- **Dynamic Gameplay**:
  - When a cell is clicked, it reveals the number of adjacent mines (if any).
  - If a mine is clicked, the cell triggers a **blast animation**, and the game is automatically restarted.
  - Using **recursive logic**, cells with zero adjacent mines reveal all neighboring empty cells, creating a cascading effect for faster exploration.
- **Visuals**: The grid has color-coded numbers for adjacent mines and different shades of green to differentiate safe zones and mined areas.

---

### II) Sudoku:
- **Gameplay**: This is a traditional Sudoku game where a **9x9 grid** is provided with 40 cells randomly removed from a pre-solved puzzle. The player's objective is to fill in the blank cells with numbers from 1 to 9, ensuring no repetitions in any row, column, or 3x3 subgrid.
- **Key Features**:
  - **Dynamic Puzzle Generation**: A pre-solved puzzle is altered dynamically by removing random cells, ensuring solvability.
  - **User Interaction**: Players can input numbers in blank cells. Cells with pre-filled numbers are **locked** to prevent editing, preserving the integrity of the puzzle.
  - **Simple Input**: Each cell accepts a single number and allows easy interaction through a clean interface.

---

### III) Tic Tac Toe (XO):
- **Gameplay**: A two-player game played on a **3x3 grid**, where players take turns marking cells with either 'X' or 'O'. The goal is to align three marks horizontally, vertically, or diagonally.
- **Features**:
  - Alternating turns between 'X' and 'O', with the current player dynamically highlighted.
  - The game checks for a winner after every move. If a player wins, an alert is displayed, and the game restarts.
  - If all cells are filled without a winner, a draw is declared, and the board resets for a new round.

---

## Technologies Used

This project utilizes a combination of modern web technologies to deliver a seamless gaming experience:

- **HTML**:
  - Provides the structural framework for the game boards and the layout of the application.
  - Ensures cross-browser compatibility for smooth rendering on most devices.

- **CSS**:
  - Enhances the visual design with clean, modern styling for game boards, cells, and buttons.
  - Implements responsive designs, making the games enjoyable on both desktop and mobile devices.
  - Includes animations like the blast effect in Minesweeper to enhance the user experience.

- **JavaScript**:
  - Powers the game logic, dynamic board creation, event handling, and user interaction.
  - Implements algorithms for recursive cell reveals in Minesweeper, puzzle generation in Sudoku, and winner detection in Tic Tac Toe.
  - Ensures the games respond intuitively to user actions, delivering an enjoyable experience.

---

## How to Play

1. Clone or download the project files.
2. Open the `index.html` file in any modern web browser.
3. Select the game you want to play:
   - **Minesweeper**: Click on the grid cells to uncover safe zones and avoid mines.
   - **Sudoku**: Fill in missing numbers in the grid, following Sudoku rules.
   - **Tic Tac Toe**: Take turns playing as 'X' or 'O' and try to align three marks in a row.

---

## Project Structure

- **index.html**: The main entry point for the application. It includes the basic structure of the webpage and links to the necessary CSS and JavaScript files.
- **style.css**: Contains styles for the game boards, including grid layouts, cell designs, animations, and responsive adjustments.
- **script.js**: Implements the game logic for Minesweeper, Sudoku, and Tic Tac Toe, dynamically creating the boards and handling user interactions.

---

## Why This Project?

This project demonstrates the ability to use core web development technologies to create interactive, standalone applications. It combines problem-solving skills, creativity, and user-centered design to deliver games that are both entertaining and educational. Additionally, the games are lightweight, requiring no additional frameworks or dependencies, making them easy to deploy and share.

---

## Future Enhancements

1. **Add Difficulty Levels**:
   - Minesweeper: Introduce larger grids with more mines.
   - Sudoku: Provide multiple difficulty settings (easy, medium, hard).
2. **Game Customization**:
   - Allow users to customize grid sizes, themes, and other settings.
3. **Multiplayer Mode**:
   - Add online or local multiplayer options for Tic Tac Toe.
4. **Scoring System**:
   - Implement scoring and leaderboard tracking for Minesweeper and Sudoku.
5. **Save and Resume**:
   - Allow players to save their progress and resume later.

---

## Conclusion

This project is a fun, interactive collection of games that brings together classic gameplay and modern web technologies. It’s perfect for showcasing programming skills, exploring game logic, or simply enjoying some well-known games. Have fun :)
