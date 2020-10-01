
class Matrix {
    constructor(numRows, numColumns) {
        this.matrix = []
    }
    generateMatrix(numRows, numColumns) {
        let dot = '.'

        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(dot)
            }
        }
        return this.matrix
    }
    
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    print() {

        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
        console.log(this.playerScores)
    }
    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    alter(rowNum, colNum, newNum) {
        this.matrix[rowNum][colNum] = newNum
    }
    findCoordinate(value) {
        for (let r = 0; r < this.matrix.length; r++) {
            let y = r
            for (let c = 0; c < this.matrix[r].length; c++) {
                let x = c
                if (this.matrix[r][c] == value){
                    return ({x,y})
                }
            }
        }
    }
}
// module.exports = Matrix

