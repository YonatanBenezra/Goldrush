
class Renderer {
    constructor() {
    }
    renderBoard(matrix, rowNum, colNum, playerScores) {
        $('#gameBoard').empty()
        $('#gameBoard').css('grid-template-columns', `repeat(${colNum}, 1fr)`)
        $('#gameBoard').css('grid-template-rows', `repeat(${rowNum}, 1fr)`)
        for (let row of matrix) {
            for (let tile of row) {
                if( tile == 1){
                    $('#gameBoard').append(`<div class=tile><img src="https://img.icons8.com/color/48/000000/volleyball-2.png"/></div>`)
                }else if (tile == 2){
                    $('#gameBoard').append(`<div class="tile" ><img src="https://img.icons8.com/color/48/000000/badminton-2.png"/></div>`)
                } else if (tile == 'c'){
                    $('#gameBoard').append(`<div class="tile" ><div class = "coin"><img src="https://img.icons8.com/color/48/000000/money-bag-pokemon.png"/></div></div>
                    </div>
                    </div>`)
                } else {
                    $('#gameBoard').append(`<div class="tile" >${tile}</div>`)
                }
            }
        }
        for (let i = 1; i <= 2; i++){
            $('#gameBoard').append(`<div class = 'score'>${playerScores[i]}</div>`)
        }
    }
}
// let renderer = new Renderer
// let matrix = new GoldRush(5,5)

// renderer.renderBoard(matrix.matrix, 5, 5, 0)