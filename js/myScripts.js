$(document).ready(function() {

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


  applyDynamicCanvas()

  $(window).on('resize', function(){
    applyDynamicCanvas()
  });

  var mainHeight = $("#main").first().outerHeight();
  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: mainHeight/2+1000}});
	// build scenes
	var socialBarVertical = new ScrollMagic.Scene({triggerElement: "#skills", duration: mainHeight})
          .setClassToggle("#socialBarVertical", "socialBarVerticalActive") // add class toggle
          .addTo(controller);
  
  var navBarVertical = new ScrollMagic.Scene({triggerElement: "#skills", duration: mainHeight})
          .setClassToggle("#navBarVertical", "navBarVerticalOffset") // add class toggle
          .addTo(controller);
          
  var toggleAll = new ScrollMagic.Scene({triggerElement: "#idCardMain", duration: mainHeight})
          .setClassToggle(".glow", "glowBlue") // add class toggle
					.addTo(controller);

          // get the current offset
// set a new offset
  navBarVertical.offset(200);
  socialBarVertical.offset(200);
  toggleAll.offset(50)




});

function applyDynamicCanvas(){
  var containerHeight = $("#intro").first();
  var containerWidth = $("#intro").width();

  $('#granim-canvas').css("height", containerHeight.outerHeight());
  $('#granim-canvas').css("width", containerWidth);
}


