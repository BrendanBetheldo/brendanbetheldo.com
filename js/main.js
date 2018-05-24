/*Show/Hide function for work Info*/
$(".hideContent").click(function(){
    $(this).toggleClass('showContent');
    $(".slideContent").slideToggle();
  });
/*End*/

/*Image Resize Function*/

var current_h = $('img').height();
var current_w = $('img').width();

$('.resize').hover(

function() {
    $(this).stop(true, false).animate({
        width: (current_w * 2.0),
        height: (current_h * 1.8)
    }, 300);
}, function() {
    $(this).stop(true, false).animate({
        width: current_w + 'px',
        height: current_h + 'px'
    }, 300);
});
/*End*/


/*Accordion*/
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});
