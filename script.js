const board = (() => {
    var gameBoard = [];
    const grid = document.getElementById("grid-board");
    const createBoard = () => {for(let i = 0; i < 9; i++){
        let piece = createGridPiece();
        piece.addEventListener('click', function handleClick(){boardChecks.turnCheck();});
        gameBoard.push(piece);
        grid.appendChild(piece);
    }};
    const createGridPiece = () => {
        const div = document.createElement("div");
        return div;
    };
    const editPiece = (index, text) => {
        gameBoard[index].textContent = text;
    };
    console.log(gameBoard);
    return{createBoard, editPiece};
})();

const playerFactory = (key) => {
    this.key = key;
    const playTurn = (index) => board.editPiece(index, key);
    return{key, playTurn};
};

const player1 = playerFactory("X");
const player2 = playerFactory("O");

const boardChecks = (() => {
    var playerTurn = player1;
    const turnCheck = () => {console.log(playerTurn)};
    console.log("Woop");
    return{playerTurn, turnCheck};
})();

board.createBoard();
board.editPiece(1, "X"); //changes 2nd piece to an X