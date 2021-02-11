import fs from 'fs'
import path from 'path'
import Problem from './Problem'

export default class Solution {
    deliveries: Array<Delivery> = []
    problem: Problem

    static generate (problem: Problem): Solution {
        const solution = new Solution()
        solution.problem = problem

        solution.bruteForce()

        solution.addDelivery(2, [1, 4])
        solution.addDelivery(3, [0, 2, 3])

        // solution.export()
        return solution
    }

    bruteForce () {
        const available = this.problem.pizzas.map(p => p.id)
        available.sort((a, b) => {
            return this.problem.pizzas[b].ingredients.length - this.problem.pizzas[a].ingredients.length
        })

        for (let i = this.problem.team4ppl; i > 0; i--) [

        ]
    }

    addDelivery (ppl: number, pizzas: Array<number>) {
        this.deliveries.push({
            ppl,
            pizzas
        })
    }

    export () {
        const filePath = path.join(__dirname, '..', '..', 'out', `${this.problem.filename}.out`)
        const handle = fs.createWriteStream(filePath, { flags: 'w' })

        handle.write(`${this.deliveries.length}`)
        for (const delivery of this.deliveries) {
            handle.write('\n' + delivery.ppl + ' ' + delivery.pizzas.join(' '))
        }
        handle.end()
    }
}

interface Delivery {
    ppl: number
    pizzas: Array<number>
}