Meteor.publish("images_pub", function (keywords, options) {
  return Images.find(keywords, options);
});
