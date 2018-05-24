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

var actionTime = [ /*20.93*/ 0, 18.5, 20.8, 21, 32, 36, 36.53, 56.96, 59.8, /*10*/ 60, 62.3, 66.8, 67.2, 67.5];
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

var actionTimeDrum = [62.3, 62.9, 63.4, 63.7, 63.9, 64.4, 64.6, 64.8,];
var eventNbDrum = 0;
var nextTimeDrum = actionTimeDrum[eventNbDrum];

function timeManagerDrum(drumTime) {
  if (drumTime >= nextTimeDrum) {
    console.log(eventNbDrum + 1);
    socket.emit('animationDrum', {
      animationNbDrum: (eventNbDrum + 1),
      playDrum: actionTimeDrum[eventNbDrum],
      stopDrum: actionTimeDrum[eventNbDrum + 1]
    });
    eventNbDrum++;
    nextTimeDrum = actionTimeDrum[eventNbDrum]
  }
}


var superActionTime = [30.5, 31.24, 33.60, 34.65, 34.95, 35.24, 35.56, 36.5];
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

var actionTimeBal = [65.3, 67.20];
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


var vTime = 0;

function loopVideo() {

  vTime = $('#song').get(0).currentTime;
  timeManager(vTime);
  superTimeManager(vTime);
  timeManagerDrum(vTime);
  timeManagerBal(vTime);

  socket.emit('updateVideo', vTime);

  setTimeout(function() {
    loopVideo();
  }, 100);
}
$('.resetUsers').click(function() {
  socket.emit('resetUser');
})
