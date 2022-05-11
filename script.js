// Screen=================================================
const screenBottom = document.getElementById("screenBottom");
const screenMiddle = document.getElementById("screenMiddle");
const screenCenter = document.getElementById("screenCenter");
const leftScreen = document.getElementById("screenLeft");
const screenRight = document.getElementById("screenRight");

// Win/loss sounds=====================================================================
const lossSound = new Audio("./Sounds/lossSoundeffect.mp3");
const winSound = new Audio("./Sounds/winSoundeffect.mp3");

class PetChoice {                         
    constructor(choice, name, home, colour){
        this.choice = choice;
        this.name = name;
        this.home = home;
        this.colour = colour;
    };
    
    introduceSelf (){
        setTimeout( () => {
            statusBanner.textContent = "Welcome to the game 'Kitten Parent'";
        }, 400);
        setTimeout( () => {
            statusBanner.textContent = "Choose your cat.";
        }, 2000);
    }
    firstIntroduction () {
        setTimeout( () => {
            statusBanner.textContent = "Look after your pet!"
        }, 100);
    }
}; 


// ------------------- pet objects ------------------------
const petChoice1 = new PetChoice(1, "Peter", "New York", "Black and White");
petChoice1.introduceSelf() 
const petChoice2 = new PetChoice(2, "Hollie", "London", "Ginger" );
petChoice2.introduceSelf();
const petChoice3 = new PetChoice(3, "Marion", "Paris", "Siamese");
petChoice3.introduceSelf();
// ------------------- pet selection sequence------------------------
const confirmPet1 = document.getElementById("confirmPet1");
const confirmPet2 = document.getElementById("confirmPet2")
const confirmPet3 = document.getElementById("confirmPet3");
const confirmPet = document.getElementById("confirmPet");

confirmPet.style.display = "none";
drinkPet.style.display = "none";
foodPet.style.display = "none";
playPet.style.display = "none";

myChoice = 0;
confirmPet1.addEventListener("click", function(){
    myChoice = 1;
    leftScreen.style.width = "100%";
    leftScreen.style.height = "100%";
    leftScreen.style.border = "none";
    leftScreen.style.backgroundSize = "cover";
    leftScreen.style.backgroundPosition = "bottom";

    statusBanner.textContent = `This is Peter, who lives in New York!`;
    confirmPet.style.display = "";
    confirmPet1.style.display = "none";
    confirmPet2.style.display = "none";
    confirmPet3.style.display = "none";
    screenRight.style.display = "none";
    screenCenter.style.display = "none";
});
confirmPet2.addEventListener("click", function(){
    myChoice = 2;
    screenCenter.style.width = "100%";
    screenCenter.style.height = "100%";
    screenCenter.style.border = "none";
    
    statusBanner.textContent = `This is Hollie, who lives in London!`;
    confirmPet.style.display = "";
    confirmPet1.style.display = "none";
    confirmPet2.style.display = "none";
    confirmPet3.style.display = "none";
    leftScreen.style.display = "none";
    screenRight.style.display = "none";
});
confirmPet3.addEventListener("click", function(){
    myChoice = 3;
    screenRight.style.width = "100%";
    screenRight.style.height = "100%";
    screenRight.style.border = "none";
    screenRight.style.backgroundSize = "cover";
    screenRight.style.backgroundPosition = "bottom";
    statusBanner.textContent = `This is Marion, who lives in Paris!`;
    confirmPet.style.display = "";
    confirmPet1.style.display = "none";
    confirmPet2.style.display = "none";
    confirmPet3.style.display = "none";
    screenCenter.style.display = "none";
    leftScreen.style.display = "none";
});

confirmPet.addEventListener("click", function(){
    statusBanner.textContent = "Look after your pet!";
    if(myChoice === 1){
        confirmPet.style.display = "none";
        frameHunger();
        frameThirst();
        frameHappiness();
        foodPet.style.display = "";
        drinkPet.style.display = "";
        playPet.style.display = "";
        callHungerTimer();
        callHappinessTimer();
        callThirstTimer();
    } else if(myChoice === 2){
        confirmPet.style.display = "none";
        frameHunger();
        frameThirst();
        frameHappiness();
        foodPet.style.display = "";
        drinkPet.style.display = "";
        playPet.style.display = "";
        callHungerTimer();
        callHappinessTimer();
        callThirstTimer();

    } else if(myChoice === 3){
        confirmPet.style.display = "none";
        frameHunger();
        frameThirst();
        frameHappiness();
        foodPet.style.display = "";
        drinkPet.style.display = "";
        playPet.style.display = "";
        callHungerTimer();
        callHappinessTimer();
        callThirstTimer();
        
    }
});