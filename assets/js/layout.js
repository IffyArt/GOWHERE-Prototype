$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('select').formSelect();
  $('nav .name').on('click', () => {
    $('.action-list').toggleClass('show')
    $('.person .name').toggleClass('action')
  });
});
