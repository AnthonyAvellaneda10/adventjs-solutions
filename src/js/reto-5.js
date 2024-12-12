/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const organizeShoes = []
    const shoesPairs = {}

    for (const { type, size } of shoes) {
        if (!shoesPairs[size]) {
            shoesPairs[size] = { "I": 0, "R": 0 }
        }

        shoesPairs[size][type]++

        if (shoesPairs[size].I > 0 && shoesPairs[size].R > 0) {
            organizeShoes.push(size)
            shoesPairs[size].I--
            shoesPairs[size].R--
        }
    }

    return organizeShoes
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))

console.log()

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]

console.log(organizeShoes(shoes2))

console.log()

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
