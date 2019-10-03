$(document).ready(function() {

  //Instantiate granim for dynamic canvas
  var granimInstance = new Granim({
    element: '#granim-canvas',
    name: 'granim',
    opacity: [1, 1],
    states : {
        "default-state": {
            gradients: [
              ['#8D12EB', '#AF61EB'],
              ['#2A68F4', '#6792F2'],
              ['#BC44F0', '#D088EE']
            ],
            transitionSpeed: 10000
          } 
      }
  }); 

  //Find required height and width and apply; 
  //Checks if screen is resized, and adjusts accordingly
  applyDynamicCanvas();
  
  $(window).on('resize', function(){
    applyDynamicCanvas()
  });

  //Logic for showing/hiding mobile toggles.
  var isNavOpen = false;
  $('#mobileNavMenuContent').hide();
  $('#navMenu').click(function(){
    if(isNavOpen){
      $('#mobileNavMenuContent').hide();
    }
    else{
      $('#mobileNavMenuContent').show();
    }
    isNavOpen = !isNavOpen;
  })

  //Hides nav dropdown on click
  $('a.navBookmark').click(function(){
    $('#mobileNavMenuContent').hide();
  })

  
  //Handle scrolling
  var mainHeight = $("#main").first().outerHeight();
  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: mainHeight/2+1000}});
	// build scenes
	var navBar = new ScrollMagic.Scene({triggerElement: "#skills", duration: mainHeight})
          .setClassToggle(".navBar .navHidden ", "navUnhidden") // add class toggle
          .addTo(controller);

          
  var toggleGlow = new ScrollMagic.Scene({triggerElement: "#idCardMain", duration: mainHeight})
          .setClassToggle(".glow", "glowBlue") // add class toggle
					.addTo(controller);

          // get the current offset
// set a new offset
  navBar.offset(200);
  toggleGlow.offset(50)

});

function applyDynamicCanvas(){
  var containerHeight = $("#intro").first();
  var containerWidth = $("#intro").width();

  $('#granim-canvas').css("height", containerHeight.outerHeight());
  $('#granim-canvas').css("width", containerWidth);
}


