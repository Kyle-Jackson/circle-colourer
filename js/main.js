var $ball = $('.ball');
var $input = $('#colour');

$('form').on('change', function () {
  var ballColour = $input.val();

  $ball.css('background-color', ballColour);

});
