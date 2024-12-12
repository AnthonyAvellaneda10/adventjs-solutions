/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    // Encontrar las coordenadas de la locomotora '@'
    const x = board.findIndex(row => row.includes('@'));
    const y = board[x].indexOf('@');

    // Movimientos predefinidos
    const moves = {
        'U': { i: -1, j: 0 },
        'D': { i: 1, j: 0 },
        'L': { i: 0, j: -1 },
        'R': { i: 0, j: 1 },
    };

    // Obtener el movimiento actual
    const nextStep = moves[mov];
    if (!board[x + nextStep.i]) return 'crash'

    const nextPosition = board[x + nextStep.i][y + nextStep.j]
    if (nextPosition === '·') return 'none'
    else if (nextPosition === 'o') return 'crash'
    else if (nextPosition === '*') return 'eat'
    else return 'crash'
}

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha