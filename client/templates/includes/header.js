Template.header.events({
  "click #sidebar-toggle": function(event, template){
    $('#sidebar').sidebar({
      context: $('#pushable')
    }).sidebar('toggle');
  }
});
