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
		var self = this;
		if (this._.original) {
			Recipes.update(this._.original._id, {
				$set: this._()
			}, function (error, result) {
				if (error) {
					Session.set('messages', [{
						kind: 'error'
						, message: 'Save failed: ' + error.reason
					}]);
				} else {
					Session.set('messages', [
					{
						kind: 'success'
						, message: 'Saved'
					}
					]);
				}
				Meteor.setTimeout(function () {Session.set('messages', null);}, 2000);
			});
		} else {
			var recipe = this._();
			recipe.userId = Meteor.userId();
			Recipes.insert(recipe, function (error, result) {
				if (error) {
					Session.set('messages', [{
						kind: 'error'
						, message: 'Save failed: ' + error.reason
					}]);
				} else {
					Session.set('messages', [
					{
						kind: 'success'
						, message: 'Saved'
					}
					]);
				}
				Meteor.setTimeout(function () {Session.set('messages', null);}, 2000);
			});
			
		}
	}
});