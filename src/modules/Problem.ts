export default class Problem {
    availablePizzas = 0
    team2ppl = 0
    team3ppl = 0
    team4ppl = 0
    rows = []

    readHeader (line: String) {
        const parts = line.split(' ')
        this.availablePizzas = parseInt(parts[0])
        this.team2ppl = parseInt(parts[1])
        this.team3ppl = parseInt(parts[2])
        this.team4ppl = parseInt(parts[3])
    }

    readRow (id: Number, line: String) {
        const parts = line.split(' ')
        this.rows.push({
            id,
            amount: parseInt(parts.shift()),
            ingredients: parts
        })
    }
}