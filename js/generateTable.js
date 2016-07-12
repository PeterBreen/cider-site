$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: '/data/ciderlist.json',
    dataType: 'JSON',
    success: function(data) {
      $(data).each(function(){
        var brand = $(this).find('Brand').text();
        var cider = $(this).find('Brand').text();
        var rating = $(this).find('Rating').text();
        var notes = $(this).find('Notes').text();

        var output = '<tr>';
        output += '<td class="brand">' + brand + '</td>';
        output += '<td class="cider">' + cider + '</td>';
        output += '<td class="rating">' + rating + '</td>';
        output += '<td class="notes">' + notes + '</td>';
        output += '</tr>';
        $('#cider-table tbody').append(output);

        var options = {
          valueNames: [ 'brand', 'cider', 'rating', 'notes' ]
        };
        var userList = new List('listjs', options);
      });
    },
    always: function(data) {
      console.log('always');
    }
  });
});
