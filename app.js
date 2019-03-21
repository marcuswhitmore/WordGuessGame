
// Win Count
// Lose Count
// Guess Left



let words = [
    "aaaaa", "aaaaaaaa", "aaaa", "aaaaaaaaaaaa"
];

// Chooses a random word from the array and finds the length
let word = words[Math.floor(Math.random() * words.length)];


// Create Empty Array and fill it with underscores

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;



// The game loop
while (remainingLetters > 0) {
    
  // Show the player their progress
  document.getElementById('answerArray').innerHTML = answerArray.join(' ');
  
  // Get a guess from the player
  // var something.onClick will need to be added here
  var guess = prompt("Click a letter, or click Cancel to stop playing.");
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

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, letter* function executes
$('#aspan').on('click', function (e) {
  // script for click to connect to letter A
  console.log("a div a div")
});
/*
//global variable so you can use it with all other letters
var actualLetter;

html: <button onclick="function letterA(<pass value>)" />
js: function letterA (event){
  actualLetter = event.key; //event.keyCode;

}

*/

// removes need for constant at top and links selector to fucntion event
$('#bspan').on('click', function (event) {
    // on click do this
    // compare click/letter selction to randomwordarray
    // fill in spot if correct
    // else say incorrect and increase guess by 1
    //return to game loop?
    console.log("b div click works");
  });

  $('#cspan').on('click', function (event) {
    var number = 100000000 + Math.floor(Math.random() * 900000000)
     // chooos random number

     // make a loop that runs 9 times
     // inside loop make a div with random number inserted
      console.log(number);
    
  });


//   let log = document.getElementById('log');

// document.onclick = inputChange;

// function inputChange(e) {
//   log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
// }