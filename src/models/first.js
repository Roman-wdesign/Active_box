import $ from "jquery";


$(function () {
   let header = $("#header");
    let intro = $("#intro");
    let introH = intro.height();
    console.log(introH);

   header.addClass("fixed");
});