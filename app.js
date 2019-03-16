const letterA = document.getElementById('aspan');
const letterB = document.getElementById('bspan');
const letterC = document.getElementById('cspan');
const letterD = document.getElementById('dspan');
const letterE = document.getElementById('espan');
const letterF = document.getElementById('fspan');
const letterG = document.getElementById('gspan');
const letterH = document.getElementById('hspan');
const letterI = document.getElementById('ispan');
const letterJ = document.getElementById('jspan');
const letterK = document.getElementById('kspan');
const letterL = document.getElementById('lspan');
const letterM = document.getElementById('mspan');
const letterN = document.getElementById('nspan');
const letterO = document.getElementById('ospan');
const letterP = document.getElementById('pspan');
const letterQ = document.getElementById('qspan');
const letterR = document.getElementById('rspan');
const letterS = document.getElementById('sspan');
const letterT = document.getElementById('tspan');
const letterU = document.getElementById('uspan');
const letterV = document.getElementById('vspan');
const letterW = document.getElementById('wspan');
const letterX = document.getElementById('xspan');
const letterY = document.getElementById('yspan');
const letterZ = document.getElementById('zspan');
let words = [
    "apple", "kiwi", "orange", "1234567"
];

// Chooses a random word from the array and finds the length
let word = words[Math.floor(Math.random() * words.length)];


// Create Empty Array and fill it with underscores

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

function printArray() {
    document.getElementById('answerArray');
}

printArray();

// Game Loop

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, letter* function executes
letterA.addEventListener('click', function (event) {
  prompt("letterA")
});

letterB.addEventListener('click', function (event) {
    console.log(words);
  });

  letterC.addEventListener('click', function (event) {
    console.log("CCCCCC");
  });
