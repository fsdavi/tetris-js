document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StartButton = document.querySelector('#start-button');
    const width = 10;

    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];

    const Tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    let random = Math.floor(Math.random() * Tetrominoes.length);
    let current = Tetrominoes[random][currentRotation];

    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino');
        });
    };

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino');
        });
    };

    timerId = setInterval(moveDown, 100);

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    };

    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            nextRandom = Math.floor(Math.random() * Tetrominoes.length);
            random = nextRandom;
            current = Tetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
        }
    }
})

// function freeze() {
//     if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
//         current.forEach(index => squares[currentPosition + index].classList.add('taken'));
//         nextRandom = Math.floor(Math.random() * Tetrominoes.length);
//         current = Tetrominoes[nextRandom][currentPosition];
//         currentPosition = 4;
//         draw();
//     }
// }