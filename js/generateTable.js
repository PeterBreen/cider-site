//uses code and logic from https://gist.github.com/chrislkeller/3230081

//begin main function; needs DOM ready state
$(document).ready(function(){
  retriveData();
});

// grab data
function retriveData() {
  var dataSource = '../data/ciderlist.json';
  $.getJSON(dataSource, renderDataVisualsTemplate);
};

// create projects content template
function renderDataVisualsTemplate(data){
  getTemplateAjax('dataDetailsTemplate.handlebars', function(template) {
    handlebarsDebugHelper(); //this function should be removed after debug is complete
    $('#cider-table-body').html(template(data));
  });
};

// render handlebars templates via ajax
function getTemplateAjax(path, callback) {
  var source, template;
  $.ajax({
    url: path,
    success: function (data) {
      source = data;
      template = Handlebars.compile(source);
      if (callback) callback(template);
    }
  });
}
//end

// add handlebars debugger
function handlebarsDebugHelper(){
  Handlebars.registerHelper('debug', function(optionalValue) {
    console.log('Current Context: ' + this);
  });
};
// end
