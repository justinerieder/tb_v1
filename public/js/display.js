var ip = location.host;
var socket = io.connect(ip);

$(document).ready(function() {

  socket.emit('setDisplay');
});

//update the interface to the current step
socket.on('welcome', function(currentStep) {});

$('.play-button').click(function() {

  socket.emit('hideWelcome');
  launchVideo();

});

$('.page-video').click(function() {

  console.log($('#song').get(0).currentTime);
  console.log("staaaart");
});

var actionTime = [0, 18.5, 20.8, 21, 32, 36, 36.53, 56.96, 59.8, 60, 62.3, 70, /*reste noir*/ 113.75, /*fade blanc*/ 113.95, /*rest blanc*/ 115.95, 139.98, 142.22];
var eventNb = 0;
var nextTime = actionTime[eventNb];

function timeManager(aTime) {
  if (aTime >= nextTime) {
    // console.log(eventNb + 1);
    socket.emit('animation', {
      animationNb: (eventNb + 1),
      play: actionTime[eventNb],
      stop: actionTime[eventNb + 1]
    });
    eventNb++;
    nextTime = actionTime[eventNb]
  }
}

var actionTimeResetClick = [70.30]
var eventNbResetClick = 0;
var nextTimeResetClick = actionTimeResetClick[eventNbResetClick];

function timeManagerResetClick(aTimeResetClick) {
  if (aTimeResetClick >= nextTimeResetClick) {
    // console.log(eventNb + 1);
    socket.emit('animationResetClick', {
      animationNbResetClick: (eventNbResetClick + 1),
      playResetClick: actionTimeResetClick[eventNbResetClick],
      stopResetClick: actionTimeResetClick[eventNbResetClick + 1]
    });
    eventNbResetClick++;
    nextTimeResetClick = actionTimeResetClick[eventNbResetClick]
  }
}


// var actionTimeWord = [0, 5, 10, 15, 20, 25, 30, 35, 40]
var actionTimeWord = [3.87, 13.64, 21.07, 31.14, 36.53, 47, 52, 56.5, 85.32, 90.06, 158.20, 162.97, 167.95]

var eventNbWord = 0;
var nextTimeWord = actionTimeWord[eventNbWord];

var phrase = 'Hi and welcome to the "dynamic_circle" experience _ you are the authors of this moment _ Dynamic_circle can not exist without your participation _'
var mot = phrase.split(" ");
console.log("mot " + mot[2]);


function timeManagerWord(aTimeWord) {
  if (aTimeWord >= nextTimeWord) {
    console.log((eventNbWord + 1) + actionTimeWord[eventNbWord]);
    socket.emit('animationWord', {
      animationNbWord: (eventNbWord + 1),
      playWord: actionTimeWord[eventNbWord],
      stopWord: actionTimeWord[eventNbWord + 1],
      theWord: mot[eventNbWord]
    });
    eventNbWord++;
    nextTimeWord = actionTimeWord[eventNbWord]
  }
}

// var actionTimeWordRemove = [4, 9, 14, 19, 24, 29, 34, 39]
var actionTimeWordRemove = [9.23, 18.85, 27.19, 34, 40.50, 50.90, 55.67, 60.31, 88, 92.8, 162.07, 166.71, 170.84]
var eventNbWordRemove = 0;
var nextTimeWordRemove = actionTimeWordRemove[eventNbWordRemove];


function timeManagerWordRemove(aTimeWordRemove) {
  if (aTimeWordRemove >= nextTimeWordRemove) {
    console.log("remover " + eventNbWordRemove + 1);
    socket.emit('animationWordRemove', {
      animationNbWordRemove: (eventNbWordRemove + 1),
      playWordRemove: actionTimeWordRemove[eventNbWordRemove],
      stopWordRemove: actionTimeWordRemove[eventNbWordRemove + 1],
    });
    eventNbWordRemove++;
    nextTimeWordRemove = actionTimeWordRemove[eventNbWordRemove]
  }
}


var superActionTime = [
  29.80, 30.70,
  31.78, 33.00,
  35.24, 35.50,
  35.52, 35.70,
  39.80, 40.50,
  42.12, 43.23,
  /*13*/ 47.66, 47.87, 47.90, 48.04, 48.37, 48.54, 48.65, 48.88, 49.00, 49.20, 49.60,
  /*24*/ 50.90, /*kate*/
  50.95, 51.89,
  54.44, 55.75,
  57.88, 59.08,
  /*31*/ 61.28, 62.41,

]

var superEventNb = 0;
var superNextTime = superActionTime[superEventNb];

function superTimeManager(bTime) {
  if (bTime >= superNextTime) {
    console.log(superEventNb + 1);
    socket.emit('superAnimation', {
      superAnimationNb: (superEventNb + 1),
      superPlay: superActionTime[superEventNb],
      superStop: superActionTime[superEventNb + 1]
    });
    superEventNb++;
    superNextTime = superActionTime[superEventNb]
  }
}




//_________ TIBOR

// var animFuncs = {
//   5.5: "tiktik1",
//   7.5: "tiktik1"
// };
//
// const superActionTime = Object.keys(driversCounter)
//
// var superEventNb = 0;
// var superNextTime = superActionTime[superEventNb];
//
//
// function superTimeManager(bTime) {
//   if (bTime >= superNextTime) {
//     console.log(superEventNb + 1);
//     // socket.emit('superAnimation', {
//     //   superAnimationNb: (superEventNb + 1),
//     //   superPlay: superActionTime[superEventNb],
//     //   superStop: superActionTime[superEventNb + 1]
//     // });
//     console.log(animFuncs.bTime);
//     var s = animFuncs[superEventNb + 1]
//     socket.emit('exec', {
//       superAnimationNb: animFuncs[superEventNb + 1],
//       superPlay: superActionTime[superEventNb],
//       superStop: superActionTime[superEventNb + 1]
//     })
//     superEventNb++;
//     superNextTime = superActionTime[superEventNb]
//   }
// }



var actionTimeRandom = [70.47, 70.63, 70.92, 71.08, 71.24, 71.39,
  75.49, 75.64, 75.80, 75.96, 76.12, 76.27, 76.42,
  80.45, 80.60, 80.76, 80.91, 81.06, 81.21, 81.37,
  82.73, 82.88
]
// var actionTimeRandom = [70.50, 70.70, 71.02, 71.18, 71.35, 71.30, /**/
//   75.56, 75.72, 75.88, 76.04, 76.20, 76.36, /*76.50*/ /**/
//   80.50, 80.68, 80.83, 80.99, 81.16, 81.32, /*81.47*/ /**/
//   82.80, 82.97];
var eventNbRandom = 0;
var nextTimeRandom = actionTimeRandom[eventNbRandom];

function timeManagerRandom(randomTime) {
  if (randomTime >= nextTimeRandom) {
    // console.log(eventNbRandom + 1);
    socket.emit('animationRandom', {
      animationNbRandom: (eventNbRandom + 1),
      playRandom: actionTimeRandom[eventNbRandom],
      stopRandom: actionTimeRandom[eventNbRandom + 1]
    });
    eventNbRandom++;
    nextTimeRandom = actionTimeRandom[eventNbRandom]
  }
}

/*
94.953743
97.361962
99.706064
102.041511
104.401793
106.800946
109.17763
111.553509
113.937574
*/

var actionTimeMoit = [1];
var eventNbMoit = 0;
var nextTimeMoit = actionTimeMoit[eventNbMoit];

function timeManagerMoit(moitTime) {
  if (moitTime >= nextTimeMoit) {
    console.log("hello moit " + eventNbMoit + 1);
    socket.emit('animationMoit', {
      animationNbMoit: (eventNbMoit + 1),
      playMoit: actionTimeMoit[eventNbMoit],
      stopMoit: actionTimeMoit[eventNbMoit + 1]
    });
    eventNbMoit++;
    nextTimeMoit = actionTimeMoit[eventNbMoit]
  }
}

// var actionTimeBal = [
//   /*1*/ 94.90, /*90*/ 95.85, /*141*/
//   /*3*/ 97.30, /*85*/ 98.26, /*152*/
//   /*5*/ 99.69, /*87*/ 100.60, /*150*/
//   /*7*/ 102.05, /* 88*/ 102.94, /*163*/
//   104.43, 105.33,
//   /*9*/ 106.76, /*97*/ 107.70, /*137*/
//   /*11*/ 109.18, /*82*/ 110.07, /*155*/
//   /*12*/ 111.55, /*82*/ 112.45, /*159*/
//
// ];
var actionTimeBal = [
  94.82, 96.05,
  97.20, 98.40,
  99.58, 100.78,
  101.96, 103.18,
  104.33, 105.52,
  106.71, 107.88,
  109.09, 110.29,
  111.46, 112.66
]
var eventNbBal = 0;
var nextTimeBal = actionTimeBal[eventNbBal];

function timeManagerBal(balTime) {
  if (balTime >= nextTimeBal) {
    // console.log(eventNbBal + 1);
    socket.emit('animationBal', {
      animationNbBal: (eventNbBal + 1),
      playBal: actionTimeBal[eventNbBal],
      stopBal: actionTimeBal[eventNbBal + 1]
    });
    eventNbBal++;
    nextTimeBal = actionTimeBal[eventNbBal]
  }
}

function launchVideo() {

  $('.play-button').css({
    'display': 'none'
  });

  // $('#vid').css({
  //   'display': 'none'
  // });

  // $('#vid').get(0).play();
  $('#song').get(0).play();
  loopVideo();
}
function go() {
  $('#song').get(0).currentTime = 49;

  $('#song').get(0).play();

}


var vTime = 0;

function loopVideo() {
  //console.log($('#song').get(0).currentTime);

  vTime = $('#song').get(0).currentTime;
  $('.chrono').html(vTime);
  timeManager(vTime);
  timeManagerResetClick(vTime)
  timeManagerWord(vTime);
  timeManagerWordRemove(vTime);
  superTimeManager(vTime);
  // timeManagerDrum(vTime);
  timeManagerBal(vTime);
  timeManagerRandom(vTime);
  timeManagerMoit(vTime);

  socket.emit('updateVideo', vTime);

  setTimeout(function() {
    loopVideo();
  }, 10);
}
$('.resetUsers').click(function() {
  socket.emit('resetUser');
})
