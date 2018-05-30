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
    case 14:
      console.log("bigFade13 " + play + " - " + stop);
      animation14(colorH);
      break;
  // case 15:
  //   console.log("bigFade13 " + play + " - " + stop);
  //   animation15(colorH);
  //   break;
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
  colorIndex -= colorH;
  console.log("fade noiir");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
// ------- ici il faut faire les battements et enlevè le 12

function animation12(colorH) {
  colorIndex = 0;
  console.log("reste noir");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation13(colorH) {
  colorIndex += colorH;
  console.log("fade blanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation14(colorH) {
  colorIndex = 255;
  console.log("reste blanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
// function animation15(colorH) {
//   colorIndex -= colorH;
//   console.log("fade black");
//   //console.log("colorIndex3 " + colorH + " - " + colorIndex);
//   $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
// }
//----______Annimation drum !!!

socket.on('animationDrum', function(data) {
  console.log("data " + data.animationNbDrum);



  switch (data.animationNbDrum) {
    case 1:
      initDrum();
      drum1();
      break;
    case 2:
      initDrum();
      break;
    case 3:
      drum2();
      break;
    case 4:
      initDrum();
      break;
    /*_----------------------*/
    case 5:
      drum1();
      break;
    case 6:
      initDrum();
      break;
    case 7:
      drum2();
      break;
    case 8:
      initDrum();
      break;
    case 9:
      drum1();
      break;
    case 10:
      initDrum();
      break;
  }
});


var drumW = 20 * 1.7;
var drumH = 20;
var marginCalc = (100 - drumW) / 2;

var mobilHeight = 100;
var marginTopCalc = (mobilHeight / 3) - (drumH / 2);
var marginTopCalc2 = (2 * (mobilHeight / 3)) - (drumH / 2);
var marginTopCalc3 = (3 * (mobilHeight / 3)) - (drumH / 2);


function initDrum() {
  console.log("initDrum");

  $(".drum0")
    .css("display", "none")
    .css("width", drumW + "%")
    .css("height", drumH + "%")
    .css("margin-left", marginCalc + "%")
    .css("margin-top", marginTopCalc + "%")
  $(".drum1")
    .css("display", "none")
    .css("width", drumW + "%")
    .css("height", drumH + "%")
    .css("margin-left", marginCalc + "%")
    .css("margin-top", marginTopCalc2 + "%")
  $(".drum2")
    .css("display", "none")
    .css("width", drumW + "%")
    .css("height", drumH + "%")
    .css("margin-left", marginCalc + "%")
    .css("margin-top", marginTopCalc3 + "%")
}

var aleatoire = getRandom(0, 2);
console.log("aleatoire " + aleatoire);

function drum1() {
  console.log("goDrum");
  $(".drum" + aleatoire).css("display", "block")
}
function drum2() {
  console.log("goDrum");
  $(".drum" + aleatoire).css("display", "block");
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
      // console.log($('.superAnimationRect4').css("border"));

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

///-------------- annimation random
var currentNb = 100;

socket.on('animationRandom', function(data) {
  goBalayage = true;
  randomLightUp();
  console.log("random");


})

function randomLightUp() {
  var color = 0;
  // $('.randomLight')
  //   .css('display', 'block')
  //   .css('background-color', 'white')

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
