const piecesContainer = document.getElementById('pieces-container');

    const pieceStructures = [
  [[1, 1], [1, 1]], // κυβος
  [[0, 1, 0],[1, 1, 1]], // Τ
  [[1,1,1,1],[0,0,1]], // Τ
  [[1, 0], [1, 0], [1, 1, 1]], // L
  [[1, 1, 1],[1, 0, 1]],
  [[1,1,1,1,1]],
  [[1,1,1,1]],
  [[0,1]],
  [[1,1],[1]],
  [[0,1],[0,1]],
  [[1,1,1]],
  [[0,1,1],[1,1]],
  [[0,1,0],[1,1,1],[0,1,0]],
  [[0,1],[0,1],[1,1]],
  [[1,1,1,1],[0,0,0,1]],
  [[0,0,1],[0,1,1],[1,1,0]],
  [[0,0,1],[1,1,1],[1,0,0]],
  [[1,1,0],[1,1,1]],
  [[1,0,0],[1,1,1],[1,0,0]],
  [[1,1,0],[0,1,1],[0,1]],
  [[0,1],[1,1],[1,0],[1,0]],

];

pieceStructures.forEach((pieceStructure, index) => {
        const piece = document.createElement('div');
        piece.className = 'blokus-piece';
        piece.id = `blokus-piece-${index + 1}`;
        
        // Ορισμός grid για το κομμάτι
        piece.style.gridTemplateColumns = `repeat(${pieceStructure[0].length}, 28px)`;
        piece.style.gridTemplateRows = `repeat(${pieceStructure.length}, 28px)`;

        // Δημιουργία κελιών για το κομμάτι
        for (let row = 0; row < pieceStructure.length; row++) {
            for (let col = 0; col < pieceStructure[row].length; col++) {
                const cell = document.createElement('div');
                cell.classList.add('blokus-cell');
                
                const cellId = `piece-${index}-${row}-${col}`;
                cell.id = cellId;
                
                if (pieceStructure[row][col] === 1) {
                    cell.classList.add('active');
                } else {
                    cell.style.visibility = 'hidden';
                }
                
                piece.appendChild(cell);
            }
        }
        
        // Προσθήκη δυνατότητας drag
        piece.setAttribute('draggable', 'true');
        piece.addEventListener('dragstart', drag);

        // Προσθήκη του κομματιού στο container
        piecesContainer.appendChild(piece);
    });

    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }