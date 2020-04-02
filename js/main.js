
var typed = new Typed('.type', {
    strings: ['Designer', 'Developer','Freelancer'],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
  });
/* Hamburger Menu */

$(".menu").click(function() {
	$(".menu").toggleClass("active");
	$(".navbar-menu").toggleClass("active");
});





/*==================================
            protfolio
====================================*/

$(window).on('load', function () {

  var $projects = $('#isotope-container');

  $projects.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
  });


  //filter items on button click
  $('#isotope-filter').on('click', 'button', function () {

      //get filter value
      var sabbir = $(this).attr('data-filter');

      //filter protfolio
      $projects.isotope({
          filter: sabbir,
      });

      //active button
      $('#isotope-filter').find('.active').removeClass('active');
      $(this).addClass('active');

  });
});

$(function () {
  $('.counter').counterUp({
      delay: 40,
      time: 1000
  });
});





