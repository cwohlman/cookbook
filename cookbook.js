if (Meteor.isClient) {
  Meteor.subscribe('recipes', function () {
    if (Meteor.userId() && !Recipes.findOne({userId: Meteor.userId()})) {
      Recipes.insert({
        userId: Meteor.userId()
        , name: 'My Recipe'
        , description: "You can edit this recipe because it belongs to you."
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Recipes.findOne()) {
      Recipes.insert({
        name: 'Welcome'
        , description: "This app is a package demonstration disguised as a cookbook. Switch to the steps tab for a description of what the packages do."
        , steps: [
          {
            prep: "We start with the rules package, the rules package provides the core functions for checking the validity of values. Every validation check performed by the 'schema' package is handled internally using the rules package."
            , ingredient: "meteor-validation-rules"
            , amount: 1
          }
          , {
            prep: "This package handles data modeling, if try entering a random string into the amount field below the schema package is responsible for validating that input."
            , ingredient: "meteor-validation-schema"
            , amount: 1
          }
          , {
            prep: "The most magical of the packages shadow objects makes a reactive object look like a plain javascript object, which makes for really beautiful templates."
            , ingredient: "meteor-shadow-objects"
            , amount: 1
          }
          , {
            prep: "The forms package is the venear on the schema and shadow objects packages. The forms package takes all that cool functionality and ties it down to a set of default templates that also serve as examples for how to write your own custom templates."
            , ingredient: "meteor-useful-forms"
            , amount: 1
          }
          , {
            prep: "This package ensures that your validation isn't only on the front end. You can attach a schema and custom rules to a collection which will be enforced whenever client side data operations are performed."
            , ingredient: "meteor-collection-rules"
            , amount: 1
          }
        ]
      });
    }
  });
}
