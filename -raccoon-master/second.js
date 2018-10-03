$(function() {
 $('.toggles button').click(function(){
  var get_id = this.id;
  var get_current = $('.posts .' + get_id);

  $('.post').not(get_current).hide(500);
  get_current.show(500);
 });

 $('#showall').click(function() {
  $('.post').show(500);
 });
});﻿


$(document).ready(function(){
  $("#slider-container").owlCarousel({
	loop: true,
	nav: true,
	navText: ["<img src='next.jpg'>","<img src='prev.jpg'>"],
	responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        1000:{
            items:8
        }
    }
	
  });
});


