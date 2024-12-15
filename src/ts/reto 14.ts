function drawTable(data: Array<Record<string, string | number>>): string {
    if (!data.length) return '';
    const cols = Object.keys(data[0]);
    const n = cols.length;
    const m = data.length;
    const w = new Array(n);
    let i = 0, j = 0, s = '';

    // Calcular anchos en una pasada
    while (i < n) {
        w[i] = cols[i].length;
        j = 0;
        while (j < m) {
            w[i] = Math.max(w[i], String(data[j][cols[i]]).length);
            j++;
        }
        i++;
    }

    // Línea separadora
    s = '+';
    i = 0;
    while (i < n) s += '-'.repeat(w[i++] + 2) + '+';

    // Encabezado
    let r = s + '\n|';
    i = 0;
    while (i < n) {
        const c = cols[i];
        r += ' ' + c[0].toUpperCase() + c.slice(1) + ' '.repeat(w[i] - c.length) + ' |';
        i++;
    }

    // Filas
    r += '\n' + s;
    j = 0;
    while (j < m) {
        r += '\n|';
        i = 0;
        while (i < n) {
            const v = String(data[j][cols[i]]);
            r += ' ' + v + ' '.repeat(w[i] - v.length) + ' |';
            i++;
        }
        j++;
    }

    return r + '\n' + s;
}