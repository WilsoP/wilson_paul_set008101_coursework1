function tapCipherEncode() {
  var outputString = [];
  var outputGrid = "";
  var inputString = document.getElementById('tapCipherInput').value;
  var letterValue = 0;
  var taps = ["1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,3",
    "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "5,1", "5,2", "5,3", "5,4", "5,5"
  ];
  ///as this cipher doesnt allow for cases i
  ///have converted the input to only output lower case
  inputString = inputString.toLowerCase();
  for (var i = 0; i < inputString.length; i++) {
    var current = inputString[i];
    if (current != " ") {
      letterValue = inputString.charCodeAt(i);
      if ((letterValue < 123) && (letterValue > 96)) {
        letterValue = letterValue - 97;
        if (letterValue == 10) {
          letterValue = 2;
        } else if (letterValue > 10) {
          letterValue = letterValue - 1;
        }
        outputGrid = taps[letterValue];
        console.log(outputGrid);
        for (var j = 0; j < outputGrid.length; j++) {
          var tapCounter = outputGrid[j]
          if (tapCounter != ",") {
            for (var k = 0; k < tapCounter; k++) {
              outputString += ".";
            }
          } else if (tapCounter == ",") {
            outputString += "/";
          }
        }
        outputString += "-"
      }
    } else if (current == " ") {
      outputString += " ";
    }

    document.getElementById('tapCipherOutput').value = outputString;

    //k = 11

  }
}

function tapCipherDecode() {
  var outputString = [];
  var outputGrid = "";
  var inputString = document.getElementById('tapCipherOutput').value;
  var letterValue = 0;
  var taps = ["1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,3",
    "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "5,1", "5,2", "5,3", "5,4", "5,5"
  ];

  //beforeCount and afterCount are before and after the "pause" denoted by the comma
  var beforeCount = 0;
  var afterCount = 0
  var counter = 0;
  var searchValue = 0;

  //loops through each
  for (var i = 0; i < inputString.length; i++) {
    var current = inputString[i];
    //checks if a not space
    if (current != " ") {
      //if a dot then increase counter by 1
      if (current == ".") {
        counter++;
        /*
         a '/' indicates a pause so change previous
         dots to a variable to count before
        */

      } else if (current == "/") {
        beforeCount = counter;
        counter = 0;
        /*
          a - indicates a new letter in the cipher
          use the before counte and the after counter
          to decide the letter
        */
      } else if (current == "-") {

        afterCount = counter;
        counter = 0;
        //create the grid reference for the new character
        searchValue = beforeCount + "," + afterCount;
        console.log(searchValue);
        /*
          loops through each character in the taps array
          and compares it to the search value made above
        */
        for (var j = 0; j < taps.length; j++) {
          if (taps[j] == searchValue) {
            letterValue = j
            if (letterValue != 2) {
              if (letterValue > 9) {
                letterValue++;
              }
              letterValue = letterValue + 97;
              outputString += String.fromCharCode(letterValue);
              /*
              as the letter c and k are not differenciated
              in this cipher I simply output them as the same thing
              */
            } else if (letterValue == 2) {
              outputString += "c/k";
            }
          } //taps == search value
        } //taps for loop
      } //new letter if
    } else if (current == " ") {
      outputString += " ";
    }

  } //for
  document.getElementById('tapCipherInput').value = outputString;
} //function
