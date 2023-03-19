const board = document.querySelector(".board");
const boardHeight = document.getElementById("boardHeight");
const boardWidth = document.getElementById("boardWidth");
const boardColor = document.getElementById("boardColor");
const inputName = document.getElementById("playerName");
const dasboardButton = document.querySelector(".dashboard__data--btn");
const dashboardPanel = document.querySelector(".dashboard__panel");
const dashboardPlayerName = document.querySelector(".dashboard__playerName");


dasboardButton.addEventListener("click", (e) => {
	e.preventDefault();
  dashboardPanel.classList.add('hidden');
  board.classList.remove('hidden');
  createChessBoard();
});

const createChessBoard = () => {
  const chessBoardTable = document.createElement("table");

  for (let i = 0; i < boardHeight.value; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < boardWidth.value; j++) {

      const td = document.createElement("td");

      if(boardHeight.value && boardWidth.value > 20 ) {
        td.style.width =  "1.75rem";
        td.style.height = "1.75rem";
      }

      if ((i + j) % 2 == 0) {
        td.setAttribute("class", "cell whiteCell");
        tr.appendChild(td);
      } else {
        td.setAttribute("class", "cell");
        td.style.backgroundColor = boardColor.value;
        tr.appendChild(td);
      }
    }
    chessBoardTable.appendChild(tr);
  }
  board.appendChild(chessBoardTable);
  dashboardPlayerName.innerHTML = "Player: " + inputName.value;
}


