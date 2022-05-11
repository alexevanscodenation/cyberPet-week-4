// --------------------- hungerBar class-----------------------------------
class HealthBar {
    constructor(x, y, w, h, maxHealth, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
    }

    show(context) {
        context.lineWidth = 3;
        context.strokeStyle = "white";
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);

    }
    updateHunger(val){
        if(val >= 0){
            this.health = val;
            this.w = (this.health / this.maxHealth * this.maxWidth);
        }
    }
	updateHappiness(val){
        if(val >= 0){
            this.health = val;
            this.w = (this.health / this.maxHealth * this.maxWidth);
        }
    }
	updateThirst(val){
        if(val >= 0){
            this.health = val;
            this.w = (this.health / this.maxHealth * this.maxWidth);
        }
    }
};

//  Canvas's for health bar =======================
const canvas1 = document.querySelector(".canvas1");
const context1 = canvas1.getContext("2d");
const width1 = canvas1.width = 200;
const height1 = canvas1.height = 35;

canvas1.style.marginTop = screenTop.innerHeight / 2 - height1 / 2 + "px";

let hunger = 100;
const healthBarWidth1 = 150;
const healthBarHeight1 = 15;
const x1 = width1 / 2 - healthBarWidth1 / 2;
const y1 = height1 / 2 - healthBarHeight1 / 2;

const canvas2 = document.querySelector(".canvas2");
const context2 = canvas2.getContext("2d");
const width2 = canvas2.width = 200;
const height2 = canvas2.height = 35;

canvas2.style.marginTop = screenTop.innerHeight / 2 - height2 / 2 + "px";

let happiness = 100;
const healthBarWidth2 = 150;
const healthBarHeight2 = 15;
const x2 = width2 / 2 - healthBarWidth2 / 2;
const y2 = height2 / 2 - healthBarHeight2 / 2;

const canvas3 = document.querySelector(".canvas3");
const context3 = canvas3.getContext("2d");
const width3 = canvas3.width = 200;
const height3 = canvas3.height = 35;

canvas3.style.marginTop = screenTop.innerHeight / 2 - height3 / 2 + "px";

let thirst = 100;
const healthBarWidth3 = 150;
const healthBarHeight3 = 15;
const x3 = width3 / 2 - healthBarWidth3 / 2;
const y3 = height3 / 2 - healthBarHeight3 / 2;

// Objects ===========================
const hungerBar = new HealthBar(x1, y1, healthBarWidth1, healthBarHeight1, hunger, "green");
const happinessBar = new HealthBar(x2, y2, healthBarWidth2, healthBarHeight2, happiness, "red");
const thirstBar = new HealthBar(x3, y3, healthBarWidth3, healthBarHeight3, thirst, "blue");


const frameHunger = function() {
	context1.clearRect(0, 0, width1, height1);
	hungerBar.show(context1);
	requestAnimationFrame(frameHunger);
}
const frameHappiness = function() {
	context2.clearRect(0, 0, width2, height2);
	happinessBar.show(context2);
	requestAnimationFrame(frameHappiness);
}
const frameThirst = function() {
	context3.clearRect(0, 0, width3, height3);
	thirstBar.show(context3);
	requestAnimationFrame(frameThirst);
}


let hungerDeath = 0;
let happinessDeath = 0;
let thirstDeath = 0;

function callHungerTimer() {
	const hungerTimer = setInterval(function(){
		if(hunger <= 0){
			hungerDeath = 1;
			hunger = 0;
			hungerBar.updateHunger(hunger);
			statusBanner.textContent = "Your pet is too hungry";
			if (hungerDeath && thirstDeath && happinessDeath === 1){
				statusBanner.textContent = "You did not feed your pet, they have died";
				canvas1.style.display = "none";
				canvas2.style.display = "none";
				canvas3.style.display = "none";
				foodPet.style.display = "none";
				drinkPet.style.display = "none";
				playPet.style.display = "none";
				playAgain.style.display = "";
			} else{
				canvas1.style.display = "";
				canvas2.style.display = "";
				canvas3.style.display = "";
			}
			clearInterval(hungerTimer);
			return;
		} else {
			hungerBar.updateHunger(hunger);
		}
		hunger -= 5;
	}, 3000);
};


function callHappinessTimer() {
	const happinessTimer = setInterval(function(){
		if(happiness <= 0){
			happinessDeath = 1;
			happiness = 0;
			happinessBar.updateHappiness(happiness);
			statusBanner.textContent = "Your cat is so upset, make them happier";
			if (hungerDeath && thirstDeath && happinessDeath === 1){
				statusBanner.textContent = "Your pet died of a broken heart, if only you had looked after them...";
				canvas1.style.display = "none";
				canvas2.style.display = "none";
				canvas3.style.display = "none";
				foodPet.style.display = "none";
				drinkPet.style.display = "none";
				playPet.style.display = "none";
				playAgain.style.display = "";
			} else{
				canvas1.style.display = "";
				canvas2.style.display = "";
				canvas3.style.display = "";
			}
			clearInterval(hungerTimer);
			return;
		} else {
			happinessBar.updateHappiness(happiness);
		}
		happiness -= 5;
	}, 5000);
};

function callThirstTimer() {

    const thirstTimer = setInterval(function(){
		if(thirst <= 0){
			thirstDeath = 1;
			thirst = 0;
			thirstBar.updateThirst(thirst);
			statusBanner.textContent = "Get your cat a drink, it's so thirsty.";
			if (hungerDeath && thirstDeath && happinessDeath === 1){
				statusBanner.textContent = "Your cat died of thirst, you could have saved them";
				canvas1.style.display = "none";
				canvas2.style.display = "none";
				canvas3.style.display = "none";
				foodPet.style.display = "none";
				drinkPet.style.display = "none";
				playPet.style.display = "none";
				playAgain.style.display = "";
			} else{
				canvas1.style.display = "";
				canvas2.style.display = "";
				canvas3.style.display = "";
			}
			clearInterval(hungerTimer);
			return;	
		} else {
			thirstBar.updateThirst(thirst);
		}
		thirst -= 5;
	}, 3000);
};

// -------------------- button timer (2.5s) ----------------
function lockoutButton(button) {
	let oldValue = button.value;

	button.setAttribute('disabled', true);
	setTimeout(function(){
		button.value = oldValue;
		button.removeAttribute('disabled');
		button.style.borderColor = "white";
	}, 3000);
};

// --------------------- roll dice buttons / feed dirnk / play buttons -----------------------------------

const petFood = document.getElementById("foodPet");
const petDrink = document.getElementById("drinkPet");
const petPlay = document.getElementById("playPet");
const statusBanner = document.getElementById("status");


petFood.addEventListener('click', function(){
	let roll = Math.ceil(Math.random() * 6);

	if (roll == 1) {
		lossSound.play();
		statusBanner.textContent = "Your cat has gotten ill, -15 Hunger!";
		lossSound.play();
		hunger -= 15;

	} else if (roll == 2) {
		statusBanner.textContent = "You gave them a large meal, +20 Hunger";
        winSound.play();
		hunger += 20;

	} else if (roll == 3) {
		statusBanner.textContent = "You accidentally fed them out of date food - 30 Hunger";
		lossSound.play();
		hunger -= 30;

	} else if (roll == 4) {
		statusBanner.textContent = "They got a tin of tuna! +10 Hunger";
		winSound.play();
		hunger += 10;
        

	} else if (roll == 5) {
		statusBanner.textContent = "You took your cat out for a meal! +25 Hunger";
		winSound.play();
		hunger += 25;

	} else if (roll == 6) {
		statusBanner.textContent = "You gave your cat a treat, +10 Hunger";
        winSound.play();
		hunger += 10;
	}
	hungerBar.updateHunger(hunger);
	lockoutButton(foodPet);
});

petDrink.addEventListener('click', function(){
	let currentRoll = Math.ceil(Math.random() * 6);

	if (currentRoll == 1) {
		lossSound.play();
		statusBanner.textContent = "You left for work without leaving out water! -20 Thirst";
		thirst -= 20;
		
	} else if (currentRoll == 2) {
		statusBanner.textContent = "Your cat is not very well, -5 thirst";
        winSound.play();
		thirst -= 5;

	} else if (currentRoll == 3) {
		statusBanner.textContent = "They had a lot of water! +20 Thirst";
        winSound.play();
		thirst += 20;
		
	} else if (currentRoll == 4) {
		statusBanner.textContent = "You give them a glass of milk, +10 Thirst";
        winSound.play();
		thirst += 10;

	} else if (currentRoll == 5) {
		statusBanner.textContent = "A neighbour gives your cat a drink! +5 Thirst";
        lossSound.play();
		thirst += 5;

	} else if (currentRoll == 6) {
		statusBanner.textContent = "You're water tank has sprung a leak, no water for you or your cat -0 thirst";
        winSound.play();
		thirst += 0;

	}
	thirstBar.updateThirst(thirst);
	lockoutButton(drinkPet);
});

petPlay.addEventListener('click', function(){
	let currentRoll = Math.ceil(Math.random() * 6);
	
	if (currentRoll == 1) {
		lossSound.play();
		statusBanner.textContent = "A few dogs in the park barked at your cat. -15 Happiness";
		happiness -= 15;

	} else if (currentRoll == 2) {
		statusBanner.textContent = "They are too tired to play +-0 Happiness";
        lossSound.play();
		happiness += 0;

	} else if (currentRoll == 3) {
		statusBanner.textContent = "They meet a friend outside +10 Happiness";
        winSound.play();
		happiness += 10;
		
	} else if (currentRoll == 4) {
		statusBanner.textContent = "They brought a dead animal into the house but you take it away and tell them off -10 Happiness";
		lossSound.play();
		happiness -= 10;

	} else if (currentRoll == 5) {
		statusBanner.textContent = "A friend came over and played with them, +5 Happiness";
        lossSound.play();
		happiness += 5;

	} else if (currentRoll == 6) {
		statusBanner.textContent = "They fell over whilst playing, -5 Happiness";
		lossSound.play();
		happiness -= 5;
	}
	happinessBar.updateHappiness(happiness);
	lockoutButton(playPet);
});

