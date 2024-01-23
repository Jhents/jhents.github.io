<script> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});
// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}
</script>

<!--ResponsiveSlides.js code-->
<script src="js/responsiveslides.min.js"></script>
<script>
  $(function() {
  	$(".rslides").responsiveSlides({
    	auto: true,             // Boolean: Animate automatically, true or false
		speed: 1100,             // Integer: Speed of the transition, in milliseconds
		timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
		pager: true,           // Boolean: Show pager, true or false
		nav: true,             // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: false,    // Boolean: Pause when hovering controls, true or false
		prevText: "",   // String: Text for the "previous" button
		nextText: "",       // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "centered-btns",   // String: Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
	});
  }); 	


  // Set the path to the folder containing the pictures
  
</script>

<script> var folderPath = 'JhentsPic';

	// Get a reference to the UL element
	var imageList = document.getElementById('imageList');

	// Fetch the list of files in the folder using fetch API
	fetch(folderPath)
	  .then(function (response) {
		return response.json();
	  })
	  .then(function (data) {
		// Loop through the array of image file names
		for (var i = 0; i < data.length; i++) {
		  // Create an LI element
		  var listItem = document.createElement('li');

		  // Create an image element
		  var image = document.createElement('img');
		  image.src = folderPath + '/' + data[i];

		  // Append the image to the LI element
		  listItem.appendChild(image);

		  // Append the LI element to the UL element
		  imageList.appendChild(listItem);
		}
	  });
	  </script>
      </script>