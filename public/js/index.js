$( document ).ready( function() {

  /* loading */
  $( ".load_overlay" ).slideUp('slow');

  /* CURRENT */
  function loadCurrentEventWidth() {
    var currentEventWidth = 0;
    $( '.current_event').each( function() {
      if( $( this ).width() <= 1 ) {
        return false;
      } else {
        currentEventWidth += $( this ).width(); 
      }
    });
    $( '.current' ).width( currentEventWidth );
  }

  if( !loadCurrentEventWidth() ) {
    setTimeout( loadCurrentEventWidth, 500 );
  }

  /* ABOUT */
  var isNav = false;
  var navOverlay = $( ".nav_overlay" );
  $( "header .menu" ).click( function() {
    if( !isNav ) {
      navOverlay.slideDown();
      $( this ).fadeOut( function() {
        $( this ).attr( "src","../media/close_menu_icon_white.png" )
        $( this ).fadeIn()
      });
      isNav = true;
    } else {
      navOverlay.slideUp();
      $( this ).fadeOut( function() {
        $( this ).attr( "src","../media/menu_icon_white.png" )
        $( this ).fadeIn()
      });
      isNav = false;
    }
  });

  /* PROJECT BANNER */
  $( ".project_banner" ).each( function() {
    // project banner image toggle
    var projectBannerImage = $( this ).find( ".project_banner_image" );

    projectBannerImage
    .mouseenter( function() {  
      $( this ).animate({
        height: "toggle"
      }, 400, function() {
      });
    });

    $( this )
    .mouseleave( function() {  
      projectBannerImage.animate({
        height: "toggle"
      }, 400, function() {
      });
    });

    // populate project banner
    $( this ).css({
      "background-color": $( this ).data( 'bgcolor' ),
      "color" : $( this ).data( 'color' )
    });
    $( this ).find( ".project_banner_image" )
      .css( "background-image", $( this ).data( 'image' ) );
  });

  /* PROJECT PAGE */
  $( ".page" ).each( function() {
    $( this ).find( ".page_images" )
      .css({
        "background-color": $( this ).data( 'bgcolor' ),
        "color": $( this ).data( 'color' ) 
      });
    $( this ).find( ".page_information_logo" )
      .css({
        "background-color": $( this ).data( 'bgcolor' ),
        "color": $( this ).data( 'color' ) 
      });
    $( this ).find( ".page_information_link" )
      .css({
        "color": $( this ).data( 'bgcolor' ) ,
        "border-color": $( this ).data( 'bgcolor' )
      });


    // carousel 
    var pageImages = $( this ).find( ".page_images" );
    pageImages.find( ".next" ).click( function() {
      var active = pageImages.find( ".active" );
      var nextNeighbor = active.next( ".page_image" );
      if( nextNeighbor.length ){
        nextNeighbor.addClass( "active" );
      } else {
        pageImages.find( ".page_image:first" ).addClass( "active" );
      }
      active.removeClass( "active" );
    });
    pageImages.find( ".prev" ).click( function() {
      var active = pageImages.find( ".active" );
      var prevNeighbor = active.prev( ".page_image" );
      if( prevNeighbor.length ){
        prevNeighbor.addClass( "active" );
      } else {
        pageImages.find( ".page_image:last" ).addClass( "active" );
      }
      active.removeClass( "active" );
    });
  });

  /* MOBILE HACKS */
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // reorders the left with the right so that it appears below
    $( ".page_information_left" ).insertAfter( ".page_information_right" );
  }

});
