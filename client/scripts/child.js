Template.child.created = function () {

};

Template.child.rendered = function () {
  $(".child-image-carousel").owlCarousel({
    items : 1,
    singleItem : true,
    paginationSpeed : 400,
  });
};

Template.child.events({
  "click #editChild" : function (evt, tmpl) {
    var id = $(evt.target).attr("data-id");

    if (!id) {
      return;
    }

    Router.go("editchild", {_id : id});
  },

  "click #deleteChild" : function (evt, tmpl) {
    var id = $(evt.target).attr("data-id");

    if (!id) {
      return;
    }

    Children.update({
      _id : id
    }, {
      $set : {
        isDeleted : true
      }
    }, function (err, res) {
      if (err) {
        toastr.error("Something wrong happend while deleting.");
        return console.error(err);
      }

      Router.go("home");
    });
  }
});

Template.child.helpers({
  formatDate : function (date) {
    return moment(new Date(date)).format("MMM-DD-YYYY");
  },

  formatArray : function (array) {
    var str = "";
    _.each(array, function (elem, index) {
      str += elem;

      if (index !== array.length - 1) {
        str += ", ";
      }
    });

    return str;
  },

  uppercaseThis : function (str) {
    return str.toUpperCase();
  }
})
