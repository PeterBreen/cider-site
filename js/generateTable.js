var getCiderData = function() {
  $.ajax({
    type: 'GET',
    url: 'data/ciderlist.json',
    success: function (data, message, xhr) {
      $.each(data, renderTable);
    }
  });
};

function renderTable() {
  var row = $('<tr />');
  $('#cider-table-body').append(row);
  row.append($('<td class="brand">' + this.Brand + '</td>'));
  row.append($('<td class="cider">' + this.Cider + '</td>'));
  row.append($('<td class="rating">' + this.Rating + '</td>'));
  row.append($('<td class="notes">' + this.Notes + '</td>'));
};
