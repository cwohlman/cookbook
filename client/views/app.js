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
		this._.hasPendingSave(true);
		this._.messages([{
			kind: 'info'
			, message: "Saving."
		}]);
		if (this._.original) {
			Recipes.update(this._.original._id, {
				$set: this._()
			}, function (error, result) {
				if (error) {
					self._.messages([{
						kind: 'error'
						, message: 'Save failed: ' + error.reason
					}]);
				} else {
					self._.messages([
					{
						kind: 'success'
						, message: 'Saved'
					}
					]);
					self._.hasPendingSave(false);
				}
			});
		} else {
			var recipe = this._();
			recipe.userId = Meteor.userId();
			var id = Recipes.insert(recipe, function (error, result) {
				if (error) {
					self._.messages([{
						kind: 'error'
						, message: 'Save failed: ' + error.reason
					}]);
				} else {
					self._.messages([
					{
						kind: 'success'
						, message: 'Saved'
					}
					]);
					self._.hasPendingSave(false);
				}
			});
			Session.set('selectedRecipeId', id);
		}
	}
	, 'click .btn-cancel': function (e, tmpl) {
		this._.hasPendingSave(false);
		this._.resetOriginal();
		this._.resetFormHelpers();
	}
});