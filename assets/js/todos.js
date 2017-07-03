// Checked feature
$('li').on('click', function() {
  $(this).toggleClass('checked');
});

$('span').on('click', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
})
