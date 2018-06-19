/*début non. suelement a partir des glitch (30sec) jusqu'à 85 non pdt balayage, non pdt wave. oui sur la fin (après balayage*/


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
  // 1, 4, 8, 9, 12, 16, 20, 25

  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
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
  // 113.75, /* 13 stayBlack*/
  141.20, /*13 fadeWhite*/
  141.97, /*14 fadeBalck*/
  142.41, /*15 fadeWhite*/
  143.21, /*16 fadeB*/
  143.60, /*17 fadeW*/
  144.32, /*18 fabrB*/
  144.79,
  145.53,
  145.95,
  146.85, /* fadeB*/
  147.20,
  147.99,
  148.34,
  149.18,
  149.53,
  150.36,
  150.74, /*le dernier !*/
  151.50, /*30*/
  151.89,
  152.92,
  153.16,
  154.00,
  154.24,
  155.08,
  155.50,
  156.24,
  156.63,
  157.50, /*40*/
  157.81,
  158.73,
  159.00,
  159.88,
  160.18,
  161.01,
  161.42,
  162.36,
  162.58,
  163.52, /*50*/
  163.76,
  164.67,
  164.96,
  165.87,
  166.15,
  167.00,
  167.33,
  168.16,
  168.52,
  169.49, /*60*/
  169.71,
  170.79,
  /*le dernier plus 34*/ 170.94

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


var superActionTime = [
  29.80, 30.70,
  31.78, 33.00,
  35.24, 35.50,
  35.52, 35.70,
  39.80, 40.50,
  42.12, 43.23,
  /*13*/ 47.66, 47.87, 47.90, 48.04, 48.37, 48.54, 48.65, 48.88, 49.00, 49.20, 49.60,
  /*24*/ 50.50, /*kate*/
  50.78, 52.06,
  54.17, 55.44,
  57.60, 58.88,
  /*31*/ 61.06,
  62.17, 62.30,
  62.35, 62.45,
  62.51, 62.60,
  /*38*/ 62.67,
  63.14,
  64.46,
  65.14,
  66.57,
/*43*/ 67.09,
/*44*/ 67.86,
/*pendant balayage !*/
// /*45*/ 96.13, 96.30, /*stop*/ 96.45,
// /*48*/ 98.54, 98.67, 98.82, 98.97, /*stop*/ 99.12,
// /*53*/ 100.91, 101.05, 101.19, 101.34, 101.49, /*stop*/ 101.65,
// /*59*/ 103.29, 103.42, 103.57, 103.70, /*stop*/ 103.85,
// /*64*/ 105.80, 105.94, 106.09, 106.24, 106.39, 106.53, /*stop*/ 106.68,
// /*71*/ 107.73, 107.87, 108.01, 108.16, 108.32, 108.47, 108.61, 108.76, 108.92, /*stop*/ 109.07,
// /*81*/ 110.10, 110.25, 110.39, 110.54, 110.69, 110.84, 110.99, 111.13, /*stop*/ 111.30,
// /*90*/ 112.48, 112.63, 112.79, 112.92, 113.06, 112.22, /*stop*/ 112.37,
/*pendant pulse*/
/*97*/
// 146.37, 149.63, 150.08, 150.52, 153.04, 154.67, 154.98, 155.41, 155.71, 156.76, 156.90, 158.24, 158.42, 159.28, /*stop*/ 160.19
]

// var actionTimeBoom = [
//   142.20, 142.50,
//   144.87, 145.02, 145.18, 145.32, 145.48, 145.61,
// /*boum fade*/ 147.25, 147.40, 147.54, 147.99,
// /*13*/ 149.64, 149.78, 149.93, 150.08, 150.36, 150.52, 151.11, 151.26,
// /*21*/ 154.37, 154.67, 154.97, 155.41, 155.71,
// /*25*/ 156.47, 156.61, 156.76, 156.90, 157.05
// ];

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


var actionTimeRandom = [70.47, 70.63, 70.92, 71.08, 71.24, 71.39,
  75.49, 75.64, 75.80, 75.96, 76.12, 76.27, 76.42,
  80.45, 80.60, 80.76, 80.91, 81.06, 81.21, 81.37,
  82.73, 82.88,
  /**/
  85.30, 86.27, 87.41, 87.54, 89.18, 89.34, 90.07, 92.16, 92.31
]
// var actionTimeRandom = [ /*1, 2, 3, 4, 5,*/ 6, 7, 8, 9, 10, 11, 12, 13, 14];
var eventNbRandom = 0;
var nextTimeRandom = actionTimeRandom[eventNbRandom];

function timeManagerRandom(randomTime) {
  if (randomTime >= nextTimeRandom) {
    // console.log(eventNbRandom + 1);
    socket.emit('animationRandom', {
      animationNbRandom: (eventNbRandom + 1),
      nbUsers: 0
    });
    eventNbRandom++;
    nextTimeRandom = actionTimeRandom[eventNbRandom]
  }
}

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

//----------------- tik
var actionTimeTik = [
  66.21, 66.36, 66.51, 67.46, 67.61, 67.76, 68.71, 68.86, 69.01, 69.96,
  70.11, 70.26, 71.21, 71.36, 71.51, 72.46, 72.61, 72.76, 73.71, 73.86,
  74.01, 74.96, 75.11, 75.26, 76.21, 76.36, 76.51, 77.46, 77.61, 77.76,
  78.71, 78.86, 79.01, 79.96, 80.11, 80.26, 81.21, 81.36, 81.51, 82.46,
  82.61, 82.76, 83.71, 83.86, 84.01, 84.96, 85.11, 85.26, 86.21,

  /*changé ? 51---*/ 86.36, 86.51, 87.46, 87.61, 87.76,
  88.58, 88.73, 88.88,
  89.77, 89.91, 90.05,
  90.96, 91.10, 91.25,
  92.13, 92.27, 92.41,
  93.19, 93.33, 93.47
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


// var actionTimeBalBefore = [
//   94.81, 95.79,
//   97.18, 98.15,
//   99.57, 100.52,
//   101.94, 102.90,
//   104.33, 105.28,
//   /*6*/ 106.69, 107.66,
//   107.69, 109.06,
//   109.07, 110.08,
//   110.10, 111.13,
//   111.15, 112.40,
//   112.45, 153.81
// ]
// var actionTimeBal = [];
// for (var i = 0; i < actionTimeBalBefore.length; i++) {
//   var newTime = actionTimeBalBefore[i] - 94;
//   // parseFloat(newTime).toFixed(2);
//   actionTimeBal.push(newTime)
// }
// console.log(actionTimeBal);

var actionTimeBal = [
  94.79, 95.72,
  97.22, 98.12,
  99.59, 100.48,
  102.00, 102.86,
  104.33, 105.21,

  106.69, 108.04,
  108.04, 109.06,
  109.06, 110.27,
  110.27, 111.44,
  111.44, 112.81,
  112.81, 113.79
]

var eventNbBal = 0;
var nextTimeBal = actionTimeBal[eventNbBal];

function timeManagerBal(balTime) {
  if (balTime >= nextTimeBal) {
    console.log(eventNbBal + 1);
    socket.emit('animationBal', {
      animationNbBal: (eventNbBal + 1),
      playBal: actionTimeBal[eventNbBal],
      stopBal: actionTimeBal[eventNbBal + 1]
    });
    eventNbBal++;
    nextTimeBal = actionTimeBal[eventNbBal]
  }
}

// ------------------- return


var actionTimeReturn = [
// 1, 1.5,
// 2, 2.5, 3, 3.5,
// 4, 4.5, 5, 5.5, 6,
// 6.5, 7, 7.5, 8,
// 8.5, 9, 9.5, 10, 10.5, 11,
// 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5,
// 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5,
// 20, 20.5, 21, 21.5, 22, 22.5

/*45*/ 96.13, 96.30,
/*48*/ 98.54, 98.67, 98.82, 98.97,
/*53*/ 100.91, 101.05, 101.19, 101.34, 101.49,
/*59*/ 103.29, 103.42, 103.57, 103.70,
/*64*/ 105.80, 105.94, 106.09, 106.24, 106.39, 106.53,
];
var nbDeFoisReturn = [
  2, 2,
  4, 4, 4, 4,
  5, 5, 5, 5, 5,
  4, 4, 4, 4,
  6, 6, 6, 6, 6, 6,
// 9, 9, 9, 9, 9, 9, 9, 9, 9,
// 8, 8, 8, 8, 8, 8, 8, 8,
// 6, 6, 6, 6, 6, 6
];
var eventNbReturn = 0;
var nextTimeReturn = actionTimeReturn[eventNbReturn];

function timeManagerReturn(aTimeReturn) {
  if (aTimeReturn >= nextTimeReturn) {
    // console.log(eventNb + 1);
    socket.emit('animationReturn', {
      animationNbReturn: (eventNbReturn + 1),
      nbDeFoisReturn: nbDeFoisReturn[eventNbReturn - 1],
      nbDeFoisReturnPetit: nbDeFoisReturn[eventNbReturn],
      playReturn: actionTimeReturn[eventNbReturn],
      stopReturn: actionTimeReturn[eventNbReturn + 1]
    });
    eventNbReturn++;
    nextTimeReturn = actionTimeReturn[eventNbReturn]
  }
}


//------------------- wave

//113.98 --8.94-- 122.92 --17.11-- 140.03

var actionTimeWave = [113.83, 114, 122.92, 123, 140.03];
// var actionTimeWave = [1, 2, 6, 6.2, 10];
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
  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
]
var actionTimeBoom = [
  146.37, 149.63, 150.08, 150.52, 153.04, 154.67, 154.98, 155.41, 155.71, 156.76,
  156.90, 158.24, 158.42, 159.28,
];

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


//-------------- click envent

// var actionTimeClick = [0, 4, 4.5, 5, 6.5, 20];
var actionTimeClick = [30, 31.5, 85, 141, 142.4, 169];
var eventNbClick = 0;
var nextTimeClick = actionTimeClick[eventNbClick];

function timeManagerClick(aTimeClick) {
  if (aTimeClick >= nextTimeClick) {
    // console.log(eventNb + 1);
    socket.emit('animationClick', {
      animationNbClick: (eventNbClick + 1),
      playClick: actionTimeClick[eventNbClick],
      stopClick: actionTimeClick[eventNbClick + 1]
    });
    eventNbClick++;
    nextTimeClick = actionTimeClick[eventNbClick]
  }
}

var actionTimeSound = [172.82];
// var actionTimeSound = [2];
var eventNbSound = 0;
var nextTimeSound = actionTimeSound[eventNbSound];

function timeManagerSound(aTimeSound) {
  if (aTimeSound >= nextTimeSound) {
    // console.log(eventNb + 1);
    socket.emit('animationSound', {
      animationNbSound: (eventNbSound + 1)
    });
    eventNbSound++;
    nextTimeSound = actionTimeSound[eventNbSound]
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
  $('#song').get(0).currentTime = 175.76;

  $('#song').get(0).play();

}


var vTime = 0;

function loopVideo() {
  //console.log($('#song').get(0).currentTime);

  vTime = $('#song').get(0).currentTime;
  $('.chrono').html(vTime);
  timeManagerClick(vTime);
  timeManagerSound(vTime);
  timeManager(vTime);
  superTimeManager(vTime);
  timeManagerPulse(vTime);
  timeManagerTik(vTime);
  timeManagerBal(vTime);
  timeManagerReturn(vTime);
  timeManagerRandom(vTime);
  timeManagerWave(vTime);
  timeManagerBoom(vTime);

  socket.emit('updateVideo', vTime);

  setTimeout(function() {
    loopVideo();
  }, 10);
}
$('.resetUsers').click(function() {
  socket.emit('resetUser');
})
