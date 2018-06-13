var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require('fs');
var path = require('path');


server.listen(8080);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname + '/public/pages/user.html'));

})
  .get('/adminbadass', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/pages/admin.html'));

  })
  .get('/display', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/pages/display.html'));

  })
  .use(function(req, res, next) {});


/**
 * STEP:
 * 0 -> welcome
 * 1 -> LIVE
 */

var idDisplay;
var idAdmin = [];
var step = 0;
var winner = [];
var users = [];
var nbVideoLoaded = 0;
var txtIsHide = 0;
var loadVideo = 0;
// var firstMoit = [];
// var secondMoit = [];


io.on('connection', function(socket) {

  socket.on('resetUser', function() {
    users = [];
    console.log("ID user " + users);
  });


  socket.on('newUser', function() {

    console.log('new user');
    users.push(socket.id);
    console.log("ID user " + users);
    console.log("users.length " + users.length);

    socket.emit('showNb', users.length);

    //users.push(socket);

    socket.emit('welcome', {
      step: step,
      loadVideo: loadVideo
    });

    for (var i = 0; i < idAdmin.length; i++) {

      socket.to(idAdmin[i]).emit('nbUserChange', {
        nbUser: users.length,
        nbVid: nbVideoLoaded
      });
    }

  });

  socket.on('hideWelcome', function() {

    socket.broadcast.emit('hideWelcome');
  });

  socket.on('animation', function(data) {
    var animationNb = data.animationNb;
    var stop = data.stop;
    var play = data.play;
    console.log("animation");

    animation(animationNb, play, stop);

  //socket.broadcast.emit('animation', data);
  });

  var currentTime = 0;
  var incrementation = 100;
  function animation(animationNb, play, stop) {
    //console.log(animationNb);
    socket.broadcast.emit('animation', animationNb, play, stop);
    currentTime += incrementation;
    //console.log("currentTime " + currentTime);

    setTimeout(function() {
      if (currentTime <= stop * 1000) {

        //console.log(currentTime + " - " + stop * 1000);
        animation(animationNb, play, stop);
      } else {
        //currentTime = 0;
      }
    }, incrementation);

  }

  socket.on('superAnimation', function(data) {
    socket.broadcast.emit('superAnimation', data);
  });

  socket.on('exec', function(data) {
    socket.broadcast.emit('exec', data);
  });

  socket.on('animationRandom', function(data) {
    //  socket.broadcast.emit('animationRandom', data);

    var randomUser = getRandom(0, (users.length - 1));
    console.log("random user " + randomUser + " " + (users.length - 1));
    io.sockets.connected[users[randomUser]].emit('animationRandom', data);
  });

  //------------- Pulse

  socket.on('animationPulse', function(data) {
    socket.broadcast.emit('animationPulse', data);
  });

  //------------- tik

  socket.on('animationTik', function(data) {
    socket.broadcast.emit('animationTik', data);
  });

  //-------------- Balayage

  socket.on('animationBal', function(data) {
    //console.log("animationBal " + data.playBal);
    var count = 0;
    var playBal = data.playBal;
    var stopBal = data.stopBal;

    var balTime = stopBal - playBal;
    console.log("time " + balTime);

    var timePerUser = balTime / users.length;
    console.log("timeParUsers " + timePerUser);

    io.sockets.connected[users[0]].emit('animationBal', data);
    balayage();


    function balayage() {
      var intBal = setInterval(function() {
        if (count >= users.length - 1) {
          count = 0;
          clearInterval(intBal);
        } else {
          count++;
        }
        io.sockets.connected[users[count]].emit('animationBal', data);
      }, timePerUser * 1000);
    }
  // socket.broadcast.emit('animationBal', data);
  });

  //----------------- return
  var last;
  var returnCount = 0;
  var nbDeFoisReturn;
  var petit = 0;
  var grand = 0;
  var grandiose = 0;
  var avance = 0;
  var minus = 7;
  var calcule;
  socket.on('animationReturn', function(data) {
    nbDeFoisReturn = data.nbDeFoisReturn;
    nbDeFoisReturnPetit = data.nbDeFoisReturnPetit;
    console.log("number " + nbDeFoisReturnPetit);

    if (nbDeFoisReturnPetit <= users.length) {
      siPetit(nbDeFoisReturn, nbDeFoisReturnPetit);
    } else {
      siGrand(nbDeFoisReturn, nbDeFoisReturnPetit);
    }

    function siPetit(nbDeFoisReturn, nbDeFoisReturnPetit) {
      console.log("petit " + petit);

      petit++;
      last = users.length;

      last -= petit;
      console.log("last " + last);
      io.sockets.connected[users[last]].emit('animationReturn', data);
      if (petit == nbDeFoisReturnPetit) {
        console.log("finito petit");
        petit = 0;
      }
    }

    function siGrand(nbDeFoisReturn, nbDeFoisReturnPetit) {
      grand++;
      last = users.length;
      avance = (nbDeFoisReturnPetit - grand) + 1;
      calcule = nbDeFoisReturnPetit - minus;
      // console.log("avance " + avance);
      // console.log("nbDeFoisReturnPetit " + (nbDeFoisReturnPetit - 1));
      if (avance < nbDeFoisReturnPetit - calcule) {
        grandiose++;
        last = users.length;
        last -= grandiose;
        // console.log("grand position " + last);
        io.sockets.connected[users[last]].emit('animationReturn', data);
      } else {
        last = users.length;
        // console.log("grand position (else) " + (last));

        io.sockets.connected[users[last - 1]].emit('animationReturn', data);
      }
      if (last == 0) {
        console.log("finito");
        last = users.length;
        grand = 0;
        grandiose = 0;
        petit = 0;
      }
    }


  });

  //----------------- wave

  socket.on('animationWave', function(data) {
    console.log("serveur wave");
    socket.broadcast.emit('animationWave', data);
  });

  //----------------- boom

  socket.on('animationBoom', function(data) {
    socket.broadcast.emit('animationBoom', data);
  // console.log("boom");
  });
  //----------------- Breath

  socket.on('animationBreath', function(data) {
    socket.broadcast.emit('animationBreath', data);
  // console.log("Breath");
  });

  //----------------- Click

  socket.on('animationClick', function(data) {
    socket.broadcast.emit('animationClick', data);
    console.log("Click");
  });
  //----------------- Sound

  socket.on('animationSound', function(data) {
    socket.broadcast.emit('animationSound', data);
    console.log("Click");
  });



  socket.on('updateVideo', function(vTime) {
    socket.broadcast.emit('updateVideo', vTime);
  });
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
