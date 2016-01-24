Template.uploadmedia.created = function () {
  this.files = new ReactiveVar([]);
  this.uploaded = new ReactiveVar([]);
  this.isAdding = new ReactiveVar(false);
}

Template.uploadmedia.rendered = function () {

}

Template.uploadmedia.events({
  "change #mediauploader" : function (evt, tmpl) {
    var reader = new FileReader(),
      files = [],
      x = 0;

    reader.readAsDataURL(evt.target.files[x++]);
    reader.addEventListener("load", function (event) {
      files.push({
        file : evt.target.files[x - 1],
        data : event.target.result
      });

      if (x < evt.target.files.length) {
        reader.readAsDataURL(evt.target.files[x++]);
      } else {
        tmpl.files.set(files);
      }
    });
  },

  "click #upload_widget_opener" : function (evt, tmpl) {
    cloudinary.openUploadWidget({
      cloud_name: 'igckids',
      upload_preset: 'q78ylk5w'
    }, function (error, result) {
      if (error) {
        return toastr.error("Something wrong happened.");
      }

      Session.set("images", result);
    });
  },

  "click #addchild" : function (evt, tmpl) {
    var files = Session.get("images");
    var isEditing = Router.current().route.getName() === "editchild";
    var child = Children.findOne({});
    var fields = Session.get("forms");

    try {
      if (isEditing) {
        files = files.concat(child.images);
      }

      if (!files.length) {
        return alert("Add photos before adding kid.");
      }
    } catch (e) {
      console.error(e);
      return toastr.error("Something went wrong while adding.");
    }

    tmpl.isAdding.set(true);

    _.extend(fields, {
      images : files
    });

    Children.update({
      _id : child._id
    }, {
      $set : fields
    }, function (err, result) {
      tmpl.isAdding.set(false);

      if (err) {
        console.error(err);
        return toastr.error("Something went wrong while adding.");
      }
      toastr.success("Successfully added kid.");
      Session.set("images", []);
      Session.set("forms", {});
      Session.set("currentPage", 0);

      if (isEditing) {
        Router.go("home");
      }

    });
  }
});

Template.uploadmedia.helpers({
  listFiles : function () {
    var isEditing = Router.current().route.getName() === "editchild";
    var savedImages = Children.findOne({}).images;
    var recentlyUploadedImages = Session.get("images");

    return isEditing ? savedImages.concat(recentlyUploadedImages) : Session.get("images");
  },

  isAdding : function () {
    var isAdding = Template.instance().isAdding.get();
    var isEditing = Router.current().route.getName() === "editchild";

    return  {
      addBtnValue : isAdding ? (isEditing ? "Saving kid" : "Adding kid") : (isEditing ? "Save kid" : "Add kid"),
      disableAddBtn : (isAdding || !isEditing) ? "disabled" : "",
      isAdding : isAdding ? "fa-refresh fa-spin" : "fa-plus"
    };
  },

  hasImagesAdded : function () {
    var isEditing = Router.current().route.getName() === "editchild";
    var savedImages = Children.findOne({}).images.concat(Session.get("images"));

    return Boolean(savedImages.length) ? "" : "disabled";
  }
});
