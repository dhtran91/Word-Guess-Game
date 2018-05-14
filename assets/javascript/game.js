
    //Variables
    var win = 0;
    var loss = 0;
    var lives = 10;


    var guessedLetter;
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
        
        selectedWord: function() {
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

        reset: function() {
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
    


    document.onkeypress = function (event) {
        //Saving the key that the user pressed as guessed letter so that it can be used later to check in the word
        guessedLetter = event.key.toLowerCase();
        
        //Adding the guessed letter to the document
        //NEED TO CHECK IF USER ALREADY PRESSED THE SAME KEY
        guessedLetterText.textContent += guessedLetter + " ";
        x=0;

        if (lives >= 0) {
            for (var i = 0; i < word.length; i++) {
                
                if (word[i].toLowerCase() === guessedLetter) {
                underscoreOfWord[i] = word[i];
                wordText.textContent = underscoreOfWord.join("\xa0");
                // correctWordText.textContent = "";
                // correctLetterText.textContent = alphabet[rand];
                } else {
                    x++;
                    if (x === word.length){
                    lives--;
                    lifeText.textContent = lives;
                    }
                }
            }
        } 
        
        if (lives === 0) {
            loss++;
            lossText.textContent = loss;
            wordText.textContent = word.join(" ");
            gamesOfThroneGame.reset();
        }
    

    
    if (underscoreOfWord.join() === word.join()) {
        alert("YOU WIN!");
        win++;
        winText.textContent = win;
        gamesOfThroneGame.reset();
        
    }

    }