const valueHistory = [];
let guess = Math.floor(Math.random() * 100 + 1);
let counter = 0;

document.querySelector("#reset").onclick = function() {
    guess = Math.floor(Math.random() * 100 + 1);
    counter = 0;
    document.querySelector("#textToOutput").innerHTML = "Reset initiated! Lives back to 10 in new retry";
}

document.querySelector("#Submit_guess").onclick = function () {
    let number = document.querySelector("#numberInput").value;
    if (number < 0 || number > 100) {
        document.querySelector("#textToOutput").innerHTML = "Choose a valid number";
    }
    for (let i = 0; i < valueHistory.length; i++) {
        if (valueHistory[i] == number) {
            document.querySelector("#textToOutput").innerHTML = "That number was already chosen";
            return;
        }
    }
    valueHistory.push(number);
    counter++;
    if (number < guess) {
        document.querySelector("#textToOutput").innerHTML = "The number is too low. Try something greater. Lives remaining: " + (10 - counter);
    } else if (number > guess) {
        document.querySelector("#textToOutput").innerHTML = "The number is too high. Try something lower. Lives remaining: " + (10 - counter);
    } else if (number == guess) {
        document.querySelector("#textToOutput").innerHTML = "Congratulations! You managed to guess the number right in " + counter + " guesses!";
    } 
    if (counter == 10) {
        document.querySelector("#textToOutput").innerHTML = "You have run out of lives. Click reset to try again."
    }
}

