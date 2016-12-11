var input = "vxupkizork-sgmtkzoi-pkrrehkgt-zxgototm-644[kotgr] mbiyqoxsm-pvygob-nocsqx-900[obmqs] veqtekmrk-ikk-hitpscqirx-334[nrtws] gvcskirmg-fyrrc-irkmriivmrk-932[rikmc] xmtjbzidx-xviyt-yzqzgjkhzio-187[yzfeu] bwx-amkzmb-kivlg-kwibqvo-lmaqov-798[bkmva] vcibutulxiom-ohmnuvfy-yaa-mylpcwym-890[iyaun] ajvyjprwp-lqxlxujcn-jwjuhbrb-251[muivb] szfyrqriuflj-avccpsvre-kirzezex-971[rezcf] kwvacumz-ozilm-akidmvomz-pcvb-uizsmbqvo-590[uslyz] ucynmlgxcb-afmamjyrc-jmegqrgaq-626[rybxt] oaxadrgx-pkq-abqdmfuaze-872[xtbnw] tfejldvi-xiruv-tcrjjzwzvu-gcrjkzt-xirjj-tfekrzedvek-971[krmax] pwcvonofrcig-suu-rsgwub-740[baiys] udskkaxawv-tskcwl-dgyaklauk-632[lqcfd] vqr-ugetgv-dcumgv-fgxgnqrogpv-258[ctwyp] laffe-igtje-gtgreyoy-124[uscwl]";
var split = input.split(" ");
var currentLetter, letterCount;
var sum = 0;
var isARoom = false;
var realRooms = [];

split.forEach(function(element) {
  console.log("Checking: " + element);
  var letters = {};
  var regex = new RegExp (/([a-z|-]*)-(\d*)\[([a-z]*)\]/, "g");
  var match = regex.exec(element);
  console.log(typeof match[2]);
  var checksum = match[3];

  //Count letters and their occurrence
  for (var i = 0; i < match[1].length; i++) {
    currentLetter = element[i];
    letterCount = letters[currentLetter];
    if (letterCount === undefined) {
      letters[currentLetter] = 1;
    } else {
      letters[currentLetter]++;
    }
  }
  console.log(letters);

  //Temporary debug function
  function debug (boolean) {
    console.log("Comparing " + checksum[i] + "(" + letters[checksum[i]] + ") with " + checksum[i+1] + "(" + letters[checksum[i+1]]+ ").")
    console.log(boolean);
  }

  //Check checksum
  for (var i = 0; i < checksum.length - 1; i++) {
    if (letters[checksum[i]] === "undefined") {
      isARoom = false;
      break;
    }
    if (letters[checksum[i]] > letters[checksum[i+1]]) {
      isARoom = true;
      debug("> true");
    } else if (letters[checksum[i]] === letters[checksum[i+1]]) {
      if (checksum[i] < checksum[i+1]) {
        debug("> true");
        isARoom = true;
      } else {
        debug("> false");
        isARoom = false;
        break;
      }
    } else {
      debug("> false");
      isARoom = false;
      break;
    }
  }

  if (isARoom) {
    sum += parseInt(match[2]);
    realRooms.push(element);
  }
}); //End slpit.forEach


console.log(realRooms);
console.log("The sum is " + sum + ".");
