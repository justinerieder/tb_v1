var ip = location.host;
var socket = io.connect(ip);

$(document).ready(function() {

  socket.emit('setDisplay');
  console.log("hello");

  // tiktikTime();

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
// 139.93, /* 14 fadeWhite*/
// 140.03, /*15 stayWhite*/
// 142.03,
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

//--------------- tik
// var add = [0.15, 0.15, 0.95]
// var start = 66.21;
// var int = 0;
// var actionTimeTik = [];
//
// // function tiktikTime() {
// actionTimeTik.push(start)
//
// for (var i = 0; i < 38; i++) {
//   for (var j = 0; j < 3; j++) {
//     start += add[j];
//     // parseFloat(start).toFixed(2);
//     actionTimeTik.push((start).toFixed(2))
//
//   }
// }
// console.log("actionTimeTik " + actionTimeTik);
// }

// actionTimeTik = [66.21, 66.36, 66.51,
//   67.51, 67.66, 67.81,
//   68.81, 68.96, 69.11]


// var actionTimeTik = [
//   66.21, 66.36, 66.51,
//   67.51, 67.66, 67.81,
//   68.81, 68.96, 69.11
//
// ];
// var actionTimeTik = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]


var actionTimeTik = [66.21, 66.36, 66.51, 67.46, 67.61, 67.76, 68.71, 68.86, 69.01, 69.96, 70.11, 70.26, 71.21, 71.36, 71.51, 72.46, 72.61, 72.76, 73.71,
  73.86, 74.01, 74.96, 75.11, 75.26, 76.21, 76.36, 76.51, 77.46, 77.61, 77.76, 78.71, 78.86, 79.01, 79.96, 80.11, 80.26, 81.21, 81.36, 81.51,
  82.46, 82.61, 82.76, 83.71, 83.86, 84.01, 84.96, 85.11, 85.26, 86.21, 86.36, 86.51, 87.46, 87.61, 87.76,
  88.58, 88.73, 88.88,
  89.77, 89.91, 90.05,
  90.96, 91.10, 91.25,
  92.13, 92.27, 92.41,
  93.19, 93.33, 93.47,
  94.52, 94.64, 94.78,
  95.72, 95.86, 96.00,
  96.89, 96.94, 97.08,
  98.08, 98.22, 98.36,
  99.27, 99.41, 99.55,
  101.65, 101.74, 101.88,
  102.85, 102.99, 103.13,
  104.02, 104.16, 104.30,
  105.08, 105.22, 105.36,
  106.39, 106.53, 106.67,
  107.43, 107.57, 107.71,
  108.62, 108.76, 108.90,
  109.96, 110.1, 110.15,
  111.44, 111.58, 111.72
]

var eventNbTik = 0;
var nextTimeTik = actionTimeTik[eventNbTik];

function timeManagerTik(aTimeTik) {
  if (aTimeTik >= nextTimeTik) {
    // console.log(eventNb + 1);
    socket.emit('animationTik', {
      animationNbTik: (eventNbTik + 1),
    });
    eventNbTik++;
    nextTimeTik = actionTimeTik[eventNbTik]
  }
}

//------------ Balayage


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

//------------- BOOM

var actionTimeBoom = [
  142.20, 142.50,
  144.87, 145.02, 145.18, 145.32, 145.48, 145.61,
/*boum fade*/ 147.25, 147.40, 147.54, 147.99,
/*13*/ 149.64, 149.78, 149.93, 150.08, 150.36, 150.52, 151.11, 151.26,
/*21*/ 154.37, 154.67, 154.97, 155.41, 155.71,
/*25*/ 156.47, 156.61, 156.76, 156.90, 157.05
];
// var actionTimeBoom = [1];
var eventNbBoom = 0;
var nextTimeBoom = actionTimeBoom[eventNbBoom];

function timeManagerBoom(aTimeBoom) {
  if (aTimeBoom >= nextTimeBoom) {
    // console.log(eventNb + 1);
    socket.emit('animationBoom', {
      animationNbBoom: (eventNbBoom + 1),
      playBoom: actionTimeBoom[eventNbBoom],
      stopBoom: actionTimeBoom[eventNbBoom + 1]
    });
    eventNbBoom++;
    nextTimeBoom = actionTimeBoom[eventNbBoom]
  }
}
var actionTimeBreath = [149.55, 150.80, 151.95, 153.11, 154.30, 155.57, 156.88,
  157.91, 159.03, 160.24, 161.47, 162.65, 163.80, 164.96, 166.16, 167.32, 168.54, 169.72,];
var eventNbBreath = 0;
var nextTimeBreath = actionTimeBreath[eventNbBreath];

function timeManagerBreath(aTimeBreath) {
  if (aTimeBreath >= nextTimeBreath) {
    // console.log(eventNb + 1);
    socket.emit('animationBreath', {
      animationNbBreath: (eventNbBreath + 1),
      playBreath: actionTimeBreath[eventNbBreath],
      stopBreath: actionTimeBreath[eventNbBreath + 1]
    });
    eventNbBreath++;
    nextTimeBreath = actionTimeBreath[eventNbBreath]
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
  $('#song').get(0).currentTime = 65;

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
  timeManagerTik(vTime);
  timeManagerBal(vTime);
  timeManagerRandom(vTime);
  timeManagerWave(vTime);
  timeManagerBoom(vTime);
  timeManagerBreath(vTime);

  socket.emit('updateVideo', vTime);

  setTimeout(function() {
    loopVideo();
  }, 10);
}
$('.resetUsers').click(function() {
  socket.emit('resetUser');
})
