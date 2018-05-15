function railfenceEncode() {
  var outputString = [];
  var tempOut = [];
  var tempOutFirst = [];
  var tempOutSecond = [];
  var tempOutThird = [];
  var inputString = document.getElementById('railFenceInput').value;
  inputString = inputString.toUpperCase();
  var letterValue = 0;
  var counter = 0

  for (var i = 0; i < inputString.length; i++) {
    var current = inputString[i];
    console.log("for");
    if (current != " ") {
      letterValue = inputString.charCodeAt(i);
      if ((letterValue < 91) && (letterValue > 64)) {
        counter++
        if (counter == 1) {
          console.log(current);
          console.log(counter);
          tempOutFirst += current;
        }
        if (counter == 2) {
          tempOutSecond += current
        }
        if (counter == 3) {
          tempOutThird += current;
        }
        if (counter == 4) {
          tempOutSecond += current;
          counter = 0;
        }
      }
    }
  }
  tempOut = tempOutFirst + tempOutSecond + tempOutThird;
  document.getElementById('railFenceOutput').value = tempOut;

}

function railfenceDecode() {
  var outputString = [];
  var tempOut = [];
  var tempOutFirst = [];
  var tempOutSecond = [];
  var tempOutThird = [];
  var inputString = document.getElementById('railFenceOutput').value;
  inputString = inputString.toUpperCase();
  var letterValue = 0;
  var counter = 0;
  var firstchar = 0;
  var inputLength = inputString.length;
  console.log(inputLength);

for(var c in inputString){

}


}
