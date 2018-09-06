    // Creates an array that lists out all of the options (A-Z).
    var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // Creating variables to hold the number of wins and losses. They start at 0.
    var wins = 0;
    var losses = 0;
    // Create an array for previous user guesses
    var prevUserGuess = [];
    // create the array to keep track of the computers guess
    var computerGuess =[];
    // Create the variable for guesses, the user starts with 10.
    var guessesLeft = 9;

    // When the document is ready to go, start the game with the computers guess
    document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	  computerGuess.push(compGuess);
    });
    
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      // pushes the info into the prevUserGuess array
      prevUserGuess.push(userGuess);


      if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
	      wins++;
	      guessesLeft = 9;
	      lettersGuessed.length = 0;
	      computerGuess.length = 0;
	      var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	      computerGuess.push(compGuess);
	 
      }

      else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	      guessesLeft = guessesLeft-1;
      }

      else {
	      losses++;
  	    guessesLeft = 9;
	      lettersGuessed.length = 0;
	      computerGuess.length = 0;
	      var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	      computerGuess.push(compGuess);
	      console.log(computerGuess[0]);
      }

      var update = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
      document.querySelector(".game").innerHTML = update;
  
    
    };

 