// Todoolean
// ● Cancellazione
// ● Modifica
// ● Inserimento campo “orario

var urlAPI = 'http://157.230.17.132:3008/todos';
var container = $('.container');
var input = $('#text');
var button = $('#search');
var checkdelete = $('.delete');
$(document).ready(function() {

  getData();

  button.click(function() {
    var mytext = input.val();
    $.ajax({
      url: urlAPI,
      method: 'POST',
      data: {
        text: mytext
      },
      success: function(data) {
        getData();
      },
      error: function(errore) {

      }
    });
  });


  $(document).on('click', '.delete', function() {
    var id = $(this).attr('data-id');
    $.ajax({
      url: urlAPI + '/' + id,
      method: 'DELETE',

      success: function(data) {
        getData();
      },
      error: function(errore) {
      }
    });
  });
});

function printData(file) {
  container.html('<ul>');
  for (var i = 0; i < file.length; i++) {
    container.append('<li><span class="delete" data-id="' + file[i].id + '<i class="far fa-check-square"></i></span>' + file[i].text + '</li><br>');
  }
  container.append('<ul>');
}

function getData() {
  $.ajax({
    url: urlAPI,
    method: 'GET',
    success: function(data) {
      printData(data);
    },
    error: function(errore) {
    }
  });
}
