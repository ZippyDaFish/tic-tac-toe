const board = (() => {
    var gameBoard = [];
    const grid = document.getElementById("grid-board");
    const createBoard = () => {for(let i = 0; i < 9; i++){
        let piece = createGridPiece();
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

board.createBoard();
board.editPiece(1, "X");