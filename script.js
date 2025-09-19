const feedBtn = document.getElementById("feed");
const playBtn = document.getElementById("play");
const mood = document.getElementById("mood");
let hunger = 0;
let happiness = 10;


function moodChange() {
    if (hunger > happiness) {
        mood.innerText = "🐱 is unhappy and hungry";
    }
    else {
        mood.innerText = "🐱 is happy!";
    }
}


statement();


setInterval(() => {
    moodChange()
    hungerPlusOne();
    happinessMinusOne();
    statement();
}, 3000)



function statement() {
    console.log(`hunger: ${hunger}  happiness: ${happiness}`)
}

feedBtn.onclick = () => {
    hungerMinusTwo();
    statement();
}

playBtn.onclick = () => {
    happinessPlusTwo();
    statement();
}


function hungerPlusOne() {
    hunger++;
}


function hungerMinusTwo() {
    hunger -= 2;
    if (hunger< 0) {
        hunger = 0;
    }
}


function happinessPlusTwo() {
    happiness += 2;
}


function happinessMinusOne() {
    happiness--
    if (happiness< 0) {
        happiness = 0
    }
}