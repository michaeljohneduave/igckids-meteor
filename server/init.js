Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/.uploads/tmp',
    uploadDir: process.env.PWD + '/.uploads/',
    checkCreateDirectories: true, //create the directories for you
    acceptFileTypes: /.(gif|jpe?g|png|mp4|avi)$/i,
    getFileName: function (fileInfo, formData) {
      return Random.id(_.random(40,70)) + "." + fileInfo.type.split("/")[1];
    }
  })
});
