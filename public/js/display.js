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
// var actionTimeWave = [113.98, 122.92, 123, 140.03];

var actionTime = [
  0, /* 1 fadeWhite*/
  18.5, /* 2 fadeBlack*/
  20.8, /* 3 fadeWhite*/
  21, /* 4 fadeBlack*/
  32, /* 5 stayBlack*/
  36, /* 6 fadeWhite*/
  36.53, /* 7 fadeBlack*/
  56.96, /* 8 stayBlack*/
  59.8, /* 9 fadeWhite*/
  60, /* 10 stayWhite*/
  62.3, /* 11 fadeBlack*/
  70, /* 12 stayBlack*/
  113.75, /* 13 stayBlack*/
  139.93, /* 14 fadeWhite*/
  140.03, /*15 stayWhite*/
  142.03,
];
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
  82.73, 82.88,
  /**/
  85.30, 87.41, 87.54, 89.18, 89.34, 90.07, 92.16, 92.31
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
//---------------pulse

// var actionTimePulse = [1, 2, 3, 4, 5, 6, 7, 8];
var actionTimePulse = [
  85.30, 85.76, 86.20,
  87.69, 88.14, 88.58,
  90.07, 90.51, 90.95,
  92.45, 92.88, 93.27

];
var eventNbPulse = 0;
var nextTimePulse = actionTimePulse[eventNbPulse];

function timeManagerPulse(aTimePulse) {
  if (aTimePulse >= nextTimePulse) {
    // console.log(eventNb + 1);
    socket.emit('animationPulse', {
      animationNbPulse: (eventNbPulse + 1),
      playPulse: actionTimePulse[eventNbPulse],
      stopPulse: actionTimePulse[eventNbPulse + 1]
    });
    eventNbPulse++;
    nextTimePulse = actionTimePulse[eventNbPulse]
  }
}


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

//------------------- wave

//113.98 --8.94-- 122.92 --17.11-- 140.03

var actionTimeWave = [113.83, 114, 122.92, 123, 140.03];
// var actionTimeWave = [1, 3, 4, 8];
// var actionTimeWave = [0, 1, 8.94, 9, 26.11];
var eventNbWave = 0;
var nextTimeWave = actionTimeWave[eventNbWave];

function timeManagerWave(aTimeWave) {
  if (aTimeWave >= nextTimeWave) {
    console.log("display wave");
    console.log(eventNbWave + 1);
    socket.emit('animationWave', {
      animationNbWave: (eventNbWave + 1),
      playWave: actionTimeWave[eventNbWave],
      stopWave: actionTimeWave[eventNbWave + 1]
    });
    eventNbWave++;
    nextTimeWave = actionTimeWave[eventNbWave]
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
  $('#song').get(0).currentTime = 60;

  $('#song').get(0).play();

}


var vTime = 0;

function loopVideo() {
  //console.log($('#song').get(0).currentTime);

  vTime = $('#song').get(0).currentTime;
  $('.chrono').html(vTime);
  timeManager(vTime);
  timeManagerResetClick(vTime)
  superTimeManager(vTime);
  timeManagerPulse(vTime);
  timeManagerBal(vTime);
  timeManagerRandom(vTime);
  // timeManagerMoit(vTime);
  timeManagerWave(vTime);

  socket.emit('updateVideo', vTime);

  setTimeout(function() {
    loopVideo();
  }, 10);
}
$('.resetUsers').click(function() {
  socket.emit('resetUser');
})
