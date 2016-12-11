//Goal: Find out new coordinates after going through all the instructions
var input = "L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5";
var arr = input.split(", ");

//Coordinates in the taxicab grid
var p = [0, 0];
var q = [0, 0];
var compass = ["N", "E", "S", "W"];
var currentDirection = 0;
var places = new Set();
var solved = false;

var increase = function (x, i) {
  x[i]++;
};

var decrease = function (x, i) {
  x[i]--;
};

var moveRabbit = function (index, length, callback) {
  for (var j = 1; j <= length; j++) {
    var move = q.slice();
    callback(move, index);
    if (places.has(move.toString())) {
      console.log("You have found HQ. It is at " + move);
      solved = true;
      break;
    } else {
      places.add(move.toString());
      callback(q, index);
    }
  }
};

//For each of the elements in the input array
for (var i = 0; i < arr.length; i++) {
  //Parse instructions into direction and number of steps
  var direction = arr[i].split("")[0];
  var steps = parseInt(arr[i].slice(1));

  //Find out right direction on compass
  if (direction === "L") {
    currentDirection = (currentDirection + 3) % 4;
  } else {
    currentDirection = (currentDirection + 5) % 4;
  }

  //Move into right direction and number of steps
  if(compass[currentDirection] === "E") {
    moveRabbit(0, steps, increase);
  } else if (compass[currentDirection] === "W") {
    moveRabbit(0, steps, decrease);
  } else if (compass[currentDirection] === "N") {
    moveRabbit(1, steps, increase);
  } else if (compass[currentDirection] === "S") {
    moveRabbit(1, steps, decrease);
  }

  if (solved) {
    break;
  }

  for (let item of places) console.log(item);
}
