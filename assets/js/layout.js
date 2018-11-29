$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.sidenav-chat').sidenav({
    edge: 'right'
  });
  $('.modal').modal();
  $('select').formSelect();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('nav .name').on('click', () => {
    $('.action-list').toggleClass('show')
    $('.person .name').toggleClass('action')
  });
});
