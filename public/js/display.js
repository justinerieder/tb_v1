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
});

var actionTime = [0, 18.5, 20.8, 21, 32, 36, 36.53, 56.96, 59.8, 60, 62.3, 70, /*reste noir*/ 104.2, /*fade blanc*/ 104.44, /*rest blanc*/ 106,];
var eventNb = 0;
var nextTime = actionTime[eventNb];

function timeManager(aTime) {
  if (aTime >= nextTime) {
    console.log(eventNb + 1);
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


var superActionTime = [30.5, 31.25, 33.60, 34.65, 34.95, 35.24, 35.56, 36.5, 37.5];
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

var actionTimeRandom = [8, 8.5, 9, 9.5, 10, 10.5, 11]
// var actionTimeRandom = [70.50, 70.70, 71.02, 71.18, 71.35, 71.30, /**/
//   75.56, 75.72, 75.88, 76.04, 76.20, 76.36, /*76.50*/ /**/
//   80.50, 80.68, 80.83, 80.99, 81.16, 81.32, /*81.47*/ /**/
//   82.80, 82.97];
var eventNbRandom = 0;
var nextTimeRandom = actionTimeRandom[eventNbRandom];

function timeManagerRandom(randomTime) {
  if (randomTime >= nextTimeRandom) {
    console.log(eventNbRandom + 1);
    socket.emit('animationRandom', {
      animationNbRandom: (eventNbRandom + 1),
      playRandom: actionTimeRandom[eventNbRandom],
      stopRandom: actionTimeRandom[eventNbRandom + 1]
    });
    eventNbRandom++;
    nextTimeRandom = actionTimeRandom[eventNbRandom]
  }
}

var actionTimeBal = [1, 2, 5, 6];
// var actionTimeBal = [
// /*1*/ 85.34, /*90*/ 86.24, /*141*/
// /*3*/ 87.65, /*85*/ 88.50, /*152*/
// /*5*/ 90.02, /*87*/ 90.89, /*150*/
// /*7*/ 92.39, /* 88*/ 93.27, /*163*/
// /*9*/ 94.90, /*97*/ 95.87, /*137*/
// /*11*/ 97.24, /*82*/ 98.06, /*155*/
// /*12*/ 99.61, /*82*/ 100.43, /*159*/
// /*13*/ 102.02, /*87*/ 102.89, /*153*/
// /*15*/ 104.42, /*87*/ 105.29
//
// ];
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
  $('#song').get(0).currentTime = 55;

  $('#song').get(0).play();

}


var vTime = 0;

function loopVideo() {
  //console.log($('#song').get(0).currentTime);

  vTime = $('#song').get(0).currentTime;
  $('.chrono').html(vTime);
  // timeManager(vTime);
  // superTimeManager(vTime);
  // timeManagerDrum(vTime);
  timeManagerBal(vTime);
  timeManagerRandom(vTime);

  socket.emit('updateVideo', vTime);

  setTimeout(function() {
    loopVideo();
  }, 10);
}
$('.resetUsers').click(function() {
  socket.emit('resetUser');
})
