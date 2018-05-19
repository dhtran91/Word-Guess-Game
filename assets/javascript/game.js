
//Variables
var win = 0;
var loss = 0;
var lives = 10;


var guessedLetter;
var guessLetterArr = [];
var word;
var underscoreOfWord = [];


var gamesOfThroneWords = [
    "Ned Stark",
    "Jaime Lannister",
    "Cersei Lannister",
    "Daenerys Targaryen",
    "Jon Snow",
    "Sansa Stark",
    "Arya Stark",
    "Khal Drogo"
];


var gamesOfThroneGame = {
    words:
        [
            "Ned Stark",
            "Jaime Lannister",
            "Cersei Lannister",
            "Daenerys Targaryen",
            "Jon Snow",
            "Sansa Stark",
            "Arya Stark",
            "Khal Drogo"
        ],
    win: 0,
    loss: 0,
    lives: 10,
    guessedLetter: "",
    word: "",
    underscoreOfWord: [],

    selectedWord: function () {
        var rand = Math.floor(Math.random() * (gamesOfThroneWords.length - 1));
        word = gamesOfThroneWords[rand].split("");

        for (var i = 0; i < word.length; i++) {
            if (word[i] !== " ") {
                underscoreOfWord.push("_");

            } else {
                underscoreOfWord.push(" ");
            }
        }
    },

    reset: function () {
        //this.lives = 10;
        lives = 10;
        lifeText.textContent = lives;
        word = gamesOfThroneWords[Math.floor(Math.random() * (gamesOfThroneWords.length - 1))].split("");
        console.log(word);
        underscoreOfWord = [];

        for (var i = 0; i < word.length; i++) {
            if (word[i] !== " ") {
                underscoreOfWord.push("_");

            } else {
                underscoreOfWord.push(" ");
            }
        }

        wordText.textContent = underscoreOfWord.join("\xa0");
        guessedLetterText.textContent = "";
        guessLetterArr = [];
        document.getElementById("play-again").style.visibility = "hidden";

    }

}



//Generating the random word from the word bank
var rand = Math.floor(Math.random() * (gamesOfThroneWords.length - 1));
word = gamesOfThroneWords[rand].split("");
console.log(word);


for (var i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
        underscoreOfWord.push("_");

    } else {
        underscoreOfWord.push(" ");
    }
}

//Grabbing the elements id
var winText = document.getElementById("win");
var lossText = document.getElementById("loss");
var lifeText = document.getElementById("life");
var wordText = document.getElementById("word");
var guessedLetterText = document.getElementById("guessedLetter");

winText.textContent = win;
lossText.textContent = loss;
lifeText.textContent = lives;

wordText.textContent = underscoreOfWord.join("\xa0");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    window.onclick = function (event) {
        if (event.target == document.getElementById("id01"))
        document.getElementById("id01").style.display="none";
    }

document.onkeypress = function (event) {
    //Saving the key that the user pressed as guessed letter so that it can be used later to check in the word


    if (alphabet.indexOf(event.key.toLowerCase(), 0) >= 0) {
        guessedLetter = event.key.toLowerCase();

        if (typeof guessLetterArr === 'undefined') {
            guessLetterArr.push(guessedLetter);
        }
        else if (!guessLetterArr.includes(guessedLetter)) {
            guessLetterArr.push(guessedLetter);
            //Adding the guessed letter to the document
            //NEED TO CHECK IF USER ALREADY PRESSED THE SAME KEY
            guessedLetterText.textContent += guessedLetter + " ";
            x = 0;

            if (lives >= 0) {
                for (var i = 0; i < word.length; i++) {

                    if (word[i].toLowerCase() === guessedLetter) {
                        underscoreOfWord[i] = word[i];
                        wordText.textContent = underscoreOfWord.join("\xa0");
                        // correctWordText.textContent = "";
                        // correctLetterText.textContent = alphabet[rand];
                    } else {
                        x++;
                        if (x === word.length) {
                            lives--;
                            lifeText.textContent = lives;
                        }
                    }

                    if (underscoreOfWord.join() === word.join()) {
                        win++;
                        winText.textContent = win;
                        document.getElementById("play-again").style.visibility = "visible";
                    } else if (lives === 0) {
                        loss++;
                        lossText.textContent = loss;
                        wordText.textContent = word.join(" ");
                        document.getElementById("play-again").style.visibility = "visible";
                        
                    }
                }
            }
        } else {
            alert("You already pressed this key!");
        }
    } else {
        alert("Press an appropiate key!");
    }
}

