import Solution from "./Solution";
import Problem from "./Problem";

export default class Score {

    static calculate (problem: Problem, solution: Solution) {
        let score = 0
        for (const deliv of solution.deliveries) {
            let ingredients = deliv.pizzas.map(nr => problem.pizzas[nr].ingredients)
            ingredients = [].concat(...ingredients)
            ingredients = Array.from(new Set(ingredients))
            score += ingredients.length**2
        }
        return score
    }
}