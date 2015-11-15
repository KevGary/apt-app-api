var socket = io();

$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){
  $('#msg-stream').append($('<li>').text(msg));
});

//emit
// socket.emit('move made', game.pgn(), game.history());

//listen
// socket.on('move made', function (newPosition) {
//   game.load_pgn(newPosition);
//   board.position(game.fen());

//   updateStatus();
// });