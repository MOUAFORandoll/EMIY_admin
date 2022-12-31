// Counterup
$('.counter').counterUp({
  time: 1000
});

// Main Navigation
$('#menu-toggle').click(function(){
  $(this).toggleClass('open'),
    $('.main-nav').toggleClass('show-it');
})
