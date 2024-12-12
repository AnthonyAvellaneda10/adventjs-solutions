/**
 * Esta función organiza un inventario agrupando items por categoría y sumando cantidades
 * @param {{ name: string, quantity: number, category: string }[]} inventory - Array de objetos con nombre, cantidad y categoría
 * @returns {object} El inventario organizado por categorías
 */
function organizeInventory(inventory) {
    // Usamos reduce para transformar el array en un objeto organizado
    return inventory.reduce((acc, { name, quantity, category }) => {
        // acc es el acumulador donde guardaremos el resultado
        // Desestructuramos cada item para obtener name, quantity y category

        // Esta línea hace varias cosas:
        // 1. Si la categoría no existe en acc, crea un objeto vacío (acc[category] ??= {})
        // 2. Accede al nombre del producto dentro de esa categoría
        // 3. Si el producto no existe, inicia en 0 y suma la cantidad nueva
        // 4. Si ya existe, suma la cantidad nueva a la existente
        (acc[category] ??= {})[name] = (acc[category]?.[name] ?? 0) + quantity;
        
        return acc; // Devolvemos el acumulador para la siguiente iteración
    }, {}); // Iniciamos con un objeto vacío
}

// Primer ejemplo de inventario con juguetes y artículos deportivos
const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },     // Muñeca: 5 unidades
    { name: 'car', quantity: 3, category: 'toys' },      // Carro: 3 unidades
    { name: 'ball', quantity: 2, category: 'sports' },   // Pelota: 2 unidades
    { name: 'car', quantity: 2, category: 'toys' },      // Carro: 2 unidades más
    { name: 'racket', quantity: 4, category: 'sports' }  // Raqueta: 4 unidades
]

console.log(organizeInventory(inventory))
// Mostrará los items agrupados por categoría con cantidades sumadas

console.log()
// Segundo ejemplo con libros y artículos de arte
const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' }, // Libro: 10 unidades
    { name: 'book', quantity: 5, category: 'education' },  // Libro: 5 unidades más
    { name: 'paint', quantity: 3, category: 'art' }        // Pintura: 3 unidades
]

console.log(organizeInventory(inventory2))
// Mostrará los items agrupados por categoría con cantidades sumadas