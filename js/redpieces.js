const piecesContainer2 = document.getElementById('pieces-container2');

  const pieceStructures2 = [
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

  pieceStructures2.forEach((pieceStructures2, index) => {
      const piece = document.createElement('div');
      piece.className = 'blokus-piece';
      piece.id = `blokus-piece-${index + 1}`;
      
      // Ορισμός grid για το κομμάτι
      piece.style.gridTemplateColumns = `repeat(${pieceStructures2[0].length}, 28px)`;
      piece.style.gridTemplateRows = `repeat(${pieceStructures2.length}, 28px)`;

      // Δημιουργία κελιών για το κομμάτι
      for (let row = 0; row < pieceStructures2.length; row++) {
          for (let col = 0; col < pieceStructures2[row].length; col++) {
              const cell = document.createElement('div');
              cell.classList.add('blokus-cell');
              
              const cellId = `piece-${index}-${row}-${col}`;
              cell.id = cellId;
              
              if (pieceStructures2[row][col] === 1) {
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
      piecesContainer2.appendChild(piece);
  });

  function drag(event) {
      event.dataTransfer.setData("text", event.target.id);
  }