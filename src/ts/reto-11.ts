function decodeFilename(filename: string): string {
    // Usamos una expresión regular para extraer el nombre del archivo y su extensión
    const match = filename.match(/^\d+_([a-zA-Z0-9_\-]+\.[a-zA-Z0-9]+)\./);
    return match ? match[1] : '';
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log()

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log()

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv"