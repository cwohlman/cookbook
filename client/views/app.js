Template.App.helpers({
	schema: function () {
		return Recipes.schema;
	}
	, recipe: function () {
		return Recipes.findOne(Session.get('selectedRecipeId'));
	}
});

Template.App.events({
	'submit form': function () {
		if (this._.original) {
			Recipes.update(this._.original._id, {
				$set: this._()
			});
		} else {
			var recipe = this._();
			recipe.userId = Meteor.userId();
			Recipes.insert(recipe, function (error, result) {
				if (error) alert(error.reason);
				else Session.set('selectedRecipeId', result);
			});
			
		}
	}
});