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
      letterValue = inputString.charCodeAt(i); {
        //changes lowercase values
        if ((letterValue < 123) && (letterValue > 96)) {
          letterValue = letterValue - 96;
          letterValue = 27 - letterValue;
          letterValue = letterValue + 96;
          current = String.fromCharCode(letterValue);
          outputString += current;
          //changes uppercase values
        } else if ((letterValue < 91) && (letterValue > 64)) {
          letterValue = letterValue - 64;
          letterValue = 27 - letterValue;
          letterValue = letterValue + 64;
          current = String.fromCharCode(letterValue);
          outputString += current;
        }
      }
    } else {
      outputString += current;
    }
  }
  document.getElementById('atBashOutput').innerHTML = outputString;
}
