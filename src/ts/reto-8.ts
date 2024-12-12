/**
 * Draws a race track for renos.
 * @param indices - The reno indices
 * @param length - The length of the race
 * @returns The reno race
 */
function drawRace(indices: number[], length: number): string {
    let raceway = '';
    for (let i = 0; i < indices.length; i++) {
        const rail = '~'.repeat(length);
        const position = indices[i];
        const railArr = rail.split('');
        
        if (position > 0) {
            railArr[position] = 'r';
        }
        
        if (position < 0) {
            railArr[length + position] = 'r';
        }
        
        raceway += ' '.repeat(indices.length - i - 1) + railArr.join('') + ` /${i + 1}\n`;
    }
    return raceway.substring(0, raceway.length - 1);
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log()

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log()

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/
