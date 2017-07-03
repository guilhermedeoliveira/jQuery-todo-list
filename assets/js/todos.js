// Checked feature
$('ul').on('click', 'li', function() {
  $(this).toggleClass('checked');
});

// Delete feature
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
})

// New todo feature
$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    var newTodo = $(this).val();
    $(this).val('');
    $('ul').append('<li>' + newTodo + ' <span><i class="fa fa-trash" aria-hidden="true"></i></span></li>');
  }
});
