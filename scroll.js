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

let butRight = document.createElement('button')
butRight.style.height = '20px'
butRight.textContent = 'Right'
let butLeft = document.createElement('button')
butLeft.style.height = '20px'
butLeft.textContent = 'Left'
let butUp = document.createElement('button')
butUp.style.height = '20px'
butUp.textContent = 'Up'
let butDawn = document.createElement('button')
butDawn.style.height = '20px'
butDawn.textContent = 'Dawn'

gameField.append(butLeft)
gameField.append(butRight)
gameField.append(butUp)
gameField.append(butDawn)

butRight.onclick = function() {
    moveSnakeRigh()
}

butLeft.onclick = function() {
    moveSnakeLeft()
}

butUp.onclick = function() {
    moveSnakeUp()
}

butDawn.onclick = function() {
    moveSnakeDawn()
}

let tableDiv = document.createElement('div')
tableDiv.className = 'tableDiv'

let tableField = document.createElement('table')
tableField.position = 'absolute'
tableField.style.margin = 'auto'

let counterDiv = document.createElement('div')
gameField.prepend(counterDiv)
let countEat = 0
counterDiv.append(countEat)

let tRow = 35
let tData = 44

document.body.append(gameField)
gameField.append(backgroundField)
backgroundField.append(tableDiv)
tableDiv.append(tableField)

function fieldDecr() {
    tRow -= 1
    for (let i = 0; i < tData; i++) {
        tableField[tRow - 1][i].remove()
    }
    tData -= 1
    for (let i = 0; i < tRow; i++) {
        tableField[i][tData - 1].remove()
    }


}

for (let i = -1; i < tRow; i++) {
    tableField[i] = document.createElement('tr')
    tableField[i].ggHere = false
    tableField.append(tableField[i])

    for (let g = -1; g < tData; g++) {
        tableField[i][g] = document.createElement('td')
        tableField[i].append(tableField[i][g])
        tableField[i][g].ggHere = false
        tableField[i][g].numX = i
        tableField[i][g].numY = g
        if (i > -1 && g > -1 && g < tData - 1 && i < tRow - 1) {
            tableField[i][g].style.width = '10px'
            tableField[i][g].style.height = '10px'
            tableField[i][g].style.border = 'solid'
            tableField[i][g].style.margin = '0px'
            tableField[i][g].style.padding = '0px'
        }
    }
}


let SnakeHeadX = 15
let SnakeHeadY = 15

let dataArr = [
    [SnakeHeadX, SnakeHeadY]
]

function gameOver() {
    if (tableField[SnakeHeadX][SnakeHeadY].ggHere === true && dataArr[dataArr.length - 1][1] !== dataArr[dataArr.length - 3][1] && dataArr[dataArr.length - 1][0] !== dataArr[dataArr.length - 3][0]) {
        alert('game over')
        location.reload()
    } else if (SnakeHeadX < 0 || SnakeHeadY < 0 || SnakeHeadX === tRow - 1 || SnakeHeadY === tData - 1) {
        alert('Game over2')
        location.reload()
    }

}

function chengeHead() {
    if (snakeLength > 2 && dataArr[dataArr.length - 1][1] === dataArr[dataArr.length - 3][1] && dataArr[dataArr.length - 1][0] === dataArr[dataArr.length - 3][0]) {
        dataArr = dataArr.reverse()
        SnakeHeadX = dataArr[dataArr.length - 1][0]
        SnakeHeadY = dataArr[dataArr.length - 1][1]
    }
}

function memData() {
    if (dataArr.length < snakeLength) {
        dataArr.push([SnakeHeadX, SnakeHeadY])
    } else {
        tableField[dataArr[0][0]][dataArr[0][1]].style.background = 'none'
        tableField[dataArr[0][0]][dataArr[0][1]].ggHere = false
        dataArr.splice(0, 1)
        dataArr.push([SnakeHeadX, SnakeHeadY])
        chengeHead()
        gameOver()

    }

}

function markCell() {
    for (let i = 0; i < dataArr.length; i++) {
        snake[i] = tableField[dataArr[i][0]][dataArr[i][1]]
        snake[i].style.background = 'yellow'
        tableField[dataArr[i][0]][dataArr[i][1]].ggHere = true
    }

}

function moveBlockRight() {
    if (!snakeEat()) {
        SnakeHeadY++
    } else {
        SnakeHeadY
    }

    memData()
    chengeHead()
    markCell()

}


function moveBlockLeft() {
    if (!snakeEat()) {
        SnakeHeadY--
    } else {
        SnakeHeadY
    }

    memData()
    chengeHead()
    markCell()

}

function moveBlockUp() {
    if (!snakeEat()) {
        SnakeHeadX--
    } else {
        SnakeHeadX
    }

    memData()
    chengeHead()
    markCell()

}

function moveBlockDawn() {
    if (!snakeEat()) {
        SnakeHeadX++
    } else {
        SnakeHeadX
    }

    memData()
    chengeHead()
    markCell()

}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD') {
        cursNow = 'right'
        curs()
        moveBlockRight(snake)
        moveSnakeRigh()
        ggHereNow()

    }

})


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {
        cursNow = 'left'
        curs()
        moveBlockLeft(snake)
        ggHereNow()
        moveSnakeLeft()

    }
})


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW') {
        cursNow = 'up'
        curs()
        moveBlockUp(snake)
        ggHereNow()
        moveSnakeUp()
    }
})


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyS') {
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

let interval = undefined

let snake = []
snake[0] = tableField[SnakeHeadX][SnakeHeadY]
snake[0].style.background = 'green'

let eat = 0
let eatX = 0
let eatY = 0


let tempSnake = 700

function snakeEat() {
    if (tableField[SnakeHeadX][SnakeHeadY].eatHere === true) {
        snakeLength++
        tableField[SnakeHeadX][SnakeHeadY].eatHere = false
        eat = 0
        spawnHavchik()
        fieldDecr()
        countEat++
        counterDiv.innerHTML = countEat
        tempSnake -= 20
        return snakeLength

    }


}

function spawnHavchik() {
    if (eat == 0) {
        eat = 1
        eatX = randomX()
        eatY = randomY()
        if (eatX > -1 && eatY > -1 && eatX < tRow && eatY < tData) {
            tableField[eatX][eatY].style.background = 'black'
            tableField[eatX][eatY].eatHere = true
        } else {
            eat = 0
            spawnHavchik()
        }
    }
}


function randomX() {
    let random = Math.random() * tRow - 3
    random = Math.floor(random)
    return random
}

function randomY() {
    let random = Math.random() * tData - 3
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

spawnHavchik()



// Список для реализации

// 1) Игровое поле +
// 2) Голова змейки (навигация и перемещение) +
// 3) Тело змейки +
// 4) Хвост, который проходит по тем же точкам, что и Голова +
// 5) Возможность изгибаться (без косяков с оторванными кусками) +
// 6) Рост змейки +
// 7) Запрет на касание конца игрового поля +
// 8) Запрет на касание тела змейки +
// 9) Сделать внешние кнопки управления для телефонов
// 10) Реализовать разворот, чтоб жопа становилась головой +-

// последняя идея реализовать через поиск координат
// запоминать координаты головы в массив +

// нужно реализовать конец игры после касания змейки 
// своего тела или конца поля

// Координаты головы змейки пушаться в конец массива 
// dataArr
// хвост змейки идем в начале массива

// Условие для активации функции изменение головы
// звучит как "если следующий блок равен предыдущему"

// Нужно попробовать менять координаты гловы на координаты хвоста
// или можно ппробовать перевернуть массив и присвоить к переменной

// Реализовать уменьшения поля после поедания