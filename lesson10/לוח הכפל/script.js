const board = document.createElement('div');
board.className = 'board';
document.body.appendChild(board);

for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        const div = document.createElement('div');
        div.innerHTML = y * x;
        div.className = 'card';
        board.appendChild(div);
    }
}