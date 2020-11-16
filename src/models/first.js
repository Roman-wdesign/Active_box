import $ from 'jquery';
import 'slick-carousel';



//Fixed Header

$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();



    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH){
        if( scrollPos >introH ){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


//    Smooth scroll

   $("[data-scroll]").on("click", function (event) {
       event.preventDefault();

       let elementID = $(this).data('scroll');
       let elementOffset = $(elementID).offset().top;

       nav.removeClass("show");



       $('html, body').animate({
           scrollTop: elementOffset - 70
       }, 500);
   });

    //Nav Toggle

     let nav = $("#nav");
     let navToggle = $("#navToggle");

    navToggle.on ("click", function (e) {
        e.preventDefault();
        nav.toggleClass("show");
    });

    //Reviews



});
$(document).ready(function () {

    $('.reviews__slider').slick({

        infinite: true,
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing:'ease',
        initialSlide: 0,
    });

});