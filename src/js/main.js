const board = document.querySelector(".board");
const boardHeight = document.getElementById("boardHeight");
const boardWidth = document.getElementById("boardWidth");
const boardColor = document.getElementById("boardColor");
const inputName = document.getElementById("playerName");
const dasboardButton = document.querySelector(".dashboard__data--btn");
const dashboardPanel = document.querySelector(".dashboard__panel");
const dashboardPlayerName = document.querySelector(".dashboard__playerName");

let direction = "";
let xPosition = 0; // Hero position x
let yPosition = 0; // Hero position y

const createChessBoard = () => {
	const chessBoardTable = document.createElement("table");

	for (let i = 0; i < boardHeight.value; i++) {
		const tr = document.createElement("tr");
    
		for (let j = 0; j < boardWidth.value; j++) {
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
};

const getIndex = (x, y) => {
	return x + (y * (boardWidth.value - boardHeight.value));
};

// const changeDirection = (e) => {
// 	if (e.code == "ArrowRight") {
// 		x = x + 1;
// 	} else if (e.code == "ArrowLeft") {
// 		x = x - 1;
// 	} else if (e.code == "ArrowDown") {
// 		y = y + 1;
// 	} else {
// 		y = y - 1;
// 	}
// };

const initHero = () => {


	// if (direction === "up") yPosition--;
	// if (direction === "down") yPosition++;
	// if (direction === "right") xPosition++;
	// if (direction === "left") xPosition--;

	const heroPosition = document.querySelector(`[data-x]=${xPosition}][data-y]=${yPosition}`);
	heroPosition.classList.add("hero");
  controlHero();
  console.log(heroPosition);
};

const moveHero = () => {
  hideVisibleHero();
}

const hideVisibleHero = () => {
  document.querySelector('.hero').classList.remove('hero');
}

const controlHero = () => {
  window.addEventListener("keydown" , (e) => {
    if(e.key === "ArrowLeft") {
      xPosition--;
    }  
    if(e.key === "ArrowUp") {
      yPosition--;
    } 
    if(e.key === "ArrowRight") {
      xPosition++;
    }
    if(e.key === "ArrowDown") {
      yPosition++;
    }
    console.log(e.key)
    console.log(direction)
    hideVisibleHero();
    initHero();
  })
}

dasboardButton.addEventListener("click", (e) => {
	e.preventDefault();
	dashboardPanel.classList.add("hidden");
	board.classList.remove("hidden");
	createChessBoard();
	initHero();
});

// document.addEventListener('keyup', changeDirection());

//Klasa Furry
class Furry {
	constructor(x, y, direction) {
		this.x = 0;
		this.y = 0;
		this.direction = "right";
	}
}

//Klasa gry
class Game {
	constructor(board, furry) {
		this.board = document.querySelectorAll(".cell"); // this is an array
		this.furry = new Furry();
	}

	getIndex(x, y) {
		return x + y * 1;
	}

	showFurry() {
		const furryPosition = this.board[this.getIndex(this.furry.x, this.furry.y)];
		furryPosition.classList.add("hero");
	}

	hideVisibleFurry() {}

	moveFurry() {}

	turnFurry(event) {}

	checkCoinCollision() {}

	gameOver() {}

	startGame() {}
}

//Uruchomienie

//wywołanie metod i eventu keydown
