toString

let foneConteiner = document.createElement('div');
foneConteiner.style.width = '1351px'
foneConteiner.style.height = '558px'

// let charConteiner = document.createElement('div')
// charConteiner.style.width = '10px'


let mainFoneImg = document.createElement('img');
mainFoneImg.src = '/gameDev/textures/mainFoneDetails/mainFone.jpg';
mainFoneImg.style.zIndex = -1;
mainFoneImg.style.position = 'absolute'

let characterStand = document.createElement('img');
characterStand.src = '/gameDev/textures/character/stand.jpg';
imgCharSet(characterStand)
    // стартовая позиция персонажа (функция?)
    // characterStand.style.position = 'relative'
    // characterStand.style.zIndex = 1;
    // characterStand.style.width = '100px'
    // characterStand.style.top = '280px'
    // characterStand.style.left = '100px'

function imgCharSet(img) {
    img.style.position = 'relative';
    img.style.zIndex = 1;
    img.style.width = '100px';
    img.hidden = true
}

let walkForward1 = document.createElement('img')
walkForward1.src = '/gameDev/textures/character/walkForward1.jpg'
imgCharSet(walkForward1)

let walkForward2 = document.createElement('img')
walkForward2.src = '/gameDev/textures/character/walkForward2.jpg'
imgCharSet(walkForward2)

let walkBack1 = document.createElement('img');
walkBack1.src = '/gameDev/textures/character/walkBack1.jpg'
imgCharSet(walkBack1);

let walkBack2 = document.createElement('img');
walkBack2.src = '/gameDev/textures/character/walkBack2.jpg'
imgCharSet(walkBack2);

document.body.append(foneConteiner);
foneConteiner.append(mainFoneImg);
foneConteiner.append(characterStand);
foneConteiner.append(walkForward1);
foneConteiner.append(walkForward2);
foneConteiner.append(walkBack1);
foneConteiner.append(walkBack2);

class moveCharacter {
    constructor(name) {
        this.name = name
    }
    runForward() {


    }
    moveForward() {

        document.addEventListener('keydown', function(event) {
            if (event.code == 'KeyD') {
                characterStand.hidden = true;

                let runForward = new Promise(function(resolve, reject) {
                    resolve(setInterval(() => walkForward1.hidden = false, 100))
                })
                promise.then(setTimeout(() => walkForward1.hidden = true, 1000)) и


                // let promise = new Promise(function(resolve, reject) {
                //     resolve(
                //         setInterval(() => walkForward1.hidden = true, 100)
                //     )
                // })
                // promise.then(
                //     setTimeout(() => walkForward2.hidden = true, 100)
                // )



            } else {
                walkForward1.hidden = true;
                walkForward2.hidden = true;
            }
        })
    }

    moveBack() {
        document.addEventListener('keydown', function(event) {
            if (event.code == 'KeyA') {
                characterStand.hidden = true;
                walkBack1.hidden = false;
                walkBack2.hidden = true;

            } else {
                walkBack1.hidden = true;
                walkBack2.hidden = true;
            }
        })
    }

    stay() {
        document.addEventListener('keyup', function(event) {
            if (event.code == 'KeyD' || event.code == 'KeyA') {

                walkForward1.hidden = true;
                walkForward2.hidden = true;
                walkBack1.hidden = true;
                walkBack2.hidden = true;
                characterStand.hidden = false;

            }

        })
    }


}

characterStand.hidden = false

let charMove = new moveCharacter();
charMove.moveForward();
charMove.moveBack();
charMove.stay();






// let gamePlatform = [
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//     ]
//     //игровое поле

// let charStartPos = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
//     // позиция персонажа на поле

// let character = 1
//     // обазначение персонажа

// function moveCharacter(charStartPos) {
//     if (leftBut = true) { //нажатие левой стрелки на клаве
//         //убрать 0 в начале массива,добавить в 0 в конец
//     }
// }