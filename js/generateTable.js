
// render ciderlist from JSON data
var renderFromJSON = function() {
  var returnedData = $.getJSON('/data/ciderlist.json');
  console.log(returnedData);
  return returnedData;
};

var source = $('#cider-table-body-template').html();
var template = Handlebars.compile(source);
var context = renderFromJSON();
var html = template(context);
