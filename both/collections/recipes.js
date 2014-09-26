Recipes = new Meteor.Collection('recipes');

CollectionRule.attachSchema(Recipes, {
	name: 'recipe'
	, schema: {
		name: []
		, description: []
		, categories: {
			isArray: true
			, rules: []
		}
		, tags: {
			isArray: true
			, rules: []
		}
		, steps: {
			isArray: true
			, schema: {
				ingredient: []
				, amount: []
				, unit: []
				, prep: []
				, comments: []
			}
		}
	}
});
