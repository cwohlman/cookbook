Template.RecipeList.helpers({
	recipes: function () {
		return Recipes.find();
	}
	, selected: function () {
		return Session.equals('selectedRecipeId', this._id);
	}
});

Template.RecipeList.events({
	'click .recipe-list-item': function () {
		Session.set('selectedRecipeId', this._id);
	}
	, 'click .btn-add-recipe': function () {
		Session.set('selectedRecipeId', null);
		$('form input[name="name"]').focus();
	}
});