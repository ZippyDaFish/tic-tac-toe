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
    return{gameBoard, createBoard};
})();

board.createBoard();