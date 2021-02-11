const fs = require('fs')
const createInterface = require('readline').createInterface
const path = require('path')

import Problem from './modules/Problem'
import Solution from './modules/Solution'
import Score from './modules/Score'

const files = [
    { id: 'a', name: 'a_example' },
    { id: 'b', name: 'b_little_bit_of_everything' },
    { id: 'c', name: 'c_many_ingredients' },
    { id: 'd', name: 'd_many_pizzas' },
    { id: 'e', name: 'e_many_teams' }
]

function parseFile (id: string) {
    let lineCounter = -1
    const file = files.find(f => f.id === id)
    const filePath = path.join(__dirname, '..', 'in', `${file.name}.in`)
    const lineReader = createInterface({
        input: fs.createReadStream(filePath)
    })
    const problem = new Problem(file.name)

    lineReader.on('line', (line: string) => {
        if (lineCounter < 0)
            problem.readHeader(line)
        else
            problem.readRow(lineCounter, line)
        lineCounter++
        if (lineCounter === problem.availablePizzas)
            solve(problem)
    })
}

function solve (problem: Problem) {
    const solution = Solution.generate(problem)
    const score = Score.calculate(problem, solution)
    console.log(score)
}

parseFile('a')