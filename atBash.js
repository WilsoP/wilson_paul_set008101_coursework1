/*
atBash Cipher Encode
atBash is a monoalphabetic cipher, which swaps each charcter with the one in its
reverse postions on the alphabet
for example ABC would be ZXY
*/
function atBashEncypt(){
var outputString = [];
var inputString = document.getElementById('atBashInput').value;
var letterValue = 0;
console.log(inputString);

for (var i = 0; i < inputString.length; i++){
  var current = inputString[i];
    if (current != " "){
        letterValue = inputString.charCodeAt(i);
        {
          //changes lowercase values
          if ((letterValue < 123) && (letterValue > 96)){
            letterValue = letterValue - 95;
            letterValue = 26 - letterValue;
            current = string.fromCharCode
            outputString += current;
            console.log(outputString);
          }
        }

    }else {
      outputString += current;
    }
}
document.getElementById('atBashOutput').innerHTML = outputString;
}
