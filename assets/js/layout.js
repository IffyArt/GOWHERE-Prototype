$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('nav .name').on('click', () => {
    $('.action-list').toggleClass('show')
    $('.person .name').toggleClass('action')
  });
});
