function clearGameContainer() {
    document.getElementById("game-container").innerHTML = "";
  }
  
// Minesweeper 
function startMinesweeper() {
  clearGameContainer();
  const container = document.getElementById("game-container");
  const rows = 8;
  const cols = 8;
  const minesCount = 10;

  const board = Array.from({ length: rows }, () => Array(cols).fill(0));
  const boardElement = document.createElement("div");
  boardElement.className = "minesweeper-board";
  boardElement.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
  boardElement.style.gridTemplateRows = `repeat(${rows}, 30px)`;

  // Place mines on the board
  for (let i = 0; i < minesCount; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * rows);
      col = Math.floor(Math.random() * cols);
    } while (board[row][col] === "M");
    board[row][col] = "M";

    // Update surrounding cells with mine counts
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] !== "M") {
          board[r][c]++;
        }
      }
    }
  }

  // Recursive function to reveal empty surrounding cells with 0 adjacent mines
  function revealCell(row, col) {
    const cell = boardElement.children[row * cols + col];

    // If the cell is already revealed or out of bounds, return
    if (cell.classList.contains("revealed") || row < 0 || row >= rows || col < 0 || col >= cols) {
      return;
    }

    // Reveal the cell
    cell.classList.add("revealed");
    const cellValue = board[row][col];

    if (cellValue === 0) {
      cell.style.backgroundColor = "#b0e57c"; // Green for safe cells with 0 adjacent mines
    } else {
      cell.textContent = cellValue;
      cell.style.backgroundColor = "#a0e0a0"; // Light green for cells with a number
    }

    if (cellValue === 0) {
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (r !== row || c !== col) {
            revealCell(r, c); // Reveal only the surrounding cells if the current cell has no adjacent mines
          }
        }
      }
    }
  }

  // Create the game board and handle cell clicks
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.onclick = () => {
        if (board[row][col] === "M") {
          cell.classList.add("blast");
          setTimeout(() => {
            alert("💥 You hit a mine! Game Over!");
            startMinesweeper();
          }, 500);
        } else {
          revealCell(row, col); // Reveal the clicked cell and its adjacent empty cells (if no mines)
        }
      };
      boardElement.appendChild(cell);
    }
  }
  container.appendChild(boardElement);
}


  // Sudoku Game 
  function startSudoku() {
    clearGameContainer();
    const container = document.getElementById("game-container");
    const boardElement = document.createElement("div");
    boardElement.className = "sudoku-board";
    const solvedPuzzle = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
  
    // Number of elements to delete from the solved Sudoku puzzle
    const deleteCount = 40; 
  
    // Create a copy of the solved puzzle
    const puzzle = JSON.parse(JSON.stringify(solvedPuzzle));
  
    // Randomly delete numbers from the puzzle to create a solvable game
    let deletedCells = 0;
    while (deletedCells < deleteCount) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (puzzle[row][col] !== null) {
        puzzle[row][col] = null;
        deletedCells++;
      }
    }
  
    // Create the board with the numbers that remain
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const cell = document.createElement("input");
        cell.type = "text";
        cell.maxLength = "1";
        cell.value = puzzle[row][col] || "";
        cell.disabled = !!puzzle[row][col];  // Disable cell if it has a number
        cell.className = "sudoku-cell";
        boardElement.appendChild(cell);
      }
    }
    container.appendChild(boardElement);
  }
  
  // Tic Tac Toe 
  function startXO() {
    clearGameContainer();
    const container = document.getElementById("game-container");
    const board = Array.from({ length: 3 }, () => Array(3).fill(null));
    const boardElement = document.createElement("div");
    boardElement.className = "xo-board";
  
    let currentPlayer = "X";
  
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const cell = document.createElement("div");
        cell.className = "xo-cell";
        cell.onclick = () => {
          if (!board[row][col]) {
            board[row][col] = currentPlayer;
            cell.textContent = currentPlayer;
  
            if (checkWinner(board, currentPlayer)) {
              setTimeout(() => alert(`${currentPlayer} wins!`), 10);
              startXO();
            } else if (board.flat().every((c) => c)) {
              setTimeout(() => alert("It's a draw!"), 10);
              startXO();
            } else {
              currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
          }
        };
        boardElement.appendChild(cell);
      }
    }
  
    container.appendChild(boardElement);
  }
  
  function checkWinner(board, player) {
    for (let i = 0; i < 3; i++) {
      if (board[i].every((cell) => cell === player)) return true;
      if (board.map((row) => row[i]).every((cell) => cell === player)) return true;
    }
    return [0, 1, 2].every((i) => board[i][i] === player) ||
      [0, 1, 2].every((i) => board[i][2 - i] === player);
  }