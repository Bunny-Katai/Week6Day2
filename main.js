
$(document).ready(function () {
  for (let i = 0; i < 16; i++) {
    $('#grid-container').append('<div class="grid-item"></div>')
  }
  $('.grid-item').on('click', function () {
    $(this).toggleClass('toggled-gray');
  });
})