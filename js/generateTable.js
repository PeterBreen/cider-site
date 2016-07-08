$(document).ready(function(){
  $.getJSON({
    type: 'GET',
    url: 'data/ciderlist.json',
    success: function (data) {
      console.log('JSON get success');
      var tableRow;
      for (var i = 0; i < data.length; i++) {
        tableRow = $('<tr />');
        tableRow.append('<td>' + data[i].Brand + '</td>');
        tableRow.append('<td>' + data[i].Cider + '</td>');
        tableRow.append('<td>' + data[i].Rating + '</td>');
        tableRow.append('<td>' + data[i].Notes + '</td>');
        $('#cider-table').append(tableRow);
      }
    }
  });
});
