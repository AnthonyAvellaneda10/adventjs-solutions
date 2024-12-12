/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  // Utilizar un Set para eliminar duplicados y mantener el orden de inserción
  const uniqueGifts = new Set(gifts);

  // Convertir el Set nuevamente a un array y ordenarlo
  return [...uniqueGifts].sort((a, b) => a - b);
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1) // [1, 2, 3, 4, 5]

console.log(preparedGifts1)
console.log()

const gifts2 = [6, 5, 5, 5, 5]

const preparedGifts2 = prepareGifts(gifts2)

console.log(preparedGifts2) // [5, 6]
console.log()

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)

console.log(preparedGifts3) // []// No hay regalos, la lista queda vacía