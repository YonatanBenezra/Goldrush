
let renderer = new Renderer()
let board = new GoldRush(5, 5)
renderer.renderBoard(board.matrix, 5, 5, board.playerScores)


$(document).keypress(function (e) {
    if (e.which == 119) {
        board.movePlayer(1, 'up')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)
$(document).keypress(function (e) {
    if (e.which == 97) {
        board.movePlayer(1, 'left')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)
$(document).keypress(function (e) {
    if (e.which == 115) {
        board.movePlayer(1, 'down')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)
$(document).keypress(function (e) {
    if (e.which == 100) {
        board.movePlayer(1, 'right')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)

$(document).keydown(function (e) {
    if (e.which == 38) {
        board.movePlayer(2, 'up')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)

$(document).keydown(function (e) {
    if (e.which == 37) {
        board.movePlayer(2, 'left')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)
$(document).keydown(function (e) {
    if (e.which == 40) {
        board.movePlayer(2, 'down')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)
$(document).keydown(function (e) {
    if (e.which == 39) {
        board.movePlayer(2, 'right')
        renderer.renderBoard(board.matrix, board.rowNum, board.colNum, board.playerScores)
    }
}
)
$(document).keypress(function (e) {
    console.log(e.which)
}
)



