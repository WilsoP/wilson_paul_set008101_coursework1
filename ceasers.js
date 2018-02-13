function Caesers() {
  //initialise each variable
  var outputString = "";
  var inputString = document.getElementById('CaesersInputString').value;
  var stepAmount = parseInt(document.getElementById('CaesersStep').value);
  var letterValue = 0;
  console.log(inputString);
  console.log(stepAmount);
  //chacks the user isnt trying to step too far
  if ((stepAmount > 0) && (stepAmount < 26)) {
    //loop through each charachter input
    console.log("IfStatement");
    for (var i = 0; i < inputString.length; i++) {
      var current = inputString[i];
      console.log(current);
      //you cant step a space
      if (current != " ") {
        /*
        Each letter has a value in JavaScript
        i just have to simply increase the
        number for both capital letters and
        lowercase letters
        */
        letterValue = inputString.charCodeAt(i);
        console.log(letterValue);
        //checks if lower case
        if ((letterValue < 123) && (letterValue > 96)) {
          letterValue = +stepAmount;
          console.log(letterValue);

          if (letterValue > 122) {
            letterValue = -26;
          }
        } else if ((letterValue < 91) && (letterValue > 64)) {
          letterValue = letterValue + CaesersStep;
          console.log(letterValue);
          if (letterValue > 90) {
            letterValue = -26;
          }
          current = String.fromCharCode(letterValue);
          outputString += current;
        }
        console.log(outputString);
      } else {
        output += current;
      }
      console.log(outputString);
      document.getElementById('CaesersOutput').innerHTML = outputString.join("");
    }


  }


}
