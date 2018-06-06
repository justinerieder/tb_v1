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
//------------------ reset clickin
socket.on('animationResetClick', function(data) {
  console.log("reset click");

  $('.page-animation').fadeTo("slow", 0, function() {
    negativeRemover();
    $('.page-animation')
      .css('display', 'block')
      .css('opacity', '1')
  });
});


// socket.on('exec', function(animFunc, play, stop) {
//
//   console.log(animFunc.superAnimationNb);
//   var f = eval(animFunc.superAnimationNb);
//   f();
//
// });
var speechTop = 0;
var realSpeechTop;
var nbTexte = 8;
var calculeMargintexte = 100 / (nbTexte + 2)


for (var i = 0; i < nbTexte; i++) {
  speechTop += calculeMargintexte;
  $('.speech' + i).css('top', speechTop + '%')
}



var phrase = 'Hi and welcome to the dynamic_circle experience / Dynamic_circle can not exist without your participation / Dynamic_circle needs co-authors to take place / author means person at the origin / you are the authors of this moment / And authors makes choices / As the way you’re clicking on your phone / Or the way you have positioned yourself / Lets try to make our circle more dynamic / Please take a step back / Being author in the field of Interaction Design / Its accepting that users become co-author / of his own creation'
var sepatator = ' / '
var phraseCut = phrase.split(sepatator);
var motParPhraseCute;
var longueurPhrase = [];

for (var i = 0; i < phraseCut.length; i++) {
  motParPhraseCute = phraseCut[i].split(" ");
  longueurPhrase.push(motParPhraseCute);
}



var textPosition = 0;
var currentTextPosition;
var phrasePosition = 0;
var phraseCurrentPosition;


//----------------- Words

socket.on('animationWord', function(theWord, animationNbWord) {

  phrasePosition++;
  phraseCurrentPosition = phrasePosition - 1;
  console.log("phrase position" + phraseCurrentPosition);
  console.log(longueurPhrase[phraseCurrentPosition].length);
  console.log(longueurPhrase[phraseCurrentPosition]);

  var texteInterval = setInterval(function() {
    textPosition++;
    currentTextPosition = textPosition - 1;
    console.log("nombre de lettre");
    $('.speech' + currentTextPosition)
      .html(longueurPhrase[phraseCurrentPosition][textPosition - 1])
      .fadeTo("slow", 1)
    $('.speech')
      .css('left', '20px')
      .css("color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")")

    if (textPosition >= longueurPhrase[phraseCurrentPosition].length) {
      clearInterval(texteInterval)
      textPosition = 0;
      console.log("hey clear");
    }

  }, 150);
});

var canRemove = false;
var goRemover = true;
var canRemoveTime = 0;
var timeToRemove;
var speechOpacity = 1;
var minusOpacity = -1;
var speechCurrentOpacity;

socket.on('animationWordRemove', function(removerTime, playRemove, stopRemove) {

  // $('.speech').fadeTo("slow", 0)

  $('.speech').fadeTo("slow", 0, function() {
    console.log("done fadeto");
    $('.speech').empty();
  });

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
      // console.log("bigFade4 " + play + " - " + stop);
      animation4(colorH);
      break;
    case 5:
      // console.log("bigFade5 " + play + " - " + stop);
      animation5(colorH);
      break;
    case 6:
      // console.log("bigFade6 " + play + " - " + stop);
      animation6(colorH);
      break;
    case 7:
      // console.log("bigFade7 " + play + " - " + stop);
      animation7(colorH);
      break;
    case 8:
      // console.log("bigFade8 " + play + " - " + stop);
      animation8(colorH);
      break;
    case 9:
      // console.log("bigFade9 " + play + " - " + stop);
      animation9(colorH);
      break;
    case 10:
      // console.log("bigFade10 " + play + " - " + stop);
      animation10(colorH);
      break;
    case 11:
      // console.log("bigFade11 " + play + " - " + stop);
      animation11(colorH);
      break;
    case 12:
      console.log("bigFade12 " + play + " - " + stop);
      animation12(colorH);
      break;
    case 13:
      // console.log("bigFade13 " + play + " - " + stop);
      animation13(colorH);
      break;
    case 14:
      // console.log("bigFade13 " + play + " - " + stop);
      animation14(colorH);
      break;
    case 15:
      // console.log("bigFade13 " + play + " - " + stop);
      animation15(colorH);
      break;
    case 16:
      // console.log("bigFade13 " + play + " - " + stop);
      animation16(colorH);
      break;
    case 17:
      // console.log("bigFade13 " + play + " - " + stop);
      animation17(colorH);
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
  // console.log("fade to blanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation10(colorH) {
  colorIndex = 255;
  // console.log("blaaaaanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation11(colorH) {
  colorIndex -= colorH;
  //console.log("fade noiir");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
// ------- ici il faut faire les battements et enlevè le 12

function animation12(colorH) {
  colorIndex = 0;
  // console.log("reste noir");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation13(colorH) {
  colorIndex += colorH;
  //console.log("fade blanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation14(colorH) {
  colorIndex = 255;
  //console.log("reste blanc");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation15(colorH) {
  colorIndex -= colorH;
  //console.log("fade black");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation16(colorH) {
  colorIndex = 255;
  //console.log("fade black");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
  $('.page-animation').css("background-color", "rgb(" + Math.round(colorIndex) + "," + Math.round(colorIndex) + "," + Math.round(colorIndex) + ")");
}
function animation17(colorH) {
  colorIndex -= colorH;
  //console.log("fade black");
  //console.log("colorIndex3 " + colorH + " - " + colorIndex);
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

function tiktik1() {
  console.log("tiktik1");
  $('.superAnimation2')
    .css('display', "block")
    .css('top', '7%').css('left', '0')
    .css('width', "100%")
    .css('height', '15px')
}
function tiktik2() {
  console.log("tiktik2");
  $('.superAnimation2')
    .css('display', "block")
    .css('top', '90%')
    .css('left', '0')
    .css('width', "100%")
    .css('height', '15px')
}
function tiktik3() {
  console.log("tiktik3");
  $('.superAnimation2')
    .css('display', "block")
    .css('top', '7%').css('left', '0')
    .css('width', "100%")
    .css('height', '15px')
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
