Meteor.publish("children_pub", function (keywords, options) {
  _.extend(keywords, {
    isDeleted : false
  });

  return Children.find(keywords, options);
});
