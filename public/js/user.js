var ip = location.host;
var socket = io.connect(ip);

//update the interface to the current step

var finalUsersLength;

socket.on('hideWelcome', function(unsersLength) {
  $('.page-welcome').css("display", "none");
  $('.page-animation').css("display", "block");
  console.log("hideWelcome " + unsersLength);
  finalUsersLength = unsersLength;
});

$(document).ready(function() {

  socket.emit('newUser');

});

var myGlitch;

var sonGlitch;

var myUserNb;

socket.on('showNb', function(userNb) {
  console.log(userNb);

  myUserNb = userNb;

  $('.displayNumber').html(userNb);

  myGlitch = userNb;
  $('.page-welcome').append($('<audio id="songGlitch" src="../data/glitchs/end.mp3" controls></audio>'));
  // $('.page-welcome').append($('<audio id="songGlitch" src="../data/glitchs/' + myGlitch + '.mp3" controls></audio>'));
  // $('#songGlitch').prop("volume", 0.0);
  $('#songGlitch').css('display', 'none')

});




$('.ready').click(function() {

  socket.emit('iAmReady', {
    userReady: myUserNb
  })

  console.log("click fullscreen");

  toggleFullScreen(document.body);

  $(this).fadeTo('fast', 0, function() {
    $(this).remove();
  })



  console.log("click play " + myGlitch);


  $('#songGlitch').get(0).play();

  if ($('#songGlitch').get(0).currentTime = 0.1) {
    console.log("1");
    $('#songGlitch').get(0).pause();
  }
  $('.ready').fadeTo('fast', 0);

  $(this).fadeTo('fast', 0, function() {
    $(this).remove();
  });
});

var firstPause = false;

socket.on('animationSound', function(data, userTime, ending) {
  // requestAnimationFrame(loopTest);

  console.log("userTime " + userTime);
  if (userTime == myUserNb) {
    console.log("sound");
    $('#songGlitch').get(0).play();
    randomLightUp();
  }
  if (firstPause == false) {
    var pauseInt = setInterval(function() {
      if ($('#songGlitch').get(0).currentTime >= 1.4) {
        console.log("pauuuuse");
        $('#songGlitch').get(0).pause();
        clearInterval(pauseInt)
        firstPause = true;
      }
    }, 1)

  }
  if (ending == 2) {
    $('#songGlitch').get(0).currentTime = 1.4;
    $('#songGlitch').get(0).play();
    randomLightUp();
  }

});


canClick = false;
canClickMaster = false;
masterChange = false;

socket.on('animationClick', function(data, theMaster) {

  switch (data.animationNbClick) {
    case 1:
      canClick = true;
      console.log("click true");
      clickable();

      break;
    case 2:
      $('.speech').fadeTo(400, 0, function() {
        // $('.speech').text('');
      });

      break;
    case 3:
      canClick = false;
      $('.page-animation').fadeTo("slow", 0, function() {
        negativeRemover();
        $('.page-animation')
          .css('display', 'block')
          .fadeTo("slow", 1)
      });
      break;
    case 4:
      console.log("theMaster " + theMaster);

      canClickMaster = true;
      screenNb = 0;
      // clickable();
      clickableMaster(theMaster);
      break;
    case 5:
      $('.speech').fadeTo(400, 0, function() {
        // $('.speech').text('');
      });
      break;
    case 6:
      canClick = false;
      canClickMaster = false;
      negativeRemover();
      $('.page-animation').css('display', 'block')
      break;
  }
});
function clickable() {
  var fontH = 460;
  if (canClick == true) {
    $('.speech')
      .text('click')
      .css('font-size', fontH + '%')
    $('.speech').fadeTo(400, 1);
  } else {
    $('.speech').text('');
  }
}

function clickableMaster(theMaster) {
  negativeRemover();

  isthereAMaster = true;
  if (canClickMaster == true) {
    if (theMaster == myUserNb) {
      $('.speech').fadeTo(400, 1);
      masterChange = true;
      console.log('i am the master');
    } else {
      canClick = false;
    }
  } else {
    // negativeRemover();
  }
// if (theMaster == myUserNb) {
//   $('.speech').fadeTo(400, 1);
//   masterChange = true;
//   console.log('i am the master');
// } else {
//   canClick = false;
// }
}
isthereAMaster = false;

// $('body').on('click touchstart', function() {
$('body').on('click', function() {
  if (canClick == true) {
    console.log('click');
    changeCollection();
  } else if (canClick == false && isthereAMaster == false) {
    negativeRemover();
    $('.page-animation').css('display', 'block')
  }

  if (masterChange == true && canClickMaster == true) {
    changeCollection();
    console.log('click master');
    socket.emit('masterClick', {
      collectionNb: 1
    });
  }
// changeCollection();
});

socket.on('masterClickAll', function(collectionNb) {
  // console.log('data.collectionNb ' + collectionNb);
  console.log("changed by master");
  changeCollection()
})


var screenNb = 0;
function changeCollection() {
  screenNb++;
  // console.log("nb " + screenNb);
  if (screenNb > 8) {
    $('.test').removeClass('negative')
    screenNb = 0;
  }
  switch (screenNb) {
    case 0:
      // console.log('0');
      negativeRemover();
      $('.page-animation').css('display', 'block')
      break
    case 1:
      // console.log('1');
      negativeRemover();
      $('.page-animation').css('display', 'block')
      $('.top-right').addClass('negative')
      $('.top-left').addClass('negative')
      break
    case 2:
      // console.log('2');
      negativeRemover();
      $('.page-animation').css('display', 'block')
      $('.bottom-right').addClass('negative')
      $('.bottom-left').addClass('negative')
      break
    case 3:
      // console.log('3');
      negativeRemover();
      $('.page-animation').css('display', 'block')

      $('.top-right').addClass('negative')
      $('.bottom-left').addClass('negative')
      break
    case 4:
      // console.log('4');
      negativeRemover();
      $('.page-animation').css('display', 'block')

      $('.top-left').addClass('negative')
      $('.bottom-right').addClass('negative')
      break
    case 5:
      // console.log('5');
      negativeRemover();

      $('.page-animation').css('display', 'block')
      $('.top-right').addClass('negative')
      $('.bottom-right').addClass('negative')
      break
    case 6:
      // console.log('6');
      negativeRemover();
      $('.page-animation').css('display', 'block')
      $('.top-left').addClass('negative')
      $('.bottom-left').addClass('negative')
      break
    case 7:
      // console.log('7');
      negativeRemover();
      $('.top-right')
        .css('display', 'block')
        .css('width', '100%')
        .css('height', '100%')
        .css('left', '0px')
        .addClass('negative')
      $('.top-left')
        .css('display', 'block')
        .css('top', '33%')
        .css('left', '0px')
        .css('height', '33%')
        .css('z-index', '1')
      $('.bottom-left')
        .css('display', 'block')
        .css('top', '33%')
        .css('left', '50%')
        .css('height', '33%')
        .css('z-index', '2')
      break
    case 8:
      // console.log('8');
      negativeRemover();
      $('.top-right')
        .css('display', 'block')
        .css('width', '100%')
        .css('height', '100%')
        .css('left', '0px')
      $('.top-left')
        .css('display', 'block')
        .css('top', '33%')
        .css('left', '0px')
        .css('height', '33%')
        .css('z-index', '1')
        .addClass('negative')

      $('.bottom-left')
        .css('display', 'block')
        .css('top', '33%')
        .css('left', '50%')
        .css('height', '33%')
        .css('z-index', '2')
        .addClass('negative')
      break
  }
}
function negativeRemover() {
  // console.log("remover");
  // $('.page-animation').fadeTo('fast', 0)

  $('.page-animation').removeClass('negative')
  $('.page-animation').css('display', 'none')
  $('.top-left')
    .css('top', '0px')
    .css('left', '0px')
    .css('width', '50%')
    .css('height', '50%')
    .css('z-index', '0')
  $('.top-right')
    .css('top', '0px')
    .css('left', '50%')
    .css('width', '50%')
    .css('height', '50%')
    .css('z-index', '0')
  $('.bottom-left')
    .css('top', '50%')
    .css('left', '0px')
    .css('width', '50%')
    .css('height', '50%')
    .css('z-index', '0')
  $('.bottom-right')
    .css('top', '50%')
    .css('left', '50%')
    .css('width', '50%')
    .css('height', '50%')
    .css('z-index', '0')
}
//-------------------big fade

socket.on('animation', function(animationNb, play, stop) {

  // var colorH = 255 / (stop - play) / 10;

  switch (animationNb) {

    case 1:
      fadeWhite(play, stop, 255);
      break;
    case 2:
      fadeBlack(play, stop, 255);
      break;
    case 3:
      fadeWhite(play, stop, 255);
      break;
    case 4:
      fadeBlack(play, stop, 255);
      break;
    case 5:
      stayBlack(play, stop);
      break;
    case 6:
      fadeWhite(play, stop, 255);
      break;
    case 7:
      fadeBlack(play, stop, 255);
      break;
    case 8:
      stayBlack(play, stop);
      break;
    case 9:
      fadeWhite(play, stop, 255);
      break;
    case 10:
      stayWhite(play, stop);
      break;
    case 11:
      fadeBlack(play, stop, 255);
      break;
    case 12:
      stayBlack(play, stop);
      break;


    case 13:
      fadeWhite(play, stop, 40);
      break;
    case 14:
      fadeBlack(play, stop, 40);
      break;
    case 15:
      fadeWhite(play, stop, 60);
      break;
    case 16:
      fadeBlack(play, stop, 60);
      break;
    case 17:
      fadeWhite(play, stop, 80);
      break;
    case 18:
      fadeBlack(play, stop, 80);
      break;
    case 19:
      fadeWhite(play, stop, 100);
      break;
    case 20:
      fadeBlack(play, stop, 100);
      break;
    case 21:
      fadeWhite(play, stop, 120);
      break;
    case 22:
      fadeBlack(play, stop, 120);
      break;
    case 23:
      fadeWhite(play, stop, 140);
      break;
    case 24:
      fadeBlack(play, stop, 140);
      break;
    case 25:
      fadeWhite(play, stop, 160);
      break;
    case 26:
      fadeBlack(play, stop, 160);
      break;
    case 27:
      fadeWhite(play, stop, 180);
      break;
    case 28:
      fadeBlack(play, stop, 180);
      break;
    case 29:
      fadeWhite(play, stop, 200);
      break;
    case 30:
      fadeBlack(play, stop, 200);
      break;
    case 31:
      fadeWhite(play, stop, 220);
      break;
    case 32:
      fadeBlack(play, stop, 220);
      break;
    case 33:
      fadeWhite(play, stop, 240);
      break;
    case 34:
      fadeBlack(play, stop, 240);
      break;
    case 35:
      fadeWhite(play, stop, 255);
      break;
    case 36:
      fadeBlack(play, stop, 255);
      break;
    case 37:
      fadeWhite(play, stop, 255);
      break;
    case 38:
      fadeBlack(play, stop, 255);
      break;
    case 39:
      fadeWhite(play, stop, 255);
      break;
    case 40:
      fadeBlack(play, stop, 255);
      break;
    case 41:
      fadeWhite(play, stop, 255);
      break;
    case 42:
      fadeBlack(play, stop, 255);
      break;
    case 43:
      fadeWhite(play, stop, 255);
      break;
    case 44:
      fadeBlack(play, stop, 255);
      break;
    case 45:
      fadeWhite(play, stop, 255);
      break;
    case 46:
      fadeBlack(play, stop, 255);
      break;
    case 47:
      fadeWhite(play, stop, 255);
      break;
    case 48:
      fadeBlack(play, stop, 255);
      break;
    case 49:
      fadeWhite(play, stop, 255);
      break;
    case 50:
      fadeBlack(play, stop, 255);
      break;
    case 51:
      fadeWhite(play, stop, 255);
      break;
    case 52:
      fadeBlack(play, stop, 255);
      break;
    case 53:
      fadeWhite(play, stop, 255);
      break;
    case 54:
      fadeBlack(play, stop, 255);
      break;
    case 55:
      fadeWhite(play, stop, 255);
      break;
    case 56:
      fadeBlack(play, stop, 255);
      break;
    case 57:
      fadeWhite(play, stop, 255);
      break;
    case 58:
      fadeBlack(play, stop, 255);
      break;
    case 59:
      fadeWhite(play, stop, 255);
      break;
    case 60:
      fadeBlack(play, stop, 255);
      break;
    case 61:
      fadeWhite(play, stop, 255);
      break;
    case 62:
      fadeBlack(play, stop, 255);
      break;
    case 63:
      fadeWhite(play, stop, 255);
      break;
  }
});

var colorIndex = 0;
var codeColor;

function fadeWhite(play, stop, baseColor) {
  var colorH = baseColor / (stop - play) / 10;

  colorIndex += colorH;
  if (colorIndex >= baseColor) {
    colorIndex = baseColor;
  }
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}


function stayWhite(play, stop) {
  colorIndex = 255;
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}


function fadeBlack(play, stop, baseColor) {
  var colorHBlack = baseColor / (stop - play) / 10;
  colorIndex -= colorHBlack;

  if (colorIndex <= 0) {
    colorIndex = 0;
  }
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}


function stayBlack(play, stop) {
  colorIndex = 0;
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}


//----______Annimation glitch !!!

var stopSuperAnimation3 = false;
var goblink = false;
border = false;
blinkBg = false;
blinkBorder = false;

var superBoucle = 0;

var startSuper;
var stopSuper;

socket.on('superAnimation', function(data) {
  // console.log("data " + data.superAnimationNb);

  startSuper = data.superPlay;
  stopSuper = data.superStop;

  switch (data.superAnimationNb) {
    case 1:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 2:
      kate();
      break
    case 3:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 4:
      kate();
      break
    case 5:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 6:
      kate();
      break
    case 7:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 8:
      kate();
      break
    case 9:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 10:
      kate();
      break
    case 11:
      goodMarg(true, ".superAnimation1");
      goodMarg(true, ".superAnimation2");
      goblink = true;
      blink(".superAnimation1", true, false);
      blink(".superAnimation2", true, false);
      break
    case 12:
      kate();
      break
    case 13:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 14:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 15:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 16:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 17:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 18:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 19:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 20:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 21:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 22:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 23:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 24:
      kate();
      break
    case 25:
      $('.superAnimation1').css('display', 'block')
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", false, true);
      console.log("blinking?");
      break
    case 26:
      animationGlitch('.superAnimation1', 0, 2);
      //goblink = true;
      //blink(".superAnimation1", false, true);

      break
    case 27:
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", false, true);

      break
    case 28:
      animationGlitch('.superAnimation1', 0, 2);
      //goblink = true;
      //blink(".superAnimation1", false, true);

      break
    case 29:
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", false, true);

      break
    case 30:
      animationGlitch('.superAnimation1', 0, 2);
      //goblink = true;
      //blink(".superAnimation1", false, true);

      break
    case 31:
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", false, true);

      break
    case 32:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 33:
      kate();
      break
    case 34:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 35:
      kate();
      break
    case 36:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 37:
      kate();
      break
    case 38:
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", true, false);
      break
    case 39:
      animationGlitch('.superAnimation1', 0, 2);
      //goblink = true;
      //blink(".superAnimation1", true, false);
      break
    case 40:
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", true, false);
      break
    case 41:
      animationGlitch('.superAnimation1', 0, 2);
      //goblink = true;
      //blink(".superAnimation1", true, false);
      break
    case 42:
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", true, false);
      break
    case 43:
      animationGlitch('.superAnimation1', 2, 0);
      //goblink = true;
      //blink(".superAnimation1", true, false);
      break
    case 44:
      animationGlitch('.superAnimation1', 0, 2);
      //goblink = true;
      //blink(".superAnimation1", true, false);
      break

    case 45:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 46:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 47:
      kate();
      break

    case 48:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 49:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 50:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 51:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 52:
      kate();
      break

    case 53:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 54:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 55:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 56:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 57:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 58:
      kate();
      break

    case 59:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 60:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 61:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 62:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 63:
      kate();
      break

    case 64:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 65:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 66:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 67:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 68:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 69:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 70:
      kate();
      break

    case 71:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 72:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 73:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 74:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 75:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 76:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 77:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 78:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 79:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 80:
      kate();
      break

    case 81:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 82:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 83:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 84:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 85:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 86:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 87:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 88:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 89:
      kate();
      break

    case 90:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 91:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 92:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 93:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 94:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 95:
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 96:
      kate();
      break
  }
  if (data.superAnimationNb > 96) {
    goodMarg(true, ".superAnimation1");
    goblink = true;
    blink(".superAnimation1", true, false);
  } else if (data.superAnimationNb == 111) {
    kate();
  }
});

// case 25:
//   console.log("marche stp :) ");
//   animationGlitch('.superAnimation1', 2, 0);
//   blink(".superAnimation1", false, true);
//   // console.log("blinking?");
//   break

function blink(who, blinkBorder, blinkBg) {

  if (goblink == true) {
    setTimeout(function() {
      randomColor = getRandom(0, 255);

      if (blinkBorder == true) {
        $(who).css("border", "10px solid rgb(" + Math.round(randomColor) + "," + Math.round(randomColor) + "," + Math.round(randomColor) + ")")
      } else if (blinkBorder == false) {
        $(who).css("border", "10px solid rgb(255,255,255)")
      }
      if (blinkBg == true) {
        // console.log("randomColor " + randomColor);
        $(who).css('border', 'none')
        $(who).css("background-color", "rgb(" + Math.round(randomColor) + "," + Math.round(randomColor) + "," + Math.round(randomColor) + ")")
      } else if (blinkBg == false) {
        $(who).css("background-color", "transparent")
      }
      blink(who, blinkBorder, blinkBg);
    }, 1);
  }
}


glitchAnimation = false;
function goodMarg(border, who) {
  var randomSizeW = getRandom(10, 90)
  var randomSizeH = getRandom(10, 90)
  var w = randomSizeW;
  var h = randomSizeH;
  var bSize = -10;

  var top = (100 - h) / 2;
  var left = (100 - w) / 2;

  $(who)
    .css('display', 'block')
    .css('width', w + "%")
    .css('height', h + "%")
    .css('top', top + "%")
    .css('left', left + "%")
    .css('margin-left', bSize + 'px')
    .css('margin-top', bSize + 'px')

  if (border == true) {
    $(who)
      .css('border', '10px solid white')
      .css("background-color", "transparent")
  } else {
    $(who)
      .css("background-color", "white")
  }

}
function animationGlitch(who, dirTop, dirLeft) {
  $(who)
    .css('border', 'none')
    .css('background-color', 'white')

  if (dirTop > 0) {
    w = 100;
    h = 6;

    otop = -20;
    left = 0;

    var moveGlitch = setInterval(function() {
      // console.log("hello ? " + otop);

      otop += dirTop;
      $(who)
        .css('top', otop + "%")

      if (otop > 100) {
        clearInterval(moveGlitch);
        kate();
      }
    }, 1)

  }
  if (dirLeft > 0) {
    w = 7;
    h = 100;

    top = 0;
    left = -20;
    var moveGlitch = setInterval(function() {
      left += dirLeft;
      // console.log("hello ? " + left);

      $(who)
        .css('left', left + "%")

      if (left > 100) {
        clearInterval(moveGlitch);
        kate();
      }
    }, 1)
  }
  $(who)
    .css('display', 'block')
    .css('width', w + "%")
    .css('height', h + "%")
    .css('margin-left', '0px')
    .css('margin-top', '0px')
    .css('top', top + "%")
    .css('left', left + "%")
}
var randomColor;


function kate() {
  goblink = false;
  $('.superAnimation')
    .css('display', "none")
    .css('top', '0%')
    .css('left', '0%')
    .css('width', "100%")
    .css('height', '100%')
    .css('margin', "0px")
    .css('border', 'none')
    .css('background-color', 'white')
}

var moveSuperAnimation = 0;
var moveSuperAnimationMap;
var maxTimeMove = 40;

function superAnimation1() {
  setTimeout(function() {
    moveSuperAnimation++;
    if (moveSuperAnimation <= maxTimeMove) {
      moveSuperAnimationMap = moveSuperAnimation.map(0, maxTimeMove, 0, 100)
      $('.superAnimation1')
        .css("height", "6%")
        .css("display", "block")
        .css("top", moveSuperAnimationMap + "%")
      console.log(moveSuperAnimation + " " + moveSuperAnimationMap);
      superAnimation1()
    } else {
      $('.superAnimation1').css("display", "none");
    }

  }, 1);
}

var w = 6;
var calculeMargin1 = (100 - w) / 2;
var calculeMargin2 = (100 - w) / 2;
function superAnimation2() {

  $('.superAnimation')
    .css("display", "block")
    .css("width", "6%")

  $('.superAnimation1')
    .css("margin-left", calculeMargin1 + "%")

  $('.superAnimation2')
    .css("margin-left", calculeMargin2 + "%")
  setTimeout(function() {
    calculeMargin1--;
    calculeMargin2++;
    if (calculeMargin1 >= 0) {
      superAnimation2()
    } else {
      $('.superAnimation').css("display", "none");
      calculeMargin = 0;
    }
  }, 1);
}

// var randomW = [95, 24, 36, 72, 87, 91, 83, 48, 37, 50, 28];
// var randomH = [25, 65, 34, 29, 70, 94, 38, 67, 45, 32, 19];

var randomW;
var randomH;
var compenseMarginW;
var compenseMarginH;


function superAnimation3() {
  randomW = getRandom(95, 10);
  randomH = getRandom(95, 10);
  compenseMarginW = (100 - randomW) / 2;
  compenseMarginH = (100 - randomH) / 2;
  if (stopSuperAnimation3 == false) {
    setTimeout(function() {
      $('.superAnimation1')
        .css("display", "block")
        .addClass("border")
        .css("width", randomW + "%")
        .css("height", randomH + "%")
        .css("margin-left", compenseMarginW + "%")
        .css("margin-top", compenseMarginH + "%")
      superAnimation3()
    }, 100)
  } else {
    console.log("hola");
    randomW = 0;
    randomH = 0;
    compenseMarginW = 0;
    compenseMarginH = 0;
    $('.superAnimation1').css("display", "none")
    return
  }
}

function superAnimation4(number) {
  randomW = getRandom(95, 10);
  randomH = getRandom(95, 10);
  compenseMarginW = (100 - randomW) / 2;
  compenseMarginH = (100 - randomH) / 2;
  //console.log(number + " " + rectH + " " + rectW + " " + posX + " " + posY);
  $('.superAnimationRect' + number)
    .css("display", "block")
    .css("height", randomH + "%")
    .css("width", randomW + "%")
    .css("margin-left", compenseMarginW + "%")
    .css("margin-top", compenseMarginH + "%")
}

///-------------- annimation random
var currentNb = 100;
var nbUsersRandom;

socket.on('animationRandom', function(data) {
  if (data.nbUsers == myUserNb) {
    randomLightUp();
  }
});

// var countrandomLightUp = 0;

function randomLightUp() {
  // countrandomLightUp++;
  // console.log('coucountrandomLightUpnt ' + countrandomLightUp);
  var color = 0;
  var who = '.randomLight'

  var intRandomUp = setInterval(function() {
    color += 10;
    $('.randomLight')
      .css('display', 'block')
      .css('z-index', '10')
      .css('background-color', "rgb(" + Math.round(color) + "," + Math.round(color) + "," + Math.round(color) + ")")
    // console.log(color);
    // console.log($('.randomLight').css('background-color'));
    if (color >= 255) {
      clearInterval(intRandomUp);

      randomLightDown();
    }
  }, 0.0001)
}


function randomLightDown() {
  var color = 255;
  var intRandom = setInterval(function() {
    color -= 10;
    $('.randomLight')
      .css('display', 'block')
      .css('background-color', "rgb(" + Math.round(color) + "," + Math.round(color) + "," + Math.round(color) + ")")
    // console.log($('.randomLight').css('background-color'));
    if (color <= 0) {
      $('.randomLight')
        .css('display', 'none')
      clearInterval(intRandom);
    }
  }, 0.01)
}

///-------------- animation playPulse

var pulseTime = 0;

socket.on('animationPulse', function(data) {
  console.log("animation pulse");

  pulseTime++;

  if (pulseTime > 3) {
    pulseTime = 1;
  }
  console.log(pulseTime);

  switch (pulseTime) {
    case 1:
      // pulse('.page-pulse', 1)
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break;
    case 2:
      // pulse('.page-pulse', 0.5)
      goodMarg(true, ".superAnimation1");
      goblink = true;
      blink(".superAnimation1", true, false);
      break
    case 3:
      // pulse('.page-pulse', 0)
      // goodMarg(true, ".superAnimation1");
      // goblink = true;
      // blink(".superAnimation1", true, false);
      kate()
      break
  }
});

function pulse(who, opacity) {
  // var size = 50;
  // var calculeMargin = (100 - size) / 2;


  $(who)
    .css('display', 'block')
    .fadeTo(100, opacity)
    // .css('width', size + '%')
    // .css('height', size + '%')
    // .css('left', calculeMargin + '%')
    // .css('top', calculeMargin + '%')

}

//--------------  Animation Tik
var tikNb = 0;
socket.on('animationTik', function(data) {
  tikNb++;

  if (tikNb > 3) {
    tikNb = 1;
  }
  switch (tikNb) {
    case 1:
      tiktik(95, 97, 10);
      break;
    case 2:
      tiktik(90, 94, 20);
      break;
    case 3:
      $('.page-tik').css('display', 'none')
      break;
  }
});

function tiktik(sizeW, sizeH, borderSize) {
  var calcMargW = (100 - sizeW) / 2;
  var calcMargH = (100 - sizeH) / 2;
  var bSizeTik = -10;

  $('.page-tik')
    .css('display', 'block')
    .css('width', sizeW + '%')
    .css('height', sizeH + '%')
    .css('border', borderSize + 'px solid white')
    .css('top', '1.5%')
    .css('left', '2.5%')
    .css('margin-top', bSizeTik + 'px')
    .css('margin-left', bSizeTik + 'px')


}



///-------------- annimation balayage

var goBalayage = false;
var balReset = 0;

socket.on('animationBal', function(data, count) {
  // console.log("data " + data.animationNbBal);
  console.log('count ' + count);

  if (count == myUserNb) {
    randomLightUp();
  }

});
var countLight = 0;

function lightUp() {
  if (goBalayage == true) {

    countLight++;
    $('.page-bal')
      .css('display', 'block')
      .css('background-color', 'white')
    setTimeout(function() {
      if (countLight <= 20) {
        lightUp()
      } else {
        $('.page-bal')
          .css('display', 'none')
      }
    }, 10)
  } else {
    countLight = 0;

  }
}

// ---------------- animation return
socket.on('animationReturn', function(data, last) {
  console.log("return " + last);

  if (last <= 0) {
    last = 1;
  }

  if (last == myUserNb) {
    randomLightUp()

  }


});

//-------------- animation Wave

var playWave;
var stopWave;
var goDown = false;

var getDown = 0;
var downInt;
var upInt;


var t1;
var t2;
var deltaT;
var maxSpeed1;
var maxSpeed2;
var minSpeed1;
var minSpeed2;
var realSpeed1;
var newRealSpeed1;
var realSpeed2;

socket.on('animationWave', function(data) {

  playWave = data.playWave;
  stopWave = data.stopWave;

  t1 = (stopWave - playWave);
  var total = t1 * 1000; // du timeline de l'anim
  var interval = 30;

  if (data.animationNbWave == 1) {
    $('.page-wave').fadeTo('fast', 1)
    $('.page-wave').css('opacity', '1');
  } else if (data.animationNbWave == 2) {

    getDown = getRandom(20, 100);

    var currentTime = 0;
    var frameCount = 0;

    var start = null;

    var draw = function(timestamp) {
      var progress;
      if (start === null)
        start = timestamp;
      progress = timestamp - start;

      //var deltaTime = e / 100;
      var pct = progress / total;

      var val = ease(pct);
      var animValue = val * getDown;

      $('.page-wave').css('top', -animValue + '%')

      if (progress >= total) {
        return;
      }
      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

  } else if (data.animationNbWave == 3) {

    //clearInterval(downInt);

  } else if (data.animationNbWave == 4) {
    var currentTime = 0;
    var start = null;

    var draw = function(timestamp) {
      var progress;
      if (start === null)
        start = timestamp;
      progress = timestamp - start;

      //var deltaTime = e / 100;
      var pct = progress / total;

      var val = ease(1 - pct);
      var animValue = val * getDown;

      $('.page-wave').css('top', -animValue + '%')

      if (progress >= total) {
        return;
      }
      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);




    // upInt = setInterval(function() {
    //   currentTime += interval;
    //   var pct = currentTime / total;
    //   var val = ease(1 - pct);
    //
    //   var animValue = val * getDown;
    //
    //   $('.page-wave').css('top', -animValue + '%')
    //
    // }, interval)

  } else if (data.animationNbWave == 5) {
    clearInterval(upInt)
    goblink = false;
    getDown = 0;
    console.log("fini wave");
    $('.page-wave')
      .css('top', getDown + '%')
    // .css('display', 'none')
    $('.page-wave').fadeTo(2000, 0);
  }
});
//--------------- animation bottom
socket.on('animationBoom', function(data) {
  switch (data.animationNbBoom) {
    case 1:

      boom('.page-boom', 100, 7)
      break;
    case 2:

      boom('.page-boom', 100, 7)
      break;
    case 3:

      boom('.page-boom', 100, 7)

      boom('.page-boom', 12, 100)
      break;
    case 4:
      boom('.page-boom', 100, 7)
      break;
    case 5:

      boom('.page-boom', 12, 100)
      break;
    case 6:

      boom('.page-boom', 12, 100)
      break;
    case 7:
      boom('.page-boom', 100, 7)

      break;
    case 8:
      boom('.page-boom', 100, 7)
      break;
    case 9:
      boom('.page-boom', 100, 7)
    case 10:

      boom('.page-boom', 12, 100)
      break;
    case 11:
      boom('.page-boom', 100, 7)
      break;
    case 12:

      boom('.page-boom', 12, 100)
      break;
    /**/
    case 13:
      boom('.page-boom', 100, 7)

      break;
    case 14:
      boom('.page-boom', 100, 7)
      break;
  }
});


function boom(who, h, w) {
  var randomLeft = 0;
  var randomTop = 0;

  if (h == 100) {
    randomLeft = getRandom(10, 80);
    randomTop = 0;
  // var intBoom = setInterval(function() {
  //   randomLeft++;
  // }, 10);
  }
  if (w == 100) {
    randomTop = getRandom(10, 80);
    randomLeft = 0;
  }

  $(who)
    .css('display', 'block')
    .css('width', w + '%')
    .css('height', h + '%')
    .css('left', randomLeft + '%')
    .css('top', randomTop + '%')


  $(who).fadeTo(200, 1, function() {

    $(this).fadeTo(400, 0, function() {
      // clearInterval(intBoom);
    })
  })
}

const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (IS_IOS) {
  console.log("i am an ios device");
  // document.documentElement.classList.add('ios');
  $('body').css('cursor', 'pointer')
}


//-------------- full screen

$('.fs-button').click(function() {
  console.log("click fullscreen");

  toggleFullScreen(document.body);

  $(this).fadeTo('fast', 0, function() {
    $(this).remove();
  });

// $(this).animate({
//   'opacity': '0'
// }, 600, function() {
//
//
// });
});

// (function($) {
//   var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
//   $.fn.nodoubletapzoom = function() {
//     if (IS_IOS)
//       $(this).bind('touchstart', function preventZoom(e) {
//         var t2 = e.timeStamp,
//           t1 = $(this).data('lastTouch') || t2,
//           dt = t2 - t1,
//           fingers = e.originalEvent.touches.length;
//         $(this).data('lastTouch', t2);
//         if (!dt || dt > 500 || fingers > 1) return; // not double-tap
//
//         e.preventDefault(); // double tap - prevent the zoom
//         // also synthesize click events we just swallowed up
//         $(this).trigger('click').trigger('click');
//       });
//   };
// })(jQuery);


function toggleFullScreen(elem) {

  // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
  if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
    if (elem.requestFullScreen) {
      elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

Number.prototype.map = function(in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ease(t) {
  return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}
