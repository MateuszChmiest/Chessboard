const board = document.querySelector(".board");
const boardHeight = document.getElementById("boardHeight");
const boardWidth = document.getElementById("boardWidth");
const boardColor = document.getElementById("boardColor");
const inputName = document.getElementById("playerName");
const dasboardButton = document.querySelector(".dashboard__data--btn");
const dashboardPanel = document.querySelector(".dashboard__panel");
const dashboardPlayerName = document.querySelector(".dashboard__playerName");
const historyButton = document.querySelector(".dashboard__history");
const historyPanel = document.querySelector(".dashboard__historyPanel");
const historyPanelElements = document.querySelector(".dashboard__historyPanel p");
const closeIcon = document.getElementById("close");

const heroMovements = []; // History of movements
let xPosition = 0; // Hero position x
let yPosition = 0; // Hero position y

// Functions
const createChessBoard = () => {
	const chessBoardTable = document.createElement("table");
	for (let i = 0; i < boardHeight.value; i++) {
		const tr = document.createElement("tr");
		for (let j = 0; j <= boardWidth.value; j++) {
			const td = document.createElement("td");
			td.dataset.y = i;
			td.dataset.x = j;

			if (boardHeight.value && boardWidth.value >= 15) {
				td.style.width = "1.75rem";
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
	historyButton.classList.remove("hidden");
	xPosition = Math.floor(boardWidth.value / 2);
	yPosition = Math.floor(boardHeight.value / 2);
	controlHero();
};

const initHero = () => {
	const heroPosition = document.querySelector(
		`[data-y="${yPosition}"][data-x="${xPosition}"]`
	);
	heroPosition.classList.add("hero");
};

const hideVisibleHero = () => {
	document.querySelector(".hero").classList.remove("hero");
};

const controlHero = () => {
	window.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") {
			xPosition--;
			heroMovements.unshift("Left");
		}
		if (e.key === "ArrowUp") {
			yPosition--;
			heroMovements.unshift("Up");
		}
		if (e.key === "ArrowRight") {
			xPosition++;
			heroMovements.unshift("Right");
		}
		if (e.key === "ArrowDown") {
			yPosition++;
			heroMovements.unshift("Down");
		}
		hideVisibleHero();
		initHero();
		historyPanel.classList.add("hidden");
	});
};

const displayHistory = (history) => {
	let items = "";
	history.forEach((el) => {
		items += `${el}, `;
	});
	return items;
};

// EventListeners
dasboardButton.addEventListener("click", (e) => {
	e.preventDefault();
	dashboardPanel.classList.add("hidden");
	board.classList.remove("hidden");
	createChessBoard();
	initHero();
});

historyButton.addEventListener("click", (e) => {
	historyPanel.classList.remove("hidden");

	historyPanelElements.innerHTML =
		heroMovements.length > 0
			? displayHistory(heroMovements)
			: "History is empty";
});

closeIcon.addEventListener("click", () => {
	historyPanel.classList.add("hidden");
});

document.addEventListener("mouseup", (e) => {
	if (!historyPanel.contains(e.target)) {
		historyPanel.classList.add("hidden");
	}
});
