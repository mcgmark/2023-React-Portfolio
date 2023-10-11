// Tab Panels
$(document).ready(function(){
	// grab all container panel DIVs
	var tabContainers = $('div.tabs > div > div');
	// hide them all, then show the first one
	tabContainers.hide().filter(':first').show();
	// set the first tab to class="selected"
	$('div.tabs nav ul.tabNavigation a:first').addClass('selected');
	// add onclick handlers to all tabs
	$('div.tabs nav ul.tabNavigation a').click(function(){
		// hide all tabContainers
		tabContainers.fadeOut()
		// select only the tabContainer with with ID that matches the ID of the anchor tag clicked
		tabContainers.filter(this.hash)
		.fadeIn() // fadeIn the elememt
		// animate the element movements using jquery. 
		.animate({top: '10px'}, {queue: false}) // animate the element down 10px from the top and do it immediately while fadeIn
		.animate({top: '-5px'}) // Move element up to -5px 
		.animate({top: '5px'}) // Move element down to 5px
		.animate({top: '0px'}) // move element up to 0px
		// remove class="selected" from all tabs
		$('div.tabs nav ul.tabNavigation a').removeClass('selected');
		// set class="selected" on the tab that was just clicked
		$(this).addClass('selected');
		// stop following links
		return false;
	});
});