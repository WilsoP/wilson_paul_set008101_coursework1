/*
caesars Cipher Encode
caesars Cipher works by allowng a user to input a "step" value
then increnting each letter in each wrd by the above value
*/
function caesars() {
  //initialise each variable
  var outputString = [];
  var inputString = document.getElementById('caesarsInputString').value;
  var stepAmount = parseInt(document.getElementById('caesarsStep').value);
  var letterValue = 0;
  //checks the user isnt trying to step too far
  if ((stepAmount > 0) && (stepAmount < 26)) {
    //loop through each charachter input
    for (var i = 0; i < inputString.length; i++) {
      var current = inputString[i];
      //you cant step a space
      if (current != " ") {

        letterValue = inputString.charCodeAt(i);
        //checks if lower case
        if ((letterValue < 123) && (letterValue > 96)) {
          //adds the step amount to the current letter
          letterValue = letterValue + stepAmount;
          //if value is too high then "restart" the alphabet by subtracting 26
          if (letterValue > 122) {
            letterValue = letterValue - 26;
          }
          //add to the output string
          current = String.fromCharCode(letterValue);
          outputString += current;
          //checks if upercase value
        } else if ((letterValue < 91) && (letterValue > 64)) {
          letterValue = letterValue + stepAmount;
          //if value is to high "restart" alphabet again
          if (letterValue > 90) {
            letterValue = letterValue - 26;
          }
          //add to output string
          current = String.fromCharCode(letterValue);
          outputString += current;
        } else {
          //adds any symols ect to the valuee
          outputString += current;
          console.log(current);
        }
      } else {
        outputString += current;
      }

    }
    console.log(outputString);

  }
  document.getElementById('caesarsOutput').innerHTML = outputString;
}



function caesarsDecrypt() {
  //initialise each variable
  var outputString = [];
  var inputString = document.getElementById('caesarsInputString').value;
  var stepAmount = parseInt(document.getElementById('caesarsStep').value);
  var letterValue = 0;
  //checks the user isnt trying to step too far
  if ((stepAmount > 0) && (stepAmount < 26)) {
    //loop through each charachter input
    for (var i = 0; i < inputString.length; i++) {
      var current = inputString[i];
      //you cant step a space
      if (current != " ") {
        /*
        Each letter has a value in JavaScript
        i just have to simply increase the
        number for both capital letters and
        lowercase letters
        */
        letterValue = inputString.charCodeAt(i);
        //checks if lower case
        if ((letterValue < 123) && (letterValue > 96)) {
          //adds the step amount to the current letter
          letterValue = letterValue - stepAmount;
          //if value is too high then "restart" the alphabet by subtracting 26
          if (letterValue < 97) {
            letterValue = letterValue + 26;
          }
          //add to the output string
          current = String.fromCharCode(letterValue);
          outputString += current;
          //checks if upercase value
        } else if ((letterValue < 91) && (letterValue > 64)) {
          letterValue = letterValue - stepAmount;
          //if value is to high "restart" alphabet again
          if (letterValue < 65) {
            letterValue = letterValue + 26;
          }
          //add to output string
          current = String.fromCharCode(letterValue);
          outputString += current;
        } else {
          //adds any symols ect to the valuee
          outputString += current;
          console.log(current);
        }
      } else {
        outputString += current;
      }

    }
    console.log(outputString);

  }
  document.getElementById('caesarsOutput').innerHTML = outputString;
}
