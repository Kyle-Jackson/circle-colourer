var $ball = $('.ball');
var $input = $('#color');

$('form').on('change', function (e) {
  var ballColor = $input.val();

  $ball.css('background-color', ballColor);

});
