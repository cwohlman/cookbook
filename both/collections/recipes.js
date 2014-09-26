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
				ingredient: [Rule.notEmpty, Rule.isString, Rule.minLength(2), Rule.maxLength(120)]
				, amount: [Rule.isFinite, Rule.minValue(0)]
				, unit: [Rule.isString.optional()]
				, prep: new Rule([Rule.isString, Rule.maxLength(255)]).optional()
				, comments: Meteor.isClient ? Rule.isString.optional() : Rule.minLength(10).optional()
			}
		}
	}
});
