$(document).ready(function () {
  $('.sidenav').sidenav();
  $('nav .name').on('click', () => {
    $('.action-list').toggleClass('show')
    $('.person .name').toggleClass('action')
  });
});
