$(document).ready(function () {
  if (sessionStorage.getItem('dismissMessage') === null) {
    $('#modalFullScreenWrapper').show();
  }
})


$('#hideWrapperBtn').click(function () {
  sessionStorage.setItem('dismissMessage', 1)
  $('#modalFullScreenWrapper').hide();
});
