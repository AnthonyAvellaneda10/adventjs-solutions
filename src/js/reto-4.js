/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    // Array para almacenar las líneas del árbol
    const lines = [];
    const width = 2 * height - 1;

    // Construir el árbol
    for (let i = 0; i < height; i++) {
        const ornaments = ornament.repeat(2 * i + 1);
        const padding = '_'.repeat(height - i - 1);
        lines.push(padding + ornaments + padding);
    }

    // Agregar el tronco
    const trunkPadding = '_'.repeat(height - 1);
    lines.push(trunkPadding + '#' + trunkPadding);
    lines.push(trunkPadding + '#' + trunkPadding);

    // Unir todas las líneas con saltos de línea
    return lines.join('\n');
}

const tree = createXmasTree(5, '*')
console.log(tree)

console.log()

const tree2 = createXmasTree(3, '+')
console.log(tree2)

console.log()

const tree3 = createXmasTree(6, '@')
console.log(tree3)