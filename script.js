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
        console.log(text);
    };
    const clearBoard = () => {
        gameBoard.splice(0, gameBoard.length);
        grid.innerHTML = "";
    }
    console.log(gameBoard);
    return{gameBoard, createBoard, editPiece, clearBoard};
})();

const playerFactory = (key) => {
    this.key = key;
    const playTurn = (piece) => board.editPiece(piece, key);
    return{key, playTurn};
};

const player1 = playerFactory("X");
const player2 = playerFactory("O");
var playerTurn = player1;

const boardChecks = (() => {
    const turnCheck = (piece) => {
        if(piece.textContent !== ""){return;} // return if piece is already used
        playerTurn.playTurn(piece); // change piece depending on player turn
        winCheck();
        // swap player turn
        if(playerTurn == player1){playerTurn = player2;}
        else if(playerTurn == player2){playerTurn = player1;}
    };
    const checkTie = () => {
        let filled = 0;
        for(i = 0; i < 9; i++){
            if(board.gameBoard[i].textContent == ""){return false;}
            filled++;
            if(filled >= 9){return true;}
        }
    };
    const checkRow = () => {
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
        // check diag
        let consec = 0;
        for(i = 0; i < 3; i++){
            for(n = 0; n < 3; n ++){
                if(i == n){
                    if(board.gameBoard[(n+i)*2].textContent == playerTurn.key){
                        consec++;
                    }
                }
            }
            if(consec >= 3){
                return true;
            }
        }
        let consec2 = 0;
        for(j = 0; j < 9; j++){
            if(j == 2 || j == 4 || j == 6){
                if(board.gameBoard[j].textContent == playerTurn.key){
                    consec2++;
                }
            }
            if(consec2 >= 3){
                return true;
            }
        }
        return false;
    }
    const winCheck = () => {
        const checks = [boardChecks.checkRow(), boardChecks.checkCol(), boardChecks.checkDiag()];
        for(i = 0; i < 3; i++){
            let win = checks[i];
            if(win == true){console.log(playerTurn.key + " Wins"); break;}
        }
        let tie = checkTie();
        if(tie == true){console.log("It's a Tie"); return;}
    }
    return{playerTurn, turnCheck, checkRow, checkCol, checkDiag};
})();

const settings = (() => {
    const resetGame = () => {
        // reset to default
        board.clearBoard();
        console.log(board.gameBoard);
        // create new board
        board.createBoard();
        playerTurn = player1;
        console.log(playerTurn);
    };
    return{resetGame};
})();

board.createBoard();