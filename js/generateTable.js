//global variables
var listOptions, userList;

//retrieves cider data from JSON, passes to render function as callback
var getCiderData = function() {
  $.ajax({
    type: 'GET',
    url: 'data/ciderlist.json',
    success: function (data, message, xhr) {
      $.each(data, renderTable);
      enableList();
    }
  });
};

//renders each table row, appends to DOM at specified ID
function renderTable() {
  var row = $('<tr />');
  $('#cider-table-body').append(row);
  row.append($('<td class="brand">' + this.Brand + '</td>'));
  row.append($('<td class="cider">' + this.Cider + '</td>'));
  row.append($('<td class="rating">' + this.Rating + '</td>'));
  row.append($('<td class="notes">' + this.Notes + '</td>'));
};

//List.js function
var enableList = function() {
  var listOptions = {
    valueNames: [ 'brand', 'cider', 'rating', 'notes' ]
  };
  var userList = new List('listjs', listOptions);
};
//when DOM is ready, get data and render table, List.js to enable search
$(document).ready(function(){
  getCiderData();
});
