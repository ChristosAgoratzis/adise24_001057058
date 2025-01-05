const piecesContainerPlayer1 = document.getElementById('pieces-container');
const piecesContainerPlayer2 = document.getElementById('pieces-container2');
const board = document.getElementById('board');
const gridSize = 14;

const pieceStructures = [
    [[1, 1], [1, 1]], // κυβος
    [[0, 1, 0], [1, 1, 1]], // Τ
    [[1, 1, 1, 1], [0, 0, 1]], // Τ
    [[1, 0], [1, 0], [1, 1, 1]], // L
    [[1, 1, 1], [1, 0, 1]],
    [[1, 1, 1, 1, 1]],
    [[1, 1, 1, 1]],
    [[0, 1]],
    [[1, 1], [1]],
    [[0, 1], [0, 1]],
    [[1, 1, 1]],
    [[0, 1, 1], [1, 1]],
    [[0, 1, 0], [1, 1, 1], [0, 1, 0]],
    [[0, 1], [0, 1], [1, 1]],
    [[1, 1, 1, 1], [0, 0, 0, 1]],
    [[0, 0, 1], [0, 1, 1], [1, 1, 0]],
    [[0, 0, 1], [1, 1, 1], [1, 0, 0]],
    [[1, 1, 0], [1, 1, 1]],
    [[1, 0, 0], [1, 1, 1], [1, 0, 0]],
    [[1, 1, 0], [0, 1, 1], [0, 1]],
    [[0, 1], [1, 1], [1, 0], [1, 0]],
];

//ΚΟΜΜΑΤΙΑ ΓΙΑ 1ο ΠΑΙΚΤΗ
pieceStructures.forEach((pieceStructure, index) => {
    const piece1 = document.createElement('div');
    piece1.className = 'blokus-piece';
    piece1.id = `blokus-piece1-${index + 1}`;
    piece1.setAttribute('draggable', 'true');
    
    piece1.style.gridTemplateColumns = `repeat(${pieceStructure[0].length}, 35px)`;
    piece1.style.gridTemplateRows = `repeat(${pieceStructure.length}, 35px)`;

    //ΔΗΜΙΟΥΡΓΙΑ ΚΟΜΜΑΤΙΟΥ
    for (let row = 0; row < pieceStructure.length; row++) {
        for (let col = 0; col < pieceStructure[row].length; col++) {
            const cell = document.createElement('div');
            cell.classList.add('blokus-cell');
            const cellId = `piece1-${index}-${row}-${col}`;

            if (pieceStructure[row][col] === 1) {
                cell.classList.add('active');
            } else {
                cell.style.visibility = 'hidden';
            }

            piece1.appendChild(cell);
        }
    }

    piecesContainerPlayer1.appendChild(piece1);

    piece1.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
});





//ΚΟΜΜΑΤΙΑ ΚΑΙ 2ο ΠΑΙΚΤΗ
pieceStructures.forEach((pieceStructure, index) => {
    const piece2 = document.createElement('div');
    piece2.className = 'blokus-piece';
    piece2.id = `blokus-piece2-${index + 1}`;
    piece2.setAttribute('draggable', 'true');
    
    piece2.style.gridTemplateColumns = `repeat(${pieceStructure[0].length}, 35px)`;
    piece2.style.gridTemplateRows = `repeat(${pieceStructure.length}, 35px)`;

    
    for (let row = 0; row < pieceStructure.length; row++) {
        for (let col = 0; col < pieceStructure[row].length; col++) {
            const cell = document.createElement('div');
            cell.classList.add('blokus-cell2');
            const cellId = `piece2-${index}-${row}-${col}`;

            if (pieceStructure[row][col] === 1) {
                cell.classList.add('active');
            } else {
                cell.style.visibility = 'hidden';
            }

            piece2.appendChild(cell);
        }
    }

    // Προσθήκη του κομματιού στο container του Παίκτη 2
    piecesContainerPlayer2.appendChild(piece2);

    // Ορισμός dragstart event για το κομμάτι του Παίκτη 2
    piece2.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
});


// ΔΗΜΙΟΥΡΓΙΑ BOARD
for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
        const boardcell = document.createElement('div');
        boardcell.classList.add('boardcell');
        boardcell.dataset.row = row;
        boardcell.dataset.col = col;
        board.appendChild(boardcell);
        
        // DRAG OVER
        boardcell.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        // DROP EVENT
        boardcell.addEventListener('drop', (e) => {
            e.preventDefault();
            const pieceId = e.dataTransfer.getData("text");
            const piece = document.getElementById(pieceId);
            
            // ΤΟΠΟΘΕΤΗΣΗ ΚΟΜΜΑΤΙΟΥ
            const boardcell = e.target;
            const row = boardcell.dataset.row;
            const col = boardcell.dataset.col;

            piece.style.position = 'absolute';
            piece.style.left = `${boardcell.offsetLeft}px`;
            piece.style.top = `${boardcell.offsetTop}px`;

            boardcell.appendChild(piece); // Τοποθέτηση του κομματιού πάνω στο grid
        });
    }
}
