$('.desktop-nav, .mobile-nav').localScroll();

// Needs latest version of jQuery to run

$(function(){
    // shows buttons when js runs
    $('body').removeClass('noscript');
    
    //sets buttons to toggle data state
    $('.toggle-btn, .close-btn').click(function(){
        toggleNav();
      });

  });

function toggleNav(){
    if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
        //display nav when closed
        
        $('.site-wrapper').attr('data-state','slide-open');
        
    } else {
        
        // hide nav when open 
        $('.site-wrapper').attr('data-state','slide-closed');
    }
       
}



   
    
    



