// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    constructor() {
        this._name = createName()
        this.oldNames = []
    }

    reset() {
        this.oldNames.push(this._name)
        let newName = createName()
        while (this.oldNames.indexOf(newName) !== -1) {
            newName = createName()
        }
        this._name = newName
    }
    get name() {
        return this._name
    }
}

Robot.releaseNames = () => { };

const createName = () => {
    let newName = ''
    let num = 0
    for (let i = 0; i < 2; i++) {
        num = Math.random() * 26
        newName += LETTERS[Math.floor(num)]
    }
    for (let i = 0; i < 3; i++) {
        num = Math.random() * 10
        newName += Math.floor(num)
    }
    return newName
}

const LETTERS = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
    'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
    'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
]

