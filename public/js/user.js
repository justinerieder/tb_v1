var ip = location.host;
var socket = io.connect(ip);

//update the interface to the current step


socket.on('hideWelcome', function() {
  $('.page-welcome').css("display", "none");
  $('.page-animation').css("display", "block");
  console.log("hideWelcome");
});

$(document).ready(function() {

  socket.emit('newUser');

  //disable scroll refresh
  /*$(document).on('touchmove', function(e) {

    e.preventDefault();
  }
);*/

});

socket.on('showNb', function(userNb) {
  console.log(userNb);
  $('.displayNumber').html(userNb);
});

socket.on('updateVideo', function(vTime) {
  //console.log("vTime " + vTime);
});

$('body').on('click touchstart', function() {
  // $('body').on('click', function() {
  console.log("changeCollection");
  changeCollection();
});

var screenNb = 0;
function changeCollection() {
  screenNb++;
  console.log("nb " + screenNb);
  if (screenNb > 12) {
    $('.test').removeClass('negative')
    screenNb = 0;
  }
  switch (screenNb) {
    case 0:
      negativeRemover();
      $('.page-animation').css('display', 'block')
      break
    case 1:
      negativeRemover();
      $('.page-animation').css('display', 'block')
      $('.top-right').addClass('negative')
      $('.top-left').addClass('negative')
      break
    case 2:
      negativeRemover();
      $('.page-animation').css('display', 'block')
      $('.bottom-right').addClass('negative')
      $('.bottom-left').addClass('negative')
      break
    case 3:
      negativeRemover();
      $('.page-animation').css('display', 'block')

      $('.top-right').addClass('negative')
      $('.bottom-left').addClass('negative')
      break
    case 4:
      negativeRemover();
      $('.page-animation').css('display', 'block')

      $('.top-left').addClass('negative')
      $('.bottom-right').addClass('negative')
      break
    case 5:
      negativeRemover();

      $('.page-animation').css('display', 'block')
      $('.top-right').addClass('negative')
      $('.bottom-right').addClass('negative')
      break
    case 6:
      negativeRemover();
      $('.page-animation').css('display', 'block')
      $('.top-left').addClass('negative')
      $('.bottom-left').addClass('negative')
      break
    case 7:
      negativeRemover();
      $('.top-right')
        .css('display', 'block')
        .css('width', '100%')
        .css('height', '100%')
        .css('left', '0px')
        .addClass('negative')
      $('.top-left')
        .css('display', 'block')
        .css('top', '25%')
        .css('left', '25%')
        .css('z-index', '2')
      break
    case 8:
      negativeRemover();
      $('.top-right')
        .css('display', 'block')
        .css('width', '100%')
        .css('height', '100%')
        .css('left', '0px')
      $('.top-left')
        .css('display', 'block')
        .css('top', '25%')
        .css('left', '25%')
        .css('z-index', '2')
        .addClass('negative')
      break
    case 9:
      negativeRemover();
      $('.top-right')
        .css('display', 'block')
        .css('width', '100%')
        .css('height', '100%')
        .css('left', '0px')
      $('.top-left')
        .css('display', 'block')
        .css('top', '35%')
        .css('left', '15%')
        .css('z-index', '2')
        .addClass('negative')
      $('.bottom-left')
        .css('display', 'block')
        .css('top', '15%')
        .css('left', '35%')
        .css('z-index', '2')
        .addClass('negative')
      break
    case 10:
      negativeRemover();
      $('.top-right')
        .css('display', 'block')
        .css('width', '100%')
        .css('height', '100%')
        .css('left', '0px')
        .addClass('negative')
      $('.top-left')
        .css('display', 'block')
        .css('top', '35%')
        .css('left', '15%')
        .css('z-index', '2')
      $('.bottom-left')
        .css('display', 'block')
        .css('top', '15%')
        .css('left', '35%')
        .css('z-index', '2')
      break
    case 11:
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
        .css('z-index', '100')
      $('.bottom-left')
        .css('display', 'block')
        .css('top', '33%')
        .css('left', '50%')
        .css('height', '33%')
        .css('z-index', '2')
      break
    case 12:
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
        .css('z-index', '2')
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
//------------------ reset clicking
socket.on('animationResetClick', function(data) {
  console.log("reset click");

  $('.page-animation').fadeTo("slow", 0, function() {
    negativeRemover();
    $('.page-animation')
      .css('display', 'block')
      .css('opacity', '1')
  });
});

//-------------------- TIBOR

// socket.on('exec', function(animFunc, play, stop) {
//
//   console.log(animFunc.superAnimationNb);
//   var f = eval(animFunc.superAnimationNb);
//   f();
//
// });


//-------------------big fade


socket.on('animation', function(animationNb, play, stop) {

  var colorH = 255 / (stop - play) / 10;

  switch (animationNb) {
    case 1:
      fadeWhite(colorH);
      break;
    case 2:
      fadeBlack(colorH);
      break;
    case 3:
      fadeWhite(colorH);
      break;
    case 4:
      fadeBlack(colorH);
      break;
    case 5:
      stayBlack(colorH);
      break;
    case 6:
      fadeWhite(colorH);
      break;
    case 7:
      fadeBlack(colorH);
      break;
    case 8:
      stayBlack(colorH);
      break;
    case 9:
      fadeWhite(colorH);
      break;
    case 10:
      stayWhite(colorH);
      break;
    case 11:
      fadeBlack(colorH);
      break;
    case 12:
      stayBlack(colorH);
      break;
    case 13:
      console.log("stay black");

      stayBlack(colorH);
      // fadeWhite(colorH);
      break;
    case 14:
      console.log("please white");
      stayWhite(colorH);
      // stayWhite(colorH);
      break;
    case 15:
      console.log("stay white");
      stayWhite(colorH);
      // stayWhite(colorH);
      break;
  }

});

var colorIndex = 0;
var codeColor;

function fadeWhite(colorH) {
  colorIndex += colorH;
  if (colorIndex >= 255) {
    colorIndex = 255;
  }
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function stayWhite(colorH) {
  colorIndex = 255;
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function fadeBlack(colorH) {
  colorIndex -= colorH;

  if (colorIndex >= 255) {
    colorIndex = 255;
  }
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function stayBlack(colorH) {
  colorIndex = 0;
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}


//----______Annimation glitch !!!

var stopSuperAnimation3 = false;
var goblink = false;
border = false;
blinkBg = false;
blinkBorder = false;

socket.on('superAnimation', function(data) {
  // console.log("data " + data.superAnimationNb);

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
      animationGlitch('.superAnimation1', 2, 0);
      break
    case 26:
      animationGlitch('.superAnimation1', 0, 2);
      break
    case 27:
      animationGlitch('.superAnimation1', 2, 0);
      break
    case 28:
      animationGlitch('.superAnimation1', 0, 2);
      break
    case 29:
      animationGlitch('.superAnimation1', 2, 0);
      break
    case 30:
      animationGlitch('.superAnimation1', 0, 2);
      break
    case 31:
      animationGlitch('.superAnimation1', 2, 0);
      break
  }
});

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
  $(who).css('border', 'none')

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
    w = 9;
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

function blink(who, blinkBorder, blinkBg) {
  // console.log("blink");
  if (goblink == true) {
    setTimeout(function() {
      randomColor = getRandom(0, 255);
      if (blinkBorder == true) {
        $(who).css("border", "10px solid rgb(" + Math.round(randomColor) + "," + Math.round(randomColor) + "," + Math.round(randomColor) + ")")
      } else if (blinkBorder == false) {
        $(who).css("border", "10px solid rgb(255,255,255)")
      } else if (blinkBg == true) {
        $(who).css("background-color", "rgb(" + Math.round(randomColor) + "," + Math.round(randomColor) + "," + Math.round(randomColor) + ")")
      } else if (blinkBg == false) {
        $(who).css("background-color", "transparent")

      }
      blink(who, blinkBorder, blinkBg);
    }, 1);
  }
}
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

socket.on('animationRandom', function(data) {
  goBalayage = true;
  randomLightUp();
  console.log("random");


})

function randomLightUp() {
  var color = 0;

  var intRandom = setInterval(function() {
    color += 10;
    $('.randomLight')
      .css('display', 'block')
      .css('background-color', "rgb(" + Math.round(color) + "," + Math.round(color) + "," + Math.round(color) + ")")
    if (color >= 255) {
      clearInterval(intRandom);

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
      pulse('.page-pulse', 1)
      break;
    case 2:
      pulse('.page-pulse', 0.5)
      break
    case 3:
      pulse('.page-pulse', 0)
      break
  }
});

function pulse(who, opacity) {
  // var calculeMargin = (100 - size) / 2;

  $(who)
    .css('display', 'block')
    .fadeTo(100, opacity)
    // .css('width', size + '%')
    // .css('height', size + '%')
    // .css('left', calculeMargin + '%')
    // .css('top', calculeMargin + '%')

}

///-------------- annimation balayage

var goBalayage = false;

socket.on('animationBal', function(data) {
  console.log("data " + data.animationNbBal);

  switch (data.animationNbBal) {
    case 1:
      randomLightUp();
      break
    case 2:
      $('.randomLight').css('display', 'none')
      break
    case 3:
      randomLightUp();
      break
    case 4:
      $('.randomLight').css('display', 'none')
      break
    case 5:
      randomLightUp();
      break
    case 6:
      $('.randomLight').css('display', 'none')
      break
    case 7:
      randomLightUp();
      break
    case 8:
      $('.randomLight').css('display', 'none')
      break
    case 9:
      randomLightUp();
      break
    case 10:
      $('.randomLight').css('display', 'none')
      break
    case 11:
      randomLightUp();
      break
    case 12:
      $('.randomLight').css('display', 'none')
      break
    case 13:
      randomLightUp();
      break
    case 14:
      $('.randomLight').css('display', 'none')
      break
    case 15:
      randomLightUp();
      break
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

  if (data.animationNbWave == 1) {
    $('.page-wave').fadeTo('fast', 1)
    $('.page-wave').css('opacity', '1');
  } else if (data.animationNbWave == 2) {

    t1 = (stopWave - playWave);
    maxSpeed1 = 100 / t1;
    minSpeed1 = maxSpeed1 / 3;

    randomSpeed1 = getRandom(minSpeed1, maxSpeed1)

    realSpeed1 = randomSpeed1 / 100;

    // var tot = 0;
    // var calcTot = 0;
    // var smallRealSpeed1 = realSpeed1 / 1000
    //
    // var exponentiel = setInterval(function() {
    //   newRealSpeed1 = (smallRealSpeed1 += realSpeed1 / 2);
    //
    //   if (smallRealSpeed1 >= realSpeed1) {
    //     console.log("stop");
    //     newRealSpeed1 = newRealSpeed1;
    //     clearInterval(exponentiel)
    //   }
    // }, 10)


    downInt = setInterval(function() {
      getDown += realSpeed1;
      // console.log("newRealSpeed1 " + newRealSpeed1);
      // realSpeed1 += realSpeed1;
      $('.page-wave').css('top', getDown + '%')
      // tot++;
      // calcTot = tot * realSpeed1
      // console.log("tot " + tot + ' ' + calcTot);

    }, 10)
  } else if (data.animationNbWave == 3) {
    // console.log("2 ");
    clearInterval(downInt);
  } else if (data.animationNbWave == 4) {

    t2 = (stopWave - playWave);
    deltaT = t1 / t2;
    realSpeed2 = realSpeed1 * deltaT;

    upInt = setInterval(function() {
      getDown -= realSpeed2;
      $('.page-wave').css('top', getDown + '%')
    }, 10)

  } else if (data.animationNbWave == 5) {
    clearInterval(upInt)
    getDown = 0;
    $('.page-wave')
      .css('top', getDown + '%')
      .css('display', 'none')
  }
});


//-------------- full screen

$('.fs-button').click(function() {

  toggleFullScreen(document.body);

  $(this).css({
    'background-color': 'yellow'
  });

  $(this).animate({
    'opacity': '0'
  }, 600, function() {

    $(this).remove();
  });
});

(function($) {
  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
  $.fn.nodoubletapzoom = function() {
    if (IS_IOS)
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp,
          t1 = $(this).data('lastTouch') || t2,
          dt = t2 - t1,
          fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);


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
