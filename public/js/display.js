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

var actionTime = [0, 18.5, 20.8, 21, 32, 36, 36.53, 56.96, 59.8, 60, 62.3, 70, /*reste noir*/ 113.75, /*fade blanc*/ 113.95, /*rest blanc*/ 115.95];
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

// var actionTimeDrum = [64 + 1, 64 + 1.4, 64 + 1.6, 64 + 1.8, 64 + 1.13, 64 + 1.15, 64 + 1.20, 64 + 1.22, 64 + 2, 64 + 2.2];
// var actionTimeDrum = [65.09, /*41 */ 65.50, /*35*/ 65.85, /*41*/ 66.26, /*32*/ 66.58, /*41*/ 66.99, /*32*/ 67.31, /*41*/ 67.72, /*32*/ 68.04, /*41*/ 68.45, /*68.77*/ ];
var actionTimeDrum = [];
var eventNbDrum = 0;
var nextTimeDrum = actionTimeDrum[eventNbDrum];

function getNumbersDrum() {
  var first = 65.09;
  var Nfirst = 65.09;
  actionTimeDrum.push(first)
  var value = 0;
  var last = 0;
  var add1 = .41;
  actionTimeDrum[0] = 65.09;

  for (var i = 0; i < 10; i++) {

    first = Nfirst;


    actionTimeDrum.push(last)
    //

  }
  console.log("number ? " + actionTimeDrum);
}

function timeManagerDrum(drumTime) {
  if (drumTime >= nextTimeDrum) {
    console.log(eventNbDrum + "drum " + 1);
    console.log($('#song').get(0).currentTime);
    socket.emit('animationDrum', {
      animationNbDrum: (eventNbDrum + 1),
      playDrum: actionTimeDrum[eventNbDrum],
      stopDrum: actionTimeDrum[eventNbDrum + 1]
    });
    eventNbDrum++;
    nextTimeDrum = actionTimeDrum[eventNbDrum]
  }
}

/*
86.20
86.36
86.52

87.364379
16
87.524133
16
87.683715

84

88.524257
16
88.68443
88.84

89.707523
89.875131
90.052483

90.869237
91.027681
91.205746

92.100141
92.259726
92.436171

93.284306
93.459345
93.628025

95.733863
95.902082
96.077443

96.949264
97.118304
97.285466

98.110805
98.277917
98.438141

99.302035
99.47734
99.638044

100.502201
100.66994
100.837301

101.712091
101.879035
102.038091

102.878482
103.045222
103.212908

104.053379
104.221721
104.390062
*/

// --------- ancien son
// var superActionTime = [
//   30.5, 31.25, 33.60, 34.65, 34.95, 35.24, 35.56, 36.5, /*37.5 ,*/ /**/
//
// /*9*/ 86.20, 86.36, 86.52, 86.6,
// /*13*/ 87.36, 87.52, 87.68, 87.75,
// /*17*/ 88.52, 88.68, 88.84, 88.95,
// /*21*/ 89.70, 89.87, 90.05, 90.12,
// /*25*/ 90.86, 91.02, 91.20, 91.30,
// /*29*/ 92.10, 92.25, 92.43, 92.52,
// /*33*/ 93.28, 93.45, 93.62, 93.72,
// /*37*/ 94.56, 94.72, 94.91, 95,
// /*41*/ 95.73, 95.90, 96.07, 96.85,
// /*45*/ 96.94, 97.11, 97.28, 97.35,
// /*48*/ 98.11, 98.27, 98.43, 98.55,
// /*52*/ 99.30, 99.47, 99.63, 99.75,
// /*56*/ 100.50, 100.66, 100.83, 100.95,
// /*60*/ 101.71, 101.87, 102.03, 102.15,
// /*64*/ 102.87, 103.04, 103.21, 103.35,
// /*68*/ 104.05, 104.22, 104.39, 104.50
// ];

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



// var actionTimeRandom = [8, 8.5, 9, 9.5, 10, 10.5, 11]
var actionTimeRandom = [70.50, 70.70, 71.02, 71.18, 71.35, 71.30, /**/
  75.56, 75.72, 75.88, 76.04, 76.20, 76.36, /*76.50*/ /**/
  80.50, 80.68, 80.83, 80.99, 81.16, 81.32, /*81.47*/ /**/
  82.80, 82.97];
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

var actionTimeBal = [
  /*1*/ 94.90, /*90*/ 95.85, /*141*/
  /*3*/ 97.30, /*85*/ 98.26, /*152*/
  /*5*/ 99.69, /*87*/ 100.60, /*150*/
  /*7*/ 102.05, /* 88*/ 102.94, /*163*/
  104.43, 105.33,
  /*9*/ 106.76, /*97*/ 107.70, /*137*/
  /*11*/ 109.18, /*82*/ 110.07, /*155*/
  /*12*/ 111.55, /*82*/ 112.45, /*159*/

];
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
