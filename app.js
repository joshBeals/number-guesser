const numberInput = document.querySelector("#numberInput");
const result = document.querySelector("#result");

let randomNumber1 = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 100) + 1;

let count = 0;
let score = 0;

// Guess rand1, score = 10
// Guess rand2, score = 20

function guessTheNumber(){
    console.log("Random Number : " + randomNumber);
    console.log("Our Guess Is : " + numberInput.value);

    count++;

    if(numberInput.value == randomNumber){
        result.textContent = "You guessed right!!! Took " + count + " Attempts!!!";
    }

    if(numberInput.value > randomNumber){
        result.textContent = "Please guess lower!!!";
    }

    if(numberInput.value < randomNumber){
        result.textContent = "Please guess higher!!!";
    }
}
