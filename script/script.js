   var targ = $('.spot');
   var bull = $('.shot');
   var keys = [];
  //This function helps target moves back and forth. Target will start moving back and
  //forth as soon as player clicks on the starts button.
  //
  $('.start').click(function(){

  function targetSlide(targetSpot, speed){

   $(targetSpot).animate({ marginLeft: "-=230px"},
      {
          duration: speed,
          complete: function ()
          {
              targetSpot.animate({ marginLeft: "+=230px" },
              {
                  duration: speed,
                  complete: function ()
                  {
                      targetSlide(targetSpot, speed);
                  }
              });
          }
      });
  };
  targetSlide($('.spot'), 5000); //image div is called with what speed the target moves back and forth.

  //This function checks if the player keypressed the uparrow which has a numerical value of 38
  // if player clicked on up arrow bullet would animate from the bottom with which is represent by
  //-300. Bullet hide it self as it reach right above the target area.
  //I was also trying to add multiple bullet image the player clicks on the uparrow


  function shoot(){

  window.addEventListener("keydown", keysPressed, false);
  // window.addEventListener("keyup", keysReleased, false);

  function keysPressed(e) {
        // store an entry for every key pressed
        keys[e.which] = true;

        // number represent the key value of right arrow
         if (keys[38]) {

            var audio = new Audio('audio/bulletHit.mp3');
            audio.play();

            function getImage(){

            var $bulletx = $('.shot').css('img','images/bullet.png');
            for (i = 0; i < 6; i++) {

            $bulletx.animate({top: '-300'}, '500') && ($('.shot').hide(20));

              ($bulletx).append('.ammu');

              console.log($bulletx)
             }
             }
             getImage();
          }

   }
  }
  shoot();
   // This code below supposed to look for the collision by checking the
   // height and the width of the each div. The if statement would check
   // whether the bullet top and left side touching meaning, if it is '>' and
   //'<' the height and width of the target.

  function collision(targ, bull) {
        var x1 = targ.offset().left;
        var y1 = targ.offset().top;
        var h1 = targ.outerHeight(true);
        var w1 = targ.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = bull.offset().left;
        var y2 = bull.offset().top;
        var h2 = bull.outerHeight(true);
        var w2 = bull.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;

      }
      window.setInterval(function() {
      $('#result').text(collision($('targ'), $('bull')));
      }, 200);


  });

  // This would reset/reload the page.
  $('.reset').click(function() {
    document.location.reload(true);
   });





