Recipes = new Meteor.Collection('recipes');

CollectionRule.attachSchema(Recipes, {
	name: 'recipe'
	, schema: {
		name: [Rule.isString, Rule.notEmpty, Rule.maxLength(120)]
		, description: [Rule.isString, Rule.maxLength(255)]
		, categories: {
			isArray: true
			, rules: [Rule.isString, Rule.minLength(3), Rule.maxLength(20)]
		}
		, tags: {
			isArray: true
			, rules: [Rule.isString, Rule.minLength(3), Rule.maxLength(20)]
		}
		, steps: {
			isArray: true
			, schema: {
				ingredient: [Rule.isString, Rule.minLength(2), Rule.maxLength(120)]
				, amount: [Rule.isNumber, Rule.minValue(0)]
				, unit: [Rule.isString]
				, prep: [Rule.isString, Rule.maxLength(255)]
				, comments: [Rule.isString]
			}
		}
	}
});
