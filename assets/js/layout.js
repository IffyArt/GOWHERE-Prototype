$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.name').on('click', () => {
    $('.action-list').toggleClass('show')
    $('.person .name').toggleClass('action')
  });
});
