Template.uploadmedia.created = function () {
  this.files = new ReactiveVar([]);
  this.uploaded = new ReactiveVar([]);
  this.isAdding = new ReactiveVar(false);
}

Template.uploadmedia.rendered = function () {
  var $grid = $('.image-grid').isotope({
    itemSelector : ".image-grid-item",
    masonry : {
      columnWidth : 100,
      gutter : 5
    }
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
    $('.image-grid').isotope({
      itemSelector : ".image-grid-item",
      layoutMode: 'masonry',
      transitionDuration: "0.2s",
    });
  });
  $grid.isotope('shuffle');
}

Template.uploadmedia.events({
  "click #upload_widget_opener" : function (evt, tmpl) {
    cloudinary.openUploadWidget({
      cloud_name: 'igckids',
      upload_preset: 'q78ylk5w'
    }, function (error, result) {
      if (error) {
        return toastr.error("Something wrong happened.");
      }

      var images = Session.get("images").concat(result);
      Session.set("images", images);
    });
  },

  "click #addchild" : function (evt, tmpl) {
    var files = Session.get("images");
    var isEditing = Router.current().route.getName() === "editchild";
    var child = Children.findOne({});
    var fields = Session.get("forms");

    try {
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

    if (isEditing) {
      return Children.update({
        _id : child._id
      }, {
        $set : fields
      }, function (err, result) {
        tmpl.isAdding.set(false);

        if (err) {
          console.error(err);
          return toastr.error("Something went wrong while adding.");
        }
        toastr.success("Successfully saved kid.");
        Session.set("images", []);
        Session.set("forms", {});
        Session.set("currentPage", 0);
        Router.go("home");
      });
    }

    Children.insert(fields, function (err, result) {
      tmpl.isAdding.set(false);

      if (err) {
        console.error(err);
        return toastr.error("Something went wrong while adding.");
      }
      toastr.success("Successfully added kid.");
      Session.set("images", []);
      Session.set("forms", {});
      Session.set("currentPage", 0);
      Router.go("home");
    });
  },

  "click .remove-image-btn" : function (evt, tmpl) {
    if (!window.confirm("Are you sure you want to remove the image?")) {
      return;
    }

    var images = Session.get("images");
    var index = null;

    _.each(images, function (elem, idx) {
      if (elem.public_id === evt.target.id) {
        index = idx;
      }
    });

    if (index) {
      images.splice(index, 1);
      Session.set("images", images);
    }
  }
});

Template.uploadmedia.helpers({
  listFiles : function () {
    return Session.get("images");
  },

  isAdding : function () {
    var isAdding = Template.instance().isAdding.get();
    var isEditing = Router.current().route.getName() === "editchild";

    return  {
      addBtnValue : isAdding ? (isEditing ? "Saving kid" : "Adding kid") : (isEditing ? "Save kid" : "Add kid"),
      disableAddBtn : (isAdding || !isEditing) ? "" : "",
      isAdding : isAdding ? "fa-refresh fa-spin" : "fa-plus"
    };
  },

  hasImagesAdded : function () {
    return Boolean(Session.get("images")) ? "" : "disabled";
  }
});
