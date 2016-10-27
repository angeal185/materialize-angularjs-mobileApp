angular.element(function(){
  'use strict';

  $('ul.tabs').tabs(); 
  $('.collapsible').collapsible();
  $('.modal-trigger').leanModal();
  angular.element(function () {
    var count = 0;
    var wordsArray = ["Creative", "Innovative", "Clean", "Beautiful"];
    setInterval(function () {
      count++;
      $("#changeText").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 3000);
  });

  var snapper = new Snap({
    element: document.getElementById('content'),
    hyperextensible: false
  });

  var addEvent = function addEvent(element, eventName, func) {
    if (element) {
      if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
      } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
      }
    }
  };

  addEvent(document.getElementById('open-left'), 'click', function(){
    if( snapper.state().state=="left" ){
      snapper.close('left');
      document.getElementById('blockui').style.display="none";
    } else {
      snapper.open('left');
      document.getElementById('blockui').style.display="block";
    }
  });

  var snapper2 = new Snap({
    element: document.getElementById('content'),
    hyperextensible: false
  });

  angular.element('#open-right').click(function(){
    if( snapper2.state().state=="right" ){
      snapper2.close('right');
      document.getElementById('blockui').style.display="none";
    } else {
      snapper2.open('right');
      document.getElementById('blockui').style.display="block";
    }
  });    


});




angular.element(function () {
        count = 0;
        wordsArray = ["Creative", "Innovative", "Clean", "Beautiful"];
        setInterval(function () {
          count++;
          angular.element("#changeText").fadeOut(400, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
          });
        }, 3000);
      });

//slidebox
;( function( $ ) {

	$( '.swipebox' ).swipebox();

} )( jQuery );



;( function( $ ) {

	$( '.swipebox' ).swipebox( {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		removeBarsOnMobile : true, // false will show top bar on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: false // true will return to the first image after the last image is reached
	} );

} )( jQuery );




      