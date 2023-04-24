toString

let gameField = document.createElement('div')
gameField.className = 'gameField'

let backgroundField = document.createElement('div')
backgroundField.className = 'backgroundField'
backgroundField.style.width = '800px'
backgroundField.style.height = '800px'
backgroundField.style.background = 'url(./gameDev/scroll/texture/background.jpg)'
backgroundField.style.margin = 'auto'
backgroundField.style.zIndex = -1
backgroundField.style.position = 'relative'

let tableDiv = document.createElement('div')
tableDiv.className = 'tableDiv'

let tableField = document.createElement('table')
tableField.position = 'absolute'
tableField.style.margin = 'auto'

let tRow = 35
let tData = 44

document.body.append(gameField)
gameField.append(backgroundField)
backgroundField.append(tableDiv)
tableDiv.append(tableField)

for (let i = 0; i < tRow; i++) {
    tableField[i] = document.createElement('tr')
    tableField[i].ggHere = false
    tableField.append(tableField[i])

    for (let g = 0; g < tData; g++) {
        tableField[i][g] = document.createElement('td')
        tableField[i].append(tableField[i][g])
        tableField[i][g].style.width = '10px'
        tableField[i][g].style.height = '10px'
        tableField[i][g].style.border = 'solid'
        tableField[i][g].style.margin = '0px'
        tableField[i][g].style.padding = '0px'
        tableField[i][g].ggHere = false
        tableField[i][g].numX = i
        tableField[i][g].numY = g
    }
}
//     elem[1] = tableField[SnakeHeadX][SnakeHeadY - 1]

// if (snakeEat()) {
//     elem[snakeLength - 1] = tableField[SnakeHeadX][SnakeHeadY - snakeLength + 1]
//     elem[snakeLength - 1].style.background = 'red'

// }

// if (rightLength < snakeLength) {
//     rightLength += 1
// }
// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyW' && arrCurs[2] == 'right') {
//         let povorot = elem[1]
//         tableField[povorot.numX][povorot.numY - rightLength + 1].style.background = 'none'

//     } else if (event.code == 'KeyW' && arrCurs[2] == 'left') {
//         let povorot = elem[1]
//         tableField[povorot.numX][povorot.numY + snakeLength - 1].style.background = 'none'
//     }

// })



// function test(elem) {
//     for (let i = 1; i < elem.length; i++) {
//         elem[i] = tableField[elem[i - 1].numX][elem[i - 1].numY]

//     }
// }

let SnakeHeadX = 15
let SnakeHeadY = 15
let snakeBodyX = 15
let snakeBodyY = 10
let snakeAnus = 0

let rightLength = 0
let leftLength = 0
let upLength = 0
let dawnLength = 0

function moveSnakeAss(elem) {
    let copyHeadX = elem[0].numX
    let copyHeadY = elem[0].numY
    let copyBodyX = elem[-1].numX
    let copyBodyY = elem[-1].numY
    let length = snakeLength

    if (SnakeHeadY++) {
        elem[-1] = elem[0]
        elem[-1].style.background = 'yellow'
    } else if (SnakeHeadX++) {

    }
}

function moveBlockRight(elem) {
    moveSnakeAss(snake)
        // SnakeHeadY += 1
        // snakeBodyY += 1
        // if (arrCurs[2] === 'up' && arrCurs[3] === 'right') {
        //     let reservBodyX = elem[0].numX
        //     let reservBodyY = elem[-1].numX
        //     if (reservBodyY > reservBodyX) {
        //         snakeBodyX -= 1
        //         snakeBodyY -= 1
        //         elem[-1] = tableField[reservBodyX][snakeBodyY]
        //         tableField[snakeBodyX + 1][snakeBodyY].style.background = 'none'

    //     }
    // }


    elem[0] = tableField[SnakeHeadX][SnakeHeadY]
    elem[0].style.background = 'green'
    tableField[SnakeHeadX][SnakeHeadY - 1].style.background = 'none'
        // elem[-1] = tableField[snakeBodyX][snakeBodyY]
        // snake[-1].style.background = 'red'

    // tableField[snakeBodyX][snakeBodyY - snakeLength].style.background = 'none'

    // elem[0].ggHere = true




    if (snakeEat()) {
        elem[snakeLength] = tableField[elem[snakeLength - 1].numX][elem[snakeLength - 1].numY - 1]


    }

    // if (snakeLength > 1) {
    //     test(snake)

    // }

    // if (arrCurs[3] === 'up') {
    //     snake[-1] = tableField[snake[-1].numX][snake[-1].numY + 1]
    //     snake[-1].style.backgroundро = 'red'
    // }

}

function moveBlockLeft(elem) {
    moveSnakeAss(snake)
    SnakeHeadY -= 1
    elem[0] = tableField[SnakeHeadX][SnakeHeadY]
    tableField[SnakeHeadX][SnakeHeadY + snakeLength].style.background = 'none'
    elem[0].style.background = 'green'

    elem[1] = tableField[SnakeHeadX][SnakeHeadY + 1]

    if (snakeEat()) {
        // elem[snakeLength - 1] = tableField[SnakeHeadX][SnakeHeadY + snakeLength - 1]
        // elem[snakeLength - 1].style.background = 'red'

    }
    if (snakeLength > 1) {
        test(snake)
    }
}

function moveBlockUp(elem) {
    moveSnakeAss(snake)
        // if (arrCurs[3] === 'up' && arrCurs[2] === 'right') {
        //     let reservBodyX = elem[0].numY
        //     let reservBodyY = elem[-1].numY
        //     if (reservBodyY < reservBodyX) {
        //         reservBodyY += 1
        //         elem[-1] = tableField[snakeBodyX][reservBodyY]
        //         elem[-1].style.background = 'red'
        //         tableField[snakeBodyX][reservBodyY - 1].style.background = 'none'

    //     } else if (reservBodyY == reservBodyX) {

    //         snakeBodyX -= 1
    //         elem[-1] = tableField[snakeBodyX][reservBodyY]
    //         elem[-1].style.background = 'red'
    //         tableField[snakeBodyX + 1][reservBodyY].style.background = 'none'
    //         snakeBodyY = reservBodyY
    //     }
    // }

    SnakeHeadX -= 1
    elem[0] = tableField[SnakeHeadX][SnakeHeadY]
    tableField[SnakeHeadX + snakeLength][SnakeHeadY].style.background = 'none'
    elem[0].style.background = 'green'

    // elem[1] = tableField[SnakeHeadX + 1][SnakeHeadY]

    if (snakeEat()) {
        // elem[snakeLength - 1] = tableField[SnakeHeadX + snakeLength - 1][SnakeHeadY]
        // elem[snakeLength - 1].style.background = 'red'

    }
    if (snakeLength > 1) {
        test(snake)
    }

}

function moveBlockDawn(elem) {
    moveSnakeAss(snake)
    SnakeHeadX += 1
    elem[0] = tableField[SnakeHeadX][SnakeHeadY]
    tableField[SnakeHeadX - snakeLength][SnakeHeadY].style.background = 'none'
    elem[0].style.background = 'green'

    elem[1] = tableField[SnakeHeadX - 1][SnakeHeadY]

    if (snakeEat()) {
        // elem[snakeLength - 1] = tableField[SnakeHeadX - snakeLength + 1][SnakeHeadY]
        // elem[snakeLength - 1].style.background = 'red'

    }
    if (snakeLength > 1) {
        test(snake)
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD' && SnakeHeadY < tData - 1) {
        cursNow = 'right'
        curs()
        moveBlockRight(snake)
        moveSnakeRigh()
        ggHereNow()

    }
})


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA' && SnakeHeadY > 0) {
        cursNow = 'left'
        curs()
        moveBlockLeft(snake)
        ggHereNow()
        moveSnakeLeft()
    }
})


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW' && SnakeHeadX > 0) {
        cursNow = 'up'
        curs()
        moveBlockUp(snake)
        ggHereNow()
        moveSnakeUp()


    }
})


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyS' && SnakeHeadX < tRow - 1) {
        cursNow = 'dawn'
        curs()
        moveBlockDawn(snake)
        ggHereNow()
        moveSnakeDawn()

    }
})

function ggHereNow() {
    snake.ggHere = true
    console.log(arrCurs)
}

let snakeLength = 1
let snakeLengthHide = snakeLength

let interval = undefined
let intervaHide = undefined

let snake = []
snake[0] = tableField[SnakeHeadX][SnakeHeadY]
snake[0].style.background = 'green'

snake[-1] = tableField[SnakeHeadX][SnakeHeadY - 5]
snake[-1].style.background = 'red'

let eat = 0
let eatX = 0
let eatY = 0

let tempSnake = 700

function snakeEat() {
    if (tableField[SnakeHeadX][SnakeHeadY].eatHere === true) {
        snakeLength = snakeLength + 1
        snakeLengthHide = snakeLength
        tableField[SnakeHeadX][SnakeHeadY].eatHere = false
        eat = 0
        spawnHavchik()
        console.log(snakeLength)
        return snakeLength
    }
}

function spawnHavchik() {
    if (eat == 0) {
        eat = 1
        eatX = randomX()
        eatY = randomY()
        tableField[eatX][eatY].style.background = 'black'
        tableField[eatX][eatY].eatHere = true
    }
}

function randomX() {
    let random = Math.random() * tRow
    random = Math.floor(random)
    return random
}

function randomY() {
    let random = Math.random() * tData
    random = Math.floor(random)
    return random
}

function moveSnakeRigh() {
    clearInterval(interval)
    interval = setInterval(() => moveBlockRight(snake), tempSnake)

}

function moveSnakeLeft() {
    clearInterval(interval)
    interval = setInterval(() => moveBlockLeft(snake), tempSnake)

}

function moveSnakeUp() {
    clearInterval(interval)
    interval = setInterval(() => moveBlockUp(snake), tempSnake)

}

function moveSnakeDawn() {
    clearInterval(interval)
    interval = setInterval(() => moveBlockDawn(snake), tempSnake)

}

let cursNow = undefined
let arrCurs = ['right', 'left', 'up', 'dawn']

function curs() {
    if (!arrCurs.includes(cursNow)) {
        arrCurs.push(cursNow)
    } else {
        for (let i = 0; i < arrCurs.length; i++) {
            if (arrCurs[i] == cursNow) {
                arrCurs.splice(i, 1)
                arrCurs.push(cursNow)
            }
        }
    }
}

// function growSnake(num) {
//     if (cursNow == 'right') {
//         snake[num] = tableField[x][y - 1].style.background = 'black'
//     } else if (cursNow == 'left') {
//         snake[num] = tableField[x][y + 1].style.background = 'black'
//     } else if (cursNow == 'up') {
//         snake[num] = tableField[x + 1][y].style.background = 'black'
//     } else if (cursNow == 'dawn') {
//         snake[num] = tableField[x - 1][y].style.background = 'black'
//     }
//     return snake
// }


spawnHavchik()