Template.RecipeDetails.helpers({
	schema: function () {
		return Recipes.schema;
	}
	, recipe: function () {
		return Recipes.findOne(Session.get('selectedRecipeId'));
	}
});

Template.RecipeDetails.events({
	'submit form': function () {
		if (this._.original) {
			Recipes.update(this._.original._id, {
				$set: {
					name: this.name
					, description: this.description
				}
			});
		} else {
			var recipe = this._.clone();
			recipe.userId = Meteor.userId();
			Recipes.insert(recipe, function (error, result) {
				if (error) alert(error.reason);
				else Session.set('selectedRecipeId', result);
			});
			
		}
	}
});