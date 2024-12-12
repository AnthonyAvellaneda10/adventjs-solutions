/** @param {string[]} moves
 * @returns {true|string[]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    let x = 0, y = 0, doub = false, inv = false, cond = false, done = new Set()
    const invDir = { L: 'R', R: 'L', U: 'D', D: 'U' }, inc = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] }
    for (const c of moves) {
        if (inc[c]) {
            let dir = inv ? invDir[c] : c
            inv = false
            if (!cond || !done.has(dir)) {
                done.add(dir)
                let [dx, dy] = inc[dir]
                let m = doub ? 2 : 1
                x += dx * m; y += dy * m
            }
            doub = cond = false
        } else if (c === '*') doub = true
        else if (c === '!') inv = true
        else if (c === '?') cond = true
    }
    return x === 0 && y === 0 || [x, y]
}


console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('R!U?U')) // [1,0]
console.log(isRobotBack('U?D?U')) // true