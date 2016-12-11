//Goal: Find out new coordinates after going through all the instructions
var input = "L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5";
var arr = input.split(", ");

//Coordinates in the taxicab grid
var p = [0, 0];
var q = [0, 0];
var compass = ["N", "E", "S", "W"];
var currentDirection = 0;

//Kompass: array with 4 directions

//For each of the elements in the input array
for (var i = 0; i < arr.length; i++) {
  //Parse instructions into direction and number of steps
  var direction = arr[i].split("")[0];
  var steps = parseInt(arr[i].slice(1));

  //Turn rabbit into right direction
  //If "L" then currentDirection + 1
  //If "R" then currentDirection -1
  if (direction === "L") {
    currentDirection--;
    currentDirection = (currentDirection + 1000) % 4
  } else {
    currentDirection++;
    currentDirection = (currentDirection + 1000) % 4;
  }
  //console.log("currentDirection is: " + currentDirection + " " + compass[currentDirection]);

  //Move into right direction and number of steps
  if(compass[currentDirection] === "E") {
    q[0] += steps;
  } else if (compass[currentDirection] === "W") {
    q[0] -= steps;
  } else if (compass[currentDirection] === "N") {
    q[1] += steps;
  } else if (compass[currentDirection] === "S") {
    q[1] -= steps;
  }
  console.log("Instruction is: " + arr[i] + " Take " + steps + " steps into " + compass[currentDirection] + " direction");
  console.log("q is now: " + q);
}

//Calc result
var result = Math.abs((p[0] - q[0])) + Math.abs((p[1] - q[1]));
console.log("q is " + q);
console.log("result is " + result);
