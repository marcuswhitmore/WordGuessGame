// "Variable that chooses a random word from the array"
var words = [
    "apple",
    "orange",
    "kiwi",
    "mango",
];

// Chooses a random word from the array and finds the length
var word = words[Math.floor(Math.random() * words.length)];

// Create Empty Array and fill it with underscores

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

// The game loop
while (remainingLetters > 0) {
    
    // Show the player their progress
    alert(answerArray.join(" "));
    
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
    }
    }
    }
 
    // The end of the game loop
    }
    // Show the answer and congratulate the player
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
  

    // function keyListener(event){ 
    //     //whatever we want to do goes in this block
    //     event = event || window.event; //capture the event, and ensure we have an event
    //     var key = event.key || event.which || event.keyCode; //find the key that was pressed
    //     //MDN is better at this: https://developer.mozilla.org/en-US/docs/DOM/event.which
    //     if(key===84){ //this is for 'T'
    //         doThing();
    //     }
    //   }