const fs = require('fs')
const createInterface = require('readline').createInterface
const path = require('path')

import Problem from './modules/Problem'
import solve from './modules/Solver'

const files = [
    { id: 'a', name: 'a_example.in' },
    { id: 'b', name: 'b_little_bit_of_everything.in' },
    { id: 'c', name: 'c_many_ingredients.in' },
    { id: 'd', name: 'd_many_pizzas.in' },
    { id: 'e', name: 'e_many_teams.in' }
]

function parseFile (id: String) {
    let lineCounter = -1
    const file = files.find(f => f.id === id)
    const filePath = path.join(__dirname, '..', 'in', file.name)
    const lineReader = createInterface({
        input: fs.createReadStream(filePath)
    })
    const problem = new Problem()

    lineReader.on('line', (line: String) => {
        if (lineCounter < 0)
            problem.readHeader(line)
        else
            problem.readRow(lineCounter, line)
        lineCounter++
        if (lineCounter === problem.availablePizzas)
            solve(problem)
    })
}

parseFile('a')