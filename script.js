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
    return{gameBoard, createBoard, editPiece};
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
        if(piece.textContent !== ""){return;} // return if piece is already used
        playerTurn.playTurn(piece); // change piece depending on player turn
        winCheck();
        // swap player turn
        if(playerTurn == player1){playerTurn = player2;}
        else if(playerTurn == player2){playerTurn = player1;}
        console.log(playerTurn);

    };
    const checkRow =() => {
        console.log("Check row");
        //check row
        let consec = 0;
        for(i = 0; i < 3; i++){
            for(n = 0; n < 3; n++){
                if(board.gameBoard[i*3+n].textContent == playerTurn.key){
                    consec++;
                }
            }
            if(consec >= 3){
                return true;
            }
            consec = 0;
        }
        return false;
    }
    const checkCol = () => {
        console.log("Check col");
        //check col
        let consec = 0;
        for(i = 0; i < 3; i++){
            for(n = 0; n < 3; n++){
                if(board.gameBoard[n*3+i].textContent == playerTurn.key){
                    consec++;
                }
            }
            if(consec >= 3){
                return true;
            }
            consec = 0;
        }
        return false;
    }
    const checkDiag = () => {
        console.log("MMMM Diagonals");
        return false;
    }
    const winCheck = () => {
        const checks = [boardChecks.checkRow(), boardChecks.checkCol(), boardChecks.checkDiag()];
        for(i = 0; i < 3; i++){
            let win = checks[i];
            if(win == true){console.log(playerTurn.key + " Wins"); break;}
        }
    }
    return{playerTurn, turnCheck, checkRow, checkCol, checkDiag};
})();

board.createBoard();