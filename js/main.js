var $body = $('body');

$('html').on('keydown', function (e) {
  var $newBall = $('<div>');
  var newLeft = Math.floor(Math.random() * (1000 - 0)) + 0;
  var newTop = Math.floor(Math.random() * (1000 - 0)) + 0;

  $newBall.addClass('ball');
  $body.append($newBall);
  $newBall.css('left', newLeft);
  $newBall.css('top', newTop);

  var $ball = $('.ball');

  $('#btn-right') .on('click', function () {
    var newLeft = $ball.offset() .left + 10;
    $ball.css('left', newLeft);
  });

  $('#btn-left') .on('click', function () {
    var newLeft = $ball.offset() .left - 10;
    $ball.css('left', newLeft);
  })

  $('#btn-up') .on('click', function () {
    var newTop = $ball.offset() .top - 10;
    $ball.css('top', newTop);
  });

  $('#btn-down') .on('click', function () {
    var newTop = $ball.offset() .top + 10;
    $ball.css('top', newTop);
  });

});
