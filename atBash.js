/*
atBash Cipher Encode
atBash is a monoalphabetic cipher, which swaps each charcter with the one in its
reverse postions on the alphabet
for example ABC would be ZXY
*/
function atBashEncypt() {
  var outputString = [];
  var inputString = document.getElementById('atBashInput').value;
  var letterValue = 0;

  for (var i = 0; i < inputString.length; i++) {
    var current = inputString[i];
    if (current != " ") {
      letterValue = inputString.charCodeAt(i);
        //changes lowercase values
        if ((letterValue < 123) && (letterValue > 96)) {
          //sets the character to a it's position in the alphabet
          letterValue = letterValue - 96;
          // removes that value from 27 to begin the alphabet from 0
          letterValue = 27 - letterValue;
          //return it to the the needed char code
          letterValue = letterValue + 96;
          current = String.fromCharCode(letterValue);
          outputString += current;
          //changes uppercase values  (same theory as above)
        } else if ((letterValue < 91) && (letterValue > 64)) {
          letterValue = letterValue - 64;
          letterValue = 27 - letterValue;
          letterValue = letterValue + 64;
          current = String.fromCharCode(letterValue);
          outputString += current;
        }else{
          outputString += current;
        }

    } else {
      outputString += current;
    }
  }
  document.getElementById('atBashOutput').value = outputString;
}

function atBashDecode() {
  var outputString = [];
  var inputString = document.getElementById('atBashOutput').value;
  var letterValue = 0;

  for (var i = 0; i < inputString.length; i++) {
    var current = inputString[i];
    if (current != " ") {
      letterValue = inputString.charCodeAt(i); {
        //changes lowercase values
        if ((letterValue < 123) && (letterValue > 96)) {
          //sets the character to a it's position in the alphabet
          letterValue = letterValue - 96;
          // removes that value from 27 to begin the alphabet from 0
          letterValue = 27 - letterValue;
          //return it to the the needed char code
          letterValue = letterValue + 96;
          current = String.fromCharCode(letterValue);
          outputString += current;
          //changes uppercase values  (same theory as above)
        } else if ((letterValue < 91) && (letterValue > 64)) {
          letterValue = letterValue - 64;
          letterValue = 27 - letterValue;
          letterValue = letterValue + 64;
          current = String.fromCharCode(letterValue);
          outputString += current;
        }else{
          outputString += current;
        }
      }
    } else {
      outputString += current;
    }
  }
  document.getElementById('atBashInput').value = outputString;
}
