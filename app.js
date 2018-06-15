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
    console.log("connection");
    console.log("ID user " + users);
  });


  socket.on('newUser', function() {

    console.log('new user');
    users.push(socket.id);
    // console.log("ID user " + users);
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
    var unsersLength = users.length;


    socket.broadcast.emit('hideWelcome', unsersLength);
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


  // ------------ random

  socket.on('animationRandom', function(data) {

    data.nbUsers = getRandom(1, users.length)
    console.log('data.nbUsers ' + data.nbUsers);
    socket.broadcast.emit('animationRandom', data);
  });

  //------------- Pulse

  socket.on('animationPulse', function(data) {
    socket.broadcast.emit('animationPulse', data);
  });

  //------------- tik
  var impaire = false;
  var tour = 0;
  socket.on('animationTik', function(data) {
    // socket.broadcast.emit('animationTik', data);


    nbTik = data.animationNbTik;

    // if (nbTik > 51) {
    //   // console.log("pus que 60 !");
    //   tour++;
    //
    //   if (tour <= 3) {
    //     impaire = true;
    //   } else if (tour >= 4) {
    //     impaire = false;
    //     if (tour == 6) {
    //       tour = 0;
    //     }
    //   }
    //
    //   if (impaire == true) {
    //     for (var i = 0; i < users.length; i++) {
    //       if (i % 2 == 1) {
    //         socket.broadcast.emit('animationTik', data);
    //
    //       // io.sockets.connected[users[i]].emit('animationTik', data);
    //       }
    //     }
    //   } else if (impaire == false) {
    //     for (var i = 0; i < users.length; i++) {
    //       if (i % 2 == 0) {
    //         socket.broadcast.emit('animationTik', data);
    //
    //       // io.sockets.connected[users[i]].emit('animationTik', data);
    //       }
    //     }
    //   }
    // } else {
    socket.broadcast.emit('animationTik', data);
  // }
  });

  //-------------- Balayage

  socket.on('animationBal', function(data) {

    var count = 0;
    var playBal = data.playBal;
    var stopBal = data.stopBal;

    var balTime = stopBal - playBal;
    var timePerUser = (balTime / users.length) - 0.02;

    if (data.animationNbBal > 13) {
      if (data.animationNbBal % 2 == 0) {
      } else {
        console.log('plus grand que 13');

        balayage();
      }
    } else {
      if (data.animationNbBal % 2 == 0) {
      } else {
        balayage();
      }
    }
    function balayage() {
      var intBal = setInterval(function() {
        if (count >= users.length /* - 1*/ ) {
          count = 0;
          clearInterval(intBal);
        } else {
          count++;
        }
        socket.broadcast.emit('animationBal', data, count);
      // io.sockets.connected[users[count]].emit('animationBal', data);
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
    // console.log("number " + nbDeFoisReturnPetit);

    if (nbDeFoisReturnPetit <= users.length) {
      siPetit(nbDeFoisReturn, nbDeFoisReturnPetit);
    } else {
      siGrand(nbDeFoisReturn, nbDeFoisReturnPetit);
    }

    function siPetit(nbDeFoisReturn, nbDeFoisReturnPetit) {
      // console.log("petit " + petit);

      petit++;
      last = users.length;

      last -= petit;
      console.log("last " + last);
      socket.broadcast.emit('animationReturn', data, last);
      // io.sockets.connected[users[last]].emit('animationReturn', data);
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
        console.log("last grand " + last);
        // console.log("grand position " + last);
        socket.broadcast.emit('animationReturn', data, last);

      // io.sockets.connected[users[last]].emit('animationReturn', data);
      } else {
        last = users.length;
        // console.log("grand position (else) " + (last));
        socket.broadcast.emit('animationReturn', data, last);

      // io.sockets.connected[users[last - 1]].emit('animationReturn', data);
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

  //----------------- Click

  socket.on('animationClick', function(data) {

    if (data.animationNbClick == 3) {
      var theMaster = getRandom(1, users.length)
    }
    socket.broadcast.emit('animationClick', data, theMaster);
    console.log("Click");
  });

  //----------------- Click Master

  socket.on('masterClick', function(data) {
    console.log('master ' + data.masterNb);
    // socket.broadcast.emit('animationClick', data);
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
