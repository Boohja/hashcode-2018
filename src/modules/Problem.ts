export default class Problem {
    filename: string
    availablePizzas: number
    team2ppl: number
    team3ppl: number
    team4ppl: number
    pizzas: Array<Pizza> = []

    constructor (filename: string) {
        this.filename = filename
    }

    readHeader (line: string) {
        const parts = line.split(' ')
        this.availablePizzas = parseInt(parts[0])
        this.team2ppl = parseInt(parts[1])
        this.team3ppl = parseInt(parts[2])
        this.team4ppl = parseInt(parts[3])
    }

    readRow (id: number, line: string) {
        const parts = line.split(' ')
        this.pizzas.push({
            id,
            ingredientsAmount: parseInt(parts.shift()),
            ingredients: parts
        })
    }
}

interface Pizza {
    id: number,
    ingredients: Array<string>
    ingredientsAmount: number
}