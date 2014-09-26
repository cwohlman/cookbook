CollectionRule.isOwner = new Rule(function (doc) {
	return doc.userId && doc.userId === this.userId;
}, 403, 'you must be the owner');

CollectionRule.allowInsert(Recipes, CollectionRule.isOwner);
CollectionRule.allowUpdate(Recipes, CollectionRule.isOwner);