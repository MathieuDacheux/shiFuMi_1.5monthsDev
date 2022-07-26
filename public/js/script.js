// Variables

    // Joueur

let playerChoice = document.querySelectorAll('button');
let playerChoiceResult;
let playerImage = document.querySelector('#playerImage')

    // IA

let iaChoiceResult;
let iaImage = document.querySelector('#iaImage');

    // Victoires et défaites

let winCounter = 0;
let loseCounter = 0;

let iaChoiceSign = () => {
    let iaChoice = Math.floor(Math.random()*5)+1;   
    console.log(iaChoice);
    switch(iaChoice) {
        case 1 :
            iaImage.src = "./public/assets/img/rock.png";
            iaChoiceResult = 1;
            break;
        case 2 :
            iaImage.src = "./public/assets/img/leaf.png";
            iaChoiceResult = 2;
            break;
        case 3 :
            iaImage.src = "./public/assets/img/scissors.png";
            iaChoiceResult = 3;
            break;
        case 4 :
            iaImage.src = "./public/assets/img/lizard.png";
            iaChoiceResult = 4;
            break;
        case 5 :
            iaImage.src = "./public/assets/img/vulcan.png";
            iaChoiceResult = 5;
            break;  
        default : 
            break;
    }
}

let playerChoiceSign = (indice) => {
    switch (indice) {
        case 1 :
            playerImage.src = "./public/assets/img/rock.png";
            playerChoiceResult = 1;
            break;
        case 2 :
            playerImage.src = "./public/assets/img/leaf.png";
            playerChoiceResult = 2;
            break;
        case 3 :
            playerImage.src = "./public/assets/img/scissors.png";
            playerChoiceResult = 3;
            break;
        case 4 :
            playerImage.src = "./public/assets/img/lizard.png";
            playerChoiceResult = 4;
            break;
        case 5 :
            playerImage.src = "./public/assets/img/vulcan.png";
            playerChoiceResult = 5;
            break;  
        default : 
            break;
    }
}



let shifumi = (indice) => {
    iaChoiceSign();
    playerChoiceSign(indice);

    if ((playerChoiceResult == 1 && (iaChoiceResult == 4  || iaChoiceResult == 3)) || 
    (playerChoiceResult == 2 && (iaChoiceResult == 1  || iaChoiceResult == 5)) ||
    (playerChoiceResult == 3 && (iaChoiceResult == 2  || iaChoiceResult == 4)) ||
    (playerChoiceResult == 4 && (iaChoiceResult == 5  || iaChoiceResult == 2)) ||
    (playerChoiceResult == 5 && (iaChoiceResult == 3 || iaChoiceResult == 1))) {
            document.querySelector('.resultText').textContent = 'Gagné';
            winCounter ++;
            document.querySelector('.winCounter').textContent = `${winCounter}`;
    } else if(playerChoiceResult == iaChoiceResult) {
        document.querySelector('.resultText').textContent = 'Égalité';
    } else {
        document.querySelector('.resultText').textContent = 'Perdu';
        loseCounter ++;
        document.querySelector('.loseCounter').textContent = `${loseCounter}`;
    }
}

document.querySelectorAll('button')[1].addEventListener('click', () => {
    shifumi(1);
})

document.querySelectorAll('button')[2].addEventListener('click', () => {
    shifumi(2);
})

document.querySelectorAll('button')[3].addEventListener('click', () => {
    shifumi(3);
})  

document.querySelectorAll('button')[4].addEventListener('click', () => {
    shifumi(4);
})

document.querySelectorAll('button')[5].addEventListener('click', () => {
    shifumi(5);
})