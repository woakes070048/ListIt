Template.sideMenu.events({
  "click #addIngredientIcon": function(event, template){
    $('#ingredientAdd')
     .modal('show');
  },
  "click #addRecipeIcon": function(event, template){
    $('#recipeAdd')
     .modal('show');
  }
});
