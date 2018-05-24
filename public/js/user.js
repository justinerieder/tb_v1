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

socket.on('animation', function(animationNb, play, stop) {

  var colorH = 255 / (stop - play) / 10;

  switch (animationNb) {
    case 1:
      //console.log("bigFade1 " + play + " - " + stop);
      animation1(colorH);
      break;
    case 2:
    // console.log("bigFade2 " + play + " - " + stop);

      animation2(colorH);
      break;
    case 3:
      // console.log("bigFade3 " + play + " - " + stop);
      animation3(colorH);
      break;
    case 4:
      console.log("bigFade4 " + play + " - " + stop);
      animation4(colorH);
      break;
    case 5:
      console.log("bigFade5 " + play + " - " + stop);
      animation5(colorH);
      break;
    case 6:
      console.log("bigFade6 " + play + " - " + stop);
      animation6(colorH);
      break;
    case 7:
      console.log("bigFade7 " + play + " - " + stop);
      animation7(colorH);
      break;
    case 8:
      console.log("bigFade8 " + play + " - " + stop);
      animation8(colorH);
      break;
    case 9:
      console.log("bigFade9 " + play + " - " + stop);
      animation9(colorH);
      break;
    case 10:
      console.log("bigFade10 " + play + " - " + stop);
      animation10(colorH);
      break;
    case 11:
      console.log("bigFade11 " + play + " - " + stop);
      animation11(colorH);
      break;
    case 12:
      console.log("bigFade12 " + play + " - " + stop);
      animation12(colorH);
      break;
    case 13:
      console.log("bigFade13 " + play + " - " + stop);
      animation13(colorH);
      break;
  }

});

var colorIndex = 0;
var codeColor;

function animation1(colorH) {
  colorIndex += colorH;

  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
// console.log($('.page-animation').css("background-color"));
}
function animation2(colorH) {
  colorIndex -= colorH;
  //  console.log("colorIndex2 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation3(colorH) {
  colorIndex += colorH;
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation4(colorH) {
  colorIndex -= colorH;
  if (colorIndex >= 255) {
    colorIndex = 255;
  }
  //console.log("colorIndex4 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation5(colorH) {
  colorIndex = 0;
  //console.log("colorIndex5 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation6(colorH) {
  colorIndex += colorH;
  if (colorIndex >= 255) {
    colorIndex = 255;
  }
  //console.log("colorIndex6 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation7(colorH) {
  colorIndex -= colorH;
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation8(colorH) {
  colorIndex = 0;
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation9(colorH) {
  colorIndex += colorH;
  console.log("fade to blanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation10(colorH) {
  colorIndex = 255;
  console.log("blaaaaanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation11(colorH) {
  colorIndex = 0;
  console.log("noiiiiiiir");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation12(colorH) {
  colorIndex += colorH;
  console.log("fade blanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation13(colorH) {
  colorIndex -= colorH;
  console.log("fade black");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
//----______Annimation drum !!!

socket.on('animationDrum', function(data) {
  console.log("data " + data.animationNbDrum);

  switch (data.animationNbDrum) {
    case 1:
      console.log("go drum animation1");
      drum1();
      break;
    case 2:
      console.log("go drum animation2");
      drum2();
      break;
    case 3:
      console.log("go drum animation3");
      drum3();
      break;
    case 4:
      console.log("go drum animation4");
      drum4();
      break;
    case 5:
      console.log("go drum animation5");
      drum5();
      break;
    case 6:
      console.log("go drum animation6");
      drum6();
      break;
    case 7:
      console.log("go drum animation7");
      drum7();
      break;
    case 8:
      console.log("go drum animation8");
      drum8();
      break;
    case 9:
      console.log("go drum animation9");
      drum9();
      break;
    case 10:
      console.log("go drum animation10");
      drum10();
      break;
  }
});

var rectSizes = [90, 70, 60, 50, 40, 60, 50, 40, 30, 20]

function drum1() {
  var calculeMargin = (100 - rectSizes[0]) / 2
  $('.drum')
    .css('display', 'block')
    .css('background-color', 'white')
    .css('width', rectSizes[0] + '%')
    .css('height', rectSizes[0] + '%')
    .css("margin", calculeMargin + '%')
}
function drum2() {
  var calculeMargin = (100 - rectSizes[1]) / 2
  $('.drum')
    .css('width', rectSizes[1] + '%')
    .css('height', rectSizes[1] + '%')
    .css("margin", calculeMargin + '%')
}
function drum3() {
  var calculeMargin = (100 - rectSizes[2]) / 2
  $('.drum')
    .css('width', rectSizes[2] + '%')
    .css('height', rectSizes[2] + '%')
    .css("margin", calculeMargin + '%')
}
function drum4() {
  var calculeMargin = (100 - rectSizes[3]) / 2
  $('.drum')
    .css('width', rectSizes[3] + '%')
    .css('height', rectSizes[3] + '%')
    .css("margin", calculeMargin + '%')
}
function drum5() {
  var calculeMargin = (100 - rectSizes[4]) / 2
  $('.drum')
    .css('width', rectSizes[4] + '%')
    .css('height', rectSizes[4] + '%')
    .css("margin", calculeMargin + '%')
}
function drum6() {
  var calculeMargin = (100 - rectSizes[5]) / 2
  $('.drum')
    .css('width', rectSizes[5] + '%')
    .css('height', rectSizes[5] + '%')
    .css("margin", calculeMargin + '%')
}
function drum7() {
  var calculeMargin = (100 - rectSizes[6]) / 2
  $('.drum')
    .css('width', rectSizes[6] + '%')
    .css('height', rectSizes[6] + '%')
    .css("margin", calculeMargin + '%')
}
function drum8() {
  var calculeMargin = (100 - rectSizes[7]) / 2
  $('.drum')
    .css('width', rectSizes[7] + '%')
    .css('height', rectSizes[7] + '%')
    .css("margin", calculeMargin + '%')
}
function drum9() {
  var calculeMargin = (100 - rectSizes[8]) / 2
  $('.drum')
    .css('width', rectSizes[8] + '%')
    .css('height', rectSizes[8] + '%')
    .css("margin", calculeMargin + '%')
}
function drum10() {
  var calculeMargin = (100 - rectSizes[9]) / 2
  $('.drum')
    .css('width', rectSizes[9] + '%')
    .css('height', rectSizes[9] + '%')
    .css("margin", calculeMargin + '%')
}



//----______Annimation glitch !!!

var stopSuperAnimation3 = false;
var goblink = false;

socket.on('superAnimation', function(data) {
  console.log("data " + data.superAnimationNb);

  switch (data.superAnimationNb) {
    case 1:
      console.log("go super animation1");
      superAnimation1();
      break;
    case 2:
      console.log("go super animation2");
      kate();
      superAnimation2();
      break
    case 3:
      // kate();
      superAnimation3();
      break
    case 4:
      stopSuperAnimation3 = true;
      var number = data.superAnimationNb;
      goblink = true;
      blink();
      superAnimation4(number);
      break
    case 5:
      number = data.superAnimationNb;
      superAnimation4(number);
      break
    case 6:
      number = data.superAnimationNb;
      superAnimation4(number);
      break
    case 7:
      number = data.superAnimationNb;
      superAnimation4(number);
      break
    case 8:
      goblink = false;
      $(".superAnimationRect").css("display", "none")

  }
});

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

var randomColor;

function blink() {
  if (goblink == true) {
    setTimeout(function() {
      randomColor = getRandom(0, 255);
      //console.log("randomColor " + randomColor);

      $('.superAnimationRect').css("border", "10px solid rgb(" + Math.round(randomColor) + "," + Math.round(randomColor) + "," + Math.round(randomColor) + ")")

      //rgb(" + Math.round(randomColor) + ";" + Math.round(randomColor) + ";" + Math.round(randomColor) + ")")
      console.log($('.superAnimationRect4').css("border"));

      blink();
    }, 1);
  }

}

function kate() {
  $('.superAnimation')
    .css('display', "none")
    .css('top', '0')
    .css('left', '0')
    .css('width', "100%")
    .css('height', '100%')
    .css('margin', "0px")
}

///-------------- annimation balayage

var goBalayage = false;

socket.on('animationBal', function(data) {
  console.log("data " + data.animationNbBal);

  switch (data.animationNbBal) {
    case 1:
      goBalayage = true;
      lightUp();
      console.log("1 balagae");
      break
  // case 3:
  //   goBalayage = false;
  //   break
  // case 4:
  //   goBalayage = true;
  //
  //   lightUp();
  //   console.log("2 balagae");
  //
  //   break
  }
})
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
