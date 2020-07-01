$(document).ready(function() {
 $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
     offset: '60px;'
   });
$('.js--scroll-to-plans').click(function () {
$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
});
$('.js--scroll-to-start').click(function () {
$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});
$('.js--wp-1').waypoint(function(direction) {
$('.js--wp-1').addClass('animated fadeIn');
}, {
offset: '50%'
});
$('.js--wp-2').waypoint(function(direction) {
$('.js--wp-2').addClass('animated fadeInUp');
}, {
offset: '50%'
});
$('.js--nav-icon').click(function() {
var nav = $('.js--main-nav');
var icon = $('.js--nav-icon i');

nav.slideToggle(200);

if (icon.hasClass('ion-navicon-round')) {
icon.addClass('ion-close-round');
icon.removeClass('ion-navicon-round');
} else {
icon.addClass('ion-navicon-round');
icon.removeClass('ion-close-round');
}
});
$('.demo').magnificPopup({
type:'image',
delegate:'a',
gallery: {
enabled:true
}
});
$('.popup-youtube').magnificPopup({
    type: 'iframe',
    // other options
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 

        patterns: {
          youtube: {
            index: 'youtube.com/', 

            id: 'v=',

            src: 'https://www.youtube.com/embed/%id%' 
          },


        },

        srcAction: 'iframe_src', 
      }
  });

    $('.popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

});