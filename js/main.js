var currentColour = 0;
var colours = ['pink', 'teal', 'maroon', 'olive', 'purple', 'orange', 'navy', 'gray'];
var $btn = $('.colour-btn');

$btn.on('click', function () {
    $('.lb-nav li, .footer, .lb-close, border-btm').removeClass(colours[currentColour]);
    
     currentColour++;
    
    if (currentColour >= colours.length) {
        currentColour = 0;    
    }
    
    $('.lb-nav li, .footer, .lb-close, .border-btm').addClass(colours[currentColour]);
});

$('.desktop-nav, .nav').localScroll();




var $links = $('.top-nav-li a');

$links.on('click', function () {
     $('.nav-check').prop('checked', false);
});


   
    
    



