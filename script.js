//Переменные

let coins = 0;
let score = 0;
let totalScore = 10000;
let factor = 2;
let cost1 = 150;
let cost2 = 1000;
let cost3 = 10000;
let cost4 = 10000;
let costText1 = document.querySelector('.cost1');
let costText2 = document.querySelector('.cost2');
let costText3 = document.querySelector('.cost3');
let costText4 = document.querySelector('.cost4');
let autoClick = 0;
let lvN = 0;
let scoreN = document.querySelector('.lv-n');
let scoreLvUpgrade = false;
let isReady = false;

let money = document.querySelector('.money-quan');
const button = document.querySelector('.hamster-img');
const modalShop = document.querySelector('.shop-modal');
const closeShop = document.querySelector('.close-shop');
const openShop = document.querySelector('.nav-1');
const buy1 = document.querySelector('.buy1');
const buy2 = document.querySelector('.buy2');
const buy3 = document.querySelector('.buy3');
const buy4 = document.querySelector('.buy4');
const overlay = document.querySelector('.overlay');
const scoreLine = document.querySelector('.score');



//Сам код
button.onclick = function() {
    coins+=factor;
    score+=factor;
    updateCoins();
    scoreUpdate();
    lvTotalUpgrade();
    RandomClickActive();
    saveMoney();
};

window.onload = function() {
    loadData();
};

function loadData() {
    if (localStorage.getItem('coins')) {
        coins = parseInt(localStorage.getItem('coins'));
    }
    if (localStorage.getItem('score')) {
        score = parseInt(localStorage.getItem('score'));
    }
    updateCoins(); 
}

function saveData() {
    localStorage.setItem('coins', coins);
    localStorage.setItem('score', score);
}

function scoreUpdate() {
    const progressPercentage = (score / totalScore) * 100;
    scoreLine.style.width = progressPercentage + '%';
    if (score >= totalScore) {
        score = 0;
        scoreLine.style.width = '0%';
        lvN +=1
    };
    scoreN.innerHTML = lvN;
};

function lvTotalUpgrade() {
    if (lvN >=10 && !scoreLvUpgrade) {
        button.src = 'img/hamsterLv2.png'
        totalScore *=5;
        scoreLvUpgrade = true;
    }
}

function RandomClickActive() {
    if (isReady) {
        RandomClick(1,100)
    }
}

function RandomClick(min,max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber == 1) {
        let multy = factor*100;
        coins+=multy;
        score+=multy;
    }
}


buy1.onclick = function() {
    if(coins>=cost1) {
        coins -= cost1;
        factor*=2;
        cost1*=3;
        updateCoins();
    } else {
        alert('Недостаточно средств');
    }
}

buy2.onclick = function() {
    if(coins>=cost2) {
        coins -=cost2;
        autoClick+=2;
        updateCoins();
    } else {
        alert('Недостаточно средств');
    }
}

buy3.onclick = function() {
    if(coins>=cost3) {
        coins -=cost3;
        autoClick+=20;
        updateCoins();
    } else {
        alert('Недостаточно средств');
    }
}

buy4.onclick = function() {
    if(coins>=cost4) {
        coins -=cost4;
        isReady = true;
        updateCoins();
        buy4.innerHTML = 'Куплено';
        buy4.style.backgroundColor = '#39304f'
    } else {
        alert('Недостаточно средств');
    }
}



function updateCoins() {
    money.innerHTML = coins;
    costText1.innerHTML = cost1;
    costText2.innerHTML = cost2;
    costText3.innerHTML = cost3;
}

openShop.onclick = function() {
    modalShop.style.display = 'flex';
    overlay.style.display = 'block';
}

closeShop.onclick = function() {
    modalShop.style.display = 'none';
    overlay.style.display = 'none';
}

overlay.onclick = function() {
    modalShop.style.display = 'none';
    overlay.style.display = 'none';
}

setInterval(() => {
    coins += autoClick;
    score += autoClick;
    updateCoins();
    saveData(); 
}, 600);