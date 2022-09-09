const board = (() => {
    var gameBoard = [];
    const grid = document.getElementById("grid-board");
    const createBoard = () => {for(let i = 0; i < 9; i++){
        let piece = createGridPiece();
        piece.addEventListener('click', function handleClick(){boardChecks.turnCheck(piece);});
        gameBoard.push(piece);
        grid.appendChild(piece);
    }};
    const createGridPiece = () => {
        const div = document.createElement("div");
        return div;
    };
    const editPiece = (piece, text) => {
        piece.textContent = text;
    };
    console.log(gameBoard);
    return{createBoard, editPiece};
})();

const playerFactory = (key) => {
    this.key = key;
    const playTurn = (piece) => board.editPiece(piece, key);
    return{key, playTurn};
};

const player1 = playerFactory("X");
const player2 = playerFactory("O");

const boardChecks = (() => {
    var playerTurn = player1;
    const turnCheck = (piece) => {
        if(piece.textContent !== ""){return;}
        playerTurn.playTurn(piece);
        if(playerTurn == player1){playerTurn = player2;}
        else if(playerTurn == player2){playerTurn = player1;}
        console.log(playerTurn);
    };
    return{playerTurn, turnCheck};
})();

board.createBoard();