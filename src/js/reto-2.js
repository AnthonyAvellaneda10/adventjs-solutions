/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Encontrar el nombre más largo
  const longestName = Math.max(...names.map(name => name.length))
  // Crear la línea de marco
  const frameLine = '*'.repeat(longestName + 4);

  // Inicializamos el marco con la línea superior y un salto de línea
  let frame = frameLine + '\n'

  // Para cada nombre en el array, creamos una línea del marco:
  names.forEach(name => {
    // 1. Agregamos el asterisco y espacio inicial ("* ")
    // 2. Agregamos el nombre
    // 3. Agregamos espacios para alinear (longitud máxima - longitud del nombre actual)
    // 4. Agregamos el asterisco final y salto de línea (" *\n")
    frame = frame + "* " + name + " ".repeat(longestName - name.length) + " *\n"
  })

  // Agregamos la línea inferior del marco
  frame = frame + frameLine

  // Devolvemos el marco completo
  return frame
}


console.log(createFrame(['midu', 'madeval', 'educalvolpz']))
console.log()

console.log(createFrame(['midu']))
console.log()

console.log(createFrame(['a', 'bb', 'ccc']))
console.log()

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))