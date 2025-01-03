const board = document.getElementById('board');

const gridSize= 14;

for (let row = 0; row < gridSize; row++){
  for(let col=0;col< gridSize; col++){
    const boardcell = document.createElement('div');
    boardcell.classList.add('boardcell');
    boardcell.dataset.row=row;
    boardcell.dataset.col=col;
    board.appendChild(boardcell);
  }                         
}