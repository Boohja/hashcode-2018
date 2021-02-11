const fs = require('fs')
const createInterface = require('readline').createInterface
const path = require('path')

const files = [
    { id: 'a', name: 'a_example' },
    { id: 'b', name: 'b_little_bit_of_everything.in' }
]

module.exports = {
    parseFile (id) {
        const file = files.find(f => f.id === id)

        const filePath = path.join(__dirname, 'in', file.name)
        const lineReader = createInterface({
            input: fs.createReadStream(filePath)
        })

        lineReader.on('line', (line) => {
            console.log(line)
        })
    }
}