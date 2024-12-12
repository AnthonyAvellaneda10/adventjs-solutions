function compile(instructions) {
    const registers = {}; // Inicializamos los registros

    let pointer = 0; // Puntero de la instrucción actual
    while (pointer < instructions.length) {
        const [cmd, x, y] = instructions[pointer].split(' ');

        switch (cmd) {
            case 'MOV':
                registers[y] = isNaN(x) ? (registers[x] || 0) : parseInt(x);
                break;
            case 'INC':
                registers[x] = (registers[x] || 0) + 1;
                break;
            case 'DEC':
                registers[x] = (registers[x] || 0) - 1;
                break;
            case 'JMP':
                if ((registers[x] || 0) === 0) {
                    pointer = parseInt(y);
                    continue;
                }
                break;
        }
        pointer++; // Avanzamos al siguiente comando
    }

    return registers['A']; // Devolvemos el valor del registro 'A'
}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

console.log(compile(instructions))