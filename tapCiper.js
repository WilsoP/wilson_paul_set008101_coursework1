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
    } else {
      outputString += " ";
    }

    document.getElementById('tapCipherOutput').innerHTML = outputString;

    //k = 11

  }
}

function tapCipherDecode() {
  var outputString = [];
  var outputGrid = "";
  var inputString = document.getElementById('tapCipherInput').value;
  var letterValue = 0;
  var taps = ["1,1", "1,2", "1,3", "1,4", "1,5", "2,1", "2,2", "2,3", "2,4", "2,5", "3,1", "3,2", "3,3",
    "3,4", "3,5", "4,1", "4,2", "4,3", "4,4", "4,5", "5,1", "5,2", "5,3", "5,4", "5,5"
  ];

  //beforeCount and afterCount are before and after the "pause" denoted by the comma
  var beforeCount = 0;
  var afterCount = 0
  var counter = 0;
  var searchValue = 0;


  for (var i = 0; i < inputString.length; i++) {
    var current = inputString[i];
    if (current != " ") {
      if (current == ".") {
        counter++;
      } else if (current == "-") {
        afterCount = counter;
        counter = 0;
        searchValue = beforeCount + "," + afterCount;
        console.log(searchValue);
        for (var j = 0; j < taps.length; j ++){
          if (taps[j] == searchValue){
            letterValue = j
            if (letterValue == 2){
              outputString += "c/k";
            }else if(letterValue > 10){
              letterValue ++;
            }
            letterValue = letterValue + 97;
            outputString += String.fromCharCode(letterValue);
            console.log(outputString);

          }
        }
      } else  if (current == "/") {
        beforeCount = counter;
        counter = 0;
      }
    }
  }//for
  document.getElementById('tapCipherOutput').innerHTML = outputString;
}//function
