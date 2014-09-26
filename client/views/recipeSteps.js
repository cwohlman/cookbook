Template.RecipeSteps.helpers({
	stepLabel: function () {
		var index = this._.parent.indexOf(this) + 1;
		return "Step #" + index + " Instructions";
	}
});

Template.RecipeSteps.events({
	'click .btn-add-step': function () {
		this.steps.push({});
	}
});