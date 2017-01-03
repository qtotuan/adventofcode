var input = "(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN";
var arr = input.split("");

function parseMarker (array, index) {
  var toggle = "char";
  var char = "";
  var reps = "";
  for (var i = index + 1; i < array.length; i++) {
    if (array[i] === "x") {
        toggle = "reps";
      }
    if (array[i] === ")") {
      return {
        "char": parseInt(char),
        "reps": parseInt(reps),
        "length": char.length + reps.length + 3
      }
    }
    if (toggle === "char") {
      char += (array[i]);
    } else if (toggle === "reps" && array[i] !== "x") {
      reps += (array[i]);
    }
  } //end loop
}

function checkForMarkers (arr) {
  var containsMarkers = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        containsMarkers = true;
        break;
      }
    }
  return containsMarkers;
}

function mainProgram (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== "(" && arr[i] !==")") {
      newArr.push(arr[i]);
    } else if (arr[i] === "(") {

      var marker = parseMarker(arr, i);
      console.log(marker);
      var temp = [];

      for (var j = i + marker.length; j < i + marker.length + marker.char; j++) {
        /*
        if (j >= arr.length) {
          break;
        }
        */
        temp += arr[j];
      }

      for (var j = 0; j < marker.reps; j++) {
        newArr.push(temp);
      }

      i += marker.length + temp.length - 1;

    }
  }
  //console.log(newArr.join("").split(""));

  return newArr.join("").split("");
}

//*** Main Program ***//
var newArr = mainProgram(arr);
console.log(newArr);
var containsMarkers = checkForMarkers(newArr);
while (containsMarkers) {
  newArr = mainProgram(newArr);
  console.log(newArr);
  containsMarkers = checkForMarkers(newArr);
}

console.log("The length of the string is " + newArr.length);
