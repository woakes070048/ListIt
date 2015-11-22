Template.ingredientList.helpers({
  ingredients: function(){
    return Ingredients.find({},{sort:{name: 1}});
  }
})


Template.ingredientList.events({
  'click #delete': function(e){
    e.preventDefault();
    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Ingredients.remove(this._id);
    }
  }
})
