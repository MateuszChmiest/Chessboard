const board = document.querySelector(".board");
const boardSize = document.getElementById("boardSize");
const dasboardButton = document.querySelector(".dashboard__data--btn");
const dashboardPanel = document.querySelector(".dashboard__panel");
console.log(boardSize);

dasboardButton.addEventListener("click", (e) => {
	e.preventDefault();
  dashboardPanel.classList.add('hidden');
  board.classList.remove('hidden');
  createChessBoard();
	console.log(boardSize.value);
});

const createChessBoard = () => {
  const chessBoardTable = document.createElement("table");

  for (let i = 0; i < boardSize.value; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < boardSize.value; j++) {
      const td = document.createElement("td");
  
      if ((i + j) % 2 == 0) {
        td.setAttribute("class", "cell whiteCell");
        tr.appendChild(td);
      } else {
        td.setAttribute("class", "cell blackCell");
        tr.appendChild(td);
      }
    }
    chessBoardTable.appendChild(tr);
  }
  board.appendChild(chessBoardTable);
}


