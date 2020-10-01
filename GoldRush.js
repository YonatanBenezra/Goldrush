// const Matrix = require("./Matrix");

class GoldRush extends Matrix {
    constructor(rowNum, colNum) {
        super(rowNum, colNum)
        this.generateMatrix(rowNum, colNum)
        this.addCoins(rowNum, colNum)
        this.alter(0, 0, 1)
        this.alter(4, 4, 2)
        this.playerScores = {
            1: 0,
            2: 0
        }
    }


    movePlayer(playerNum, direction) {
        let x = this.findCoordinate(playerNum).y
        let y = this.findCoordinate(playerNum).x
        
        if (direction == 'down'
            && this.matrix[x + 1][y] !== 1
            && this.matrix[x + 1][y] !== 2
            && this.matrix[x + 1][y] !== 'b'            
        ) {
            if (this.matrix[x + 1][y] == 'c') {
                this.playerScores[playerNum] += 10
                this.alter(x, y, '.')
                this.alter(x + 1, y, playerNum)
            } else {
                this.alter(x, y, '.')
                this.alter(x + 1, y, playerNum)
            }
        } else if (direction == 'up'
            && this.matrix[x - 1][y] !== 1
            && this.matrix[x - 1][y] !== 2
            && this.matrix[x - 1][y] !== 'b'
        ) {
            if (this.matrix[x - 1][y] == 'c') {
                this.playerScores[playerNum] += 10
                this.alter(x, y, '.')
                this.alter(x - 1, y, playerNum)
            } else {
                this.alter(x, y, '.')
                this.alter(x - 1, y, playerNum)
            }
        } else if (direction == 'left'
            && this.matrix[x][y - 1] !== 1
            && this.matrix[x][y - 1] !== 2
            && this.matrix[x][y - 1] != 'b'
        ) {
            if (this.matrix[x][y - 1] == 'c') {
                this.playerScores[playerNum] += 10
                this.alter(x, y, '.')
                this.alter(x, y - 1, playerNum)
            } else {
                this.alter(x, y, '.')
                this.alter(x, y - 1, playerNum)
            }
        } else if (direction == 'right'
            && this.matrix[x][y + 1] !== 1
            && this.matrix[x][y + 1] !== 2
            && this.matrix[x][y + 1] !== 'b'
        ) {
            if (this.matrix[x][y + 1] == 'c') {
                this.playerScores[playerNum] += 10
                this.alter(x, y, '.')
                this.alter(x, y + 1, playerNum)
            } else {
                this.alter(x, y, '.')
                this.alter(x, y + 1, playerNum)
            }
        }
    }
    addCoins(rowNum, colNum) {
        let numOfCoins = 0
        while (numOfCoins < Math.floor(Math.random() * 15)) {
            let x = Math.floor(Math.random() * rowNum)
            let y = Math.floor(Math.random() * colNum)
            if (this.matrix[x][y] === '.') {
                this.alter(x, y, 'c')
            }
        }
    }
}

const goldrush = new GoldRush(5,5)

// module.exports = GoldRush

goldrush.movePlayer(1, 'down')
goldrush.movePlayer(2, "left")
goldrush.print()