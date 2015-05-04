$( document ).ready( function() {
  /* ABOUT */
  var isAbout = false;
  var aboutOverlay = $( ".about_overlay" );
  $( "header .menu" ).click( function() {
    if( !isAbout ) {
      aboutOverlay.fadeIn();
      $( this ).fadeOut( function() {
        $( this ).attr( "src","../media/close_menu_icon_black.png" )
        $( this ).fadeIn()
      });
      isAbout = true;
    } else {
      aboutOverlay.fadeOut();
      $( this ).fadeOut( function() {
        $( this ).attr( "src","../media/menu_icon_black.png" )
        $( this ).fadeIn()
      });
      isAbout = false;
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

});
