
// $(document).ready(function () {
//   var player = $('#player');
//   var usrname =
//     if(window.location.href.indexOf("name") > -2) {
//        // alert("your url contains the name username");
//     }
// });


$('#start').click(function(){

function targetSlide(){
  var $targ = $('#spot');
  // console.log($targ.offset().left);
  var distance = 100;

  setInterval(function(){
    $targ.css('left', distance + 'px');
    // var targ = $('#spot').offset().left
    // console.log(targ);
      if(distance <- 40){
        distance;
      } else {
        distance -= 50;

      }
      }, 200);
  }

targetSlide();


// $( "#start" ).click(function() {
//   $( '#shot' ).hide( 900, function() {
//     // $( this ).remove();
//   });
// });

// var keys = [];
  // $('#start').click(function(){
   $('#shot').animate({top: '-5'}, '100');
    var targ = $('#shot').offset().left
    console.log(targ);
      //  $('#game' ).click(function() {
      //  $('#game' ).hide();
      //   });
      //  $('#btn').click(function() {
      //  $('#game').show();
      // });
  // });

  // var place = 'first';
  // var catched = false;

  // window.addEventListener("keydown", keysPressed, false);
  // window.addEventListener("keyup", keysReleased, false);

  // function keysPressed(e) {
  //     // store an entry for every key pressed
  //     keys[e.which] = true;


  //     // number represent the key value of z
  //     if (keys[38] ) {

  //       if($('#shot').position().top -=5) {
  //         // animate from left to right
  //        $('#shot').animate({top: '-5'}, 0);

  //        } else {
  //        $('#shot').animate({top: 0}, function(){
  //           // catchFly();
  //           // $('#result2').text('You are  ' + place + ' to catch the fly' );
  //           //  return false;ß

  //         });
  //        }

  //     }
  // }

  // function keysReleased(e) {
  //     // mark keys that were released
  //     keys[e.which] = false;
  // }
// function collision(){
//   if ($('#target').offset({ top: 10, left: 30 }) === $('#ammu').offset({ top: 10, left: 30 })){
//       alert('they met');
//    }
//    collision();
// }


  });

