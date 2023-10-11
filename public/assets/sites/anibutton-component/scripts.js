// when document is ready run this
$(document).ready(() => { 

    // set initial state of switch
    $( 'i' ).fadeOut(1);
    $( ".switch-body-off p" ).slideToggle(100);
    $( "#arrow" ).animate({ "color": "#02bb00" }, "slow", () => {
        $( '#arrow' ).fadeIn("fast");
        $("i").toggleClass("rotate");
    } );
    
    // event handler for clicks on switch class
    $(".switch").click(function() { 

        // Toggle the classes off and on
        $(".switch-container").toggleClass("off on"); 

        // If element has class On or Off hide or show elements
        if($( ".switch-container" ).hasClass( "on" )){
            
            // fadeout arrow
            $( '#arrow' ).fadeOut();

            // animate icon colour change
            $( "i" ).animate({"color": "#ea0202"},1);
            $( '#redx' ).fadeIn(); // fade in X icon
            $( ".switch-body-off p" ).slideToggle(100); // hide OFF
            $( ".switch-body-on p" ).slideToggle(500); // show ON

            // rotate arrow icon
            $("i").toggleClass("rotate"); // add rotate class
            $("i").toggleClass("rotate");  

        } else if ($( ".switch-container" ).hasClass( "off" )) {
            // animate icon rotation
            $( '#redx' ).fadeOut();
            $( "i" ).animate({"color": "#02bb00"},1);
            $( '#arrow' ).fadeIn();
            $( ".switch-body-on p" ).slideToggle(100);
            $( ".switch-body-off p" ).slideToggle(500);

            // rotate arrow icon
            $("i").toggleClass("rotate"); 
            $("i").toggleClass("rotate");         
        }
    });
});