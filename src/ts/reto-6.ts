function inBox(box: string[]): boolean {
    // Si la caja tiene menos de 3 filas, no puede contener un regalo válido
    if (box.length < 3) return false

    // Excluimos primera y última fila
    const innerRows = box.slice(1, -1)

    // Buscamos el asterisco en las filas interiores
    for (let i = 0; i < innerRows.length; i++) {
        const row = innerRows[i]
        const asteriskIndex = row.indexOf('*')

        // Si encontramos un asterisco
        if (asteriskIndex !== -1) {
            // Verificamos que no esté en los bordes
            return asteriskIndex !== 0 && asteriskIndex !== row.length - 1
        }
    }

    return false
}

console.log(inBox([
    "###",
    "#*#",
    "###"
])) // ➞ true

console.log()

console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])) // ➞ true

console.log()

console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
])) // ➞ false

console.log()

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])) // ➞ false