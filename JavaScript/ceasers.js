function Caesers() {
  //initialise each variable
  var outputString = "";
  var inputString = document.getElementById('CaesersInput');
  var stepAmount = document.getElementById('CaesersStep');
  var letterValue = 0;

  //chacks the user isnt trying to step too far
  if ((stepAmount < -26) or(stepAmount > 26)) {
    //loop through each charachter input
    for (var i; i = inputString.lengh; i++) {
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
        if ((letterValue < 123) and(letterValue > 96)) {
            letterValue = letterValue + CaesersStep;

            if(letterValue > 122){
              letterValue = letterValue - 26;
            }
        }else if ((letterValue < 91) and (letterValue > 64)) {
          letterValue = letterValue + CaesersStep;
          if(letterValue > 90){
            letterValue = letterValue - 26;
          }
          current = String.fromCharCode(letterValue);
        }
        output+= current;
      }
      document.getElementById('CaesersOutput').innerHTML = output.join("");
    }


  }



}
