Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    Images.insert({
      userId: 1,
      name: fileInfo.name
    }, function (err, result) {
      if (err) {
        return console.error(err);
      }
    });
  }
});
