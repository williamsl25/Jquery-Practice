$(document).ready(function() {
// ** displays pictures when you press button **
  $(".tour").on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', showPhotos);
  $('.photos').on('mouseleave', 'li',  showPhotos);

  function showPhotos(){
      $(this).find('span').slideToggle();
  }

// ** calculates the total when press enter on number of nights **
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tours").data("daily-price");
    $('#total').text(nights * dailyPrice);
    $('#nights-count').text($(this).val());
  });

  $('#nights').on('focus', function() {
  	$('#nights').val(7);
  });

// guided tours show photos
  $('.see-photos').on('click', function(event) {
   event.stopPropagation();
   event.preventDefault();
   $(this).closest('.tours').find('.photos').slideToggle();
  });
  $('.tours').on('click', function(event) {
    event.preventDefault();
    alert('Book this trip!');
  });
  $('.photos').on('mouseenter', 'li', showPhotos);
  $('.photos').on('mouseleave', 'li',  showPhotos);

  function showPhotos(){
      $(this).find('span').slideToggle();
  }

  $('.tours').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '2'}, 'fast');
  });
  $('.tours').on('mouseleave', function() {
    $(this).removeClass('highlight');
    $(this).find('.per-night').animate({'top': '0', 'opacity': '0'}, 'fast');
  });
});
