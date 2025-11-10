let sumcard = 0;
let cards = []
let age = 23;
let message = "";
let blackjack = false
let playeralive = false
let player = {
    name:'Clickhead',
    chips: 190
}


const messagedis = document.querySelector('.message-display');
const sumall = document.querySelector('.sum-of-all');
const container = document.querySelector('.container');
const carddis = document.querySelector('.card-dis');
const chipsresult = document.querySelector('.dis-chips');
const playerel = document.querySelector('.player-el')

function randomnumber(){
    let randomnum = Math.floor(Math.random() * 13) + 1;
    if(randomnum === 1){
        return 11
    }
    else if(randomnum > 10){
        return 10;
    }
    return randomnum;
}

function startgame(){
    playeralive = true
    chipsresult.textContent =  player.name +":"+ " " + '$' + player.chips;
    let firstcard = randomnumber();
    let secondcard = randomnumber();
    sumcard = firstcard + secondcard
    cards = [firstcard , secondcard]
    rendergame()
}


function rendergame(){
    sumall.textContent = "Sum:" + " " + sumcard;
    carddis.textContent = "Card: ";


    for (let index = 0; index < cards.length; index++) {
        carddis.textContent += cards[index] + " ";
    }

if(sumcard >= 21){
    message = "You are out of the game"
    messagedis.innerHTML = message
    playeralive = false
    // container.style.background = "black"
}
else if(sumcard === 20){
    message = "You got won blackjack congrats"
    messagedis.innerHTML = message
    blackjack = true
}
else{
    message = "do you want to draw a new card";
    messagedis.innerHTML = message
}
}

function newcard(){
    if(playeralive === true && blackjack === false){
    let newcard = randomnumber();
    sumcard += newcard;
    cards.push(newcard)
    }
    rendergame()   

}
